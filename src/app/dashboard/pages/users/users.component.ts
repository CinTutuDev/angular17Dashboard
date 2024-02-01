import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '@services/user.service';


@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UserService)

}
