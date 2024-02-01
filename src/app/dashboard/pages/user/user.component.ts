import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if (user()) {
    <section>
      <img src="" [alt]="user()!.first_name" [srcset]="user()!.avatar" />
      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>

    }@else {
    <p>Cargando info...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private useS = inject(UserService);
  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }

    return 'informacion del usuario';
  });

  /*  public user = signal<User | undefined>(undefined); */
  public user = toSignal(
    this.route.params.pipe(switchMap(({ id }) => this.useS.getUserById(id)))
  );

  constructor() {
    this.route.params.subscribe((params) => {
      console.log({ params });
    });
  }
}
