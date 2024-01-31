import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-low',
  standalone: true,
  imports: [CommonModule],
  template:`
    <section [ngClass]="['w-full h-[600px]  text-center', cssClass]">
      Heavy Loaders Low
    </section>

  `,

})
export class HeavyLoadersLowComponent {

  @Input({required: true}) cssClass!: string

  constructor(){
    const start = Date.now();
    while (Date.now() - start < 3000) {    }
    console.log('Cargado');
  }

}
