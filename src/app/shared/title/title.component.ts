import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h2 class="mb-7 font-bold text-3xl text-gray-600 text-center">
    {{ title }} <!-- - {{withSahdow}} -->
  </h2>`,
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input({required: true}) title!: string;
  @Input({transform: booleanAttribute}) withSahdow: boolean = false;
}
