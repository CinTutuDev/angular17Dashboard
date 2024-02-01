import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map, pipe } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  private url = 'https://reqres.in/api/users/';

  /* Numeral es private */
  #state = signal<State>({
    users: [],
    loading: true,
  });
  /* señal computada de solo lectura */
  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);
 /*  public loadingL = computed(() => this.#state().loading); */

  constructor() {
    this.http
      .get<UserResponse>(`${this.url}`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });

    console.log('Cargando data');
  }

  getUserById(id: string) {
   return this.http.get<UsersResponse>(`${this.url}${id}`).pipe(
      delay(1500),
      map((resp) => resp.data)
    );
  }
}
