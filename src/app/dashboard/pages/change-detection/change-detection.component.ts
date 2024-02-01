import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />
    <!--  <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre> -->

    <div
      class="tab bg-gray-100 font-sans flex h-screen items-center justify-center"
    >
      <div x-data="{ openTab: 1 }" class="p-8">
        <div class="max-w-md mx-auto">
          <div
            x-show="openTab === 1"
            class="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <h2 class="text-2xl font-semibold mb-2 text-blue-600">
              Propiedad tradicional
            </h2>
            <p class="text-gray-700">{{ frameworkAsSignal() | json }}</p>
          </div>

          <div
            x-show="openTab === 2"
            class="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <h2 class="text-2xl font-semibold mb-2 text-blue-600">
             Propiedad con signal()
            </h2>
            <pre class="text-gray-700">{{ frameworkAsSignal() | json }}</pre>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js"
      defer
    ></script>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((val) => ({
        ...val,
        name: 'React',
      }));
      /* this.frameworkAsProperty.name = 'react' */
      console.log('Hola Mundo');
    }, 3000);
  }
}
