import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 1"></app-title>
    <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-4 ">
      <a href="#" class=" shadow-2xl relative ">
        <div
          class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group "
        >
          <div
            class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  "
          >
            <div class="w-full h-full   p-5   relative">
              <div
                class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 "
              >
                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                  Standard Color
                </h2>
                <p class="text-lg font-light text-white">
                  Lorem ipsum dolor sit amet, #brands.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/400x400"
            class="w-full z-0  h-full    object-fill example "
          />
        </div>
      </a>
      <a href="#" class=" shadow-2xl relative ">
        <div
          class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group "
        >
          <div
            class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  "
          >
            <div class="w-full h-full   p-5   relative">
              <div
                class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 "
              >
                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                  Standard Color
                </h2>
                <p class="text-lg font-light text-white">
                  Lorem ipsum dolor sit amet, #brands.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/400x400"
            class="w-full z-0  h-full    object-fill example "
          />
        </div>
      </a>
      <a href="#" class=" shadow-2xl relative ">
        <div
          class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group "
        >
          <div
            class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  "
          >
            <div class="w-full h-full   p-5   relative">
              <div
                class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 "
              >
                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                  Standard Color
                </h2>
                <p class="text-lg font-light text-white">
                  Lorem ipsum dolor sit amet, #brands.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/400x400"
            class="w-full z-0  h-full    object-fill example "
          />
        </div>
      </a>

    </div>
    <section class="mt-6 flex justify-start">
    <a href="#" class=" shadow-2xl relative ">
        <div
          class="  h-full relative shadow-2xl shadow-green-900 overflow-hidden group "
        >
          <div
            class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500  "
          >
            <div class="w-full h-full   p-5   relative">
              <div
                class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 "
              >
                <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                  Standard Color
                </h2>
                <p class="text-lg font-light text-white">
                  Lorem ipsum dolor sit amet, #brands.
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://source.unsplash.com/random/400x400"
            class="w-full z-0  h-full    object-fill example "
          />
        </div>
      </a>
      <div
        class="bg-blue-400 w-56 h-56"
        style="view-transition-name: hero2"
      > <img
        class="h-auto max-w-full rounded-lg"
        srcset="
          https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg
        "
        alt=""
        width="400"
        height="600"
        style="view-transition-name: hero1"
      /></div>
    </section>


  `,
})
export default class ViewTransitionComponent {}
