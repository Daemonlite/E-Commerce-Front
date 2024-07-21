<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
// Reactive variables for toggling mobile menu and search input
const isMenuOpen = ref(false);
const isMenuOpen1 = ref(false);
const isMenuOpen2 = ref(false);
const isMenuOpen3 = ref(false);
const isSearchOpen = ref(false);

// Methods to toggle menu and search input
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const clothingLinks = [
  { name: "Shoes & Sneakers", isActive: true, url: "/shoes" },
  { name: "Sunglasses", isActive: false, url: "/glasses" },
  { name: "Kurtis, Tunics & Tops", isActive: false },
  { name: "Sarees", isActive: false },
  { name: "Ethnic Wear", isActive: false },
  { name: "Dress Materials", isActive: false },
  { name: "Lehenga Cholis", isActive: false },
  { name: "Dupattas & Shawls", isActive: false },
  { name: "Jackets", isActive: false },
];

const toggleMenu1 = () => {
  isMenuOpen1.value = !isMenuOpen1.value;
};

const AppliancesLinks1 = [
  { name: "Fridges", isActive: true, url: "/fridges" },
  { name: "Standing & CeilingFans", isActive: false, url: "/glasses" },
  { name: "Dish Washers", isActive: false },
  { name: "Air Conditioners", isActive: false },
  { name: "Rice Cookers", isActive: false },
  { name: "Electric & Gas Cookers", isActive: false },
  { name: "Blenders", isActive: false },
  { name: "Microwaves", isActive: false },
  { name: "Washing & Drying Machines", isActive: false },
];
const toggleMenu2 = () => {
  isMenuOpen2.value = !isMenuOpen2.value;
}

const GadgetsLinks2 = [
  { name: "Sunglasses", isActive: true, url: "/glasses" },
  { name: "Kurtis, Tunics & Tops", isActive: false },
  { name: "Sarees", isActive: false },
  { name: "Ethnic Wear", isActive: false },
  { name: "Dress Materials", isActive: false },
  { name: "Lehenga Cholis", isActive: false },
  { name: "Dupattas & Shawls", isActive: false },
  { name: "Jackets", isActive: false },
];


const toggleMenu3 = () => {
  isMenuOpen3.value = !isMenuOpen3.value;
};

const FurnitureLinks3 = [
  { name: "Sofas", isActive: true, url: "/sofas" },
  { name: "Mattresses", isActive: false, url: "/sofa-beds" },
  { name: "Kitchen & Dining Sets", isActive: false },
  { name: "Coffee Tables", isActive: false },
  { name: "Office Furniture", isActive: false },
  { name: "BarStools", isActive: false },
]
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

// Event listeners for close buttons
const closeMenu = () => {
  isMenuOpen.value = false;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};

// Event handler for clicking outside to close menu/search
const handleClickOutside = (event) => {
  if (
    !event.target.closest("#collapseMenu") &&
    !event.target.closest("#toggleOpen")
  ) {
    closeMenu();
  }
  if (!event.target.closest(".bg-gray-50")) {
    closeSearch();
  }
};

// Add event listener for clicking outside
document.addEventListener("click", handleClickOutside);

// Array of product sub-links

</script>

<template>
  <header
    class="flex shadow-md bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50"
  >
    <div
      class="flex flex-wrap items-center justify-between px-10 py-3 relative lg:gap-y-4 max-sm:gap-x-4 gap-y-6 w-full"
    >
      <router-link :to="{ name: 'landing' }">
        <svg
          width="90"
          height="50"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Gradient Definition -->
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color: blue; stop-opacity: 1" />
              <stop
                offset="100%"
                style="stop-color: #feb47b; stop-opacity: 1"
              />
            </linearGradient>
          </defs>

          <!-- Text with Gradient Fill and Shadow -->
          <text
            x="50%"
            y="50%"
            font-family="Verdana"
            font-size="60"
            fill="url(#textGradient)"
            text-anchor="middle"
            alignment-baseline="central"
            style="filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))"
          >
            Daemon
          </text>
        </svg>
      </router-link>

      <div
        id="collapseMenu"
        class="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
      >
        <button
          id="toggleClose"
          class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          @click="closeMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </button>

        <ul
          class="lg:flex max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
        >
          <li class="mb-6 hidden max-lg:block">
            <a href="javascript:void(0)"
              ><img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                class="w-36"
              />
            </a>
          </li>
          <li
            class="group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-3 relative"
          >
            <a
              href="javascript:void(0)"
              class="hover:text-pink-500 text-pink-500 text-sm block"
              @click="toggleMenu1"
            >
              Home Appliances
            </a>
            <div
              class="absolute shadow-lg bg-white px-8 py-4 min-h-[60px] lg:top-11 max-lg:top-8 -left-6 z-50"
              v-if="isMenuOpen1"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 w-max">
                <ul class="space-y-2">
                  <li
                    v-for="(link, index) in AppliancesLinks1"
                    :key="index"
                    class="rounded"
                    @click="toggleMenu1"
                  >
                    <router-link
                      :to="link.url"
                      :class="{
                        'text-pink-500 font-semibold': link.isActive,
                        'text-black': !link.isActive,
                        'hover:text-pink-500': true,
                        'text-sm': true,
                        block: true,
                      }"
                    >
                      {{ link.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li
            class="group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-3 relative"
          >
            <a
              href="javascript:void(0)"
              class="hover:text-pink-500 text-pink-500 text-sm block"
              @click="toggleMenu"
            >
              Clothing
            </a>
            <div
              class="absolute shadow-lg bg-white px-8 py-4 min-h-[60px] lg:top-11 max-lg:top-8 -left-6 z-50"
              v-if="isMenuOpen"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 w-max">
                <ul class="space-y-2">
                  <li
                    v-for="(link, index) in clothingLinks"
                    :key="index"
                    class="rounded"
                    @click="toggleMenu"
                  >
                    <router-link
                      :to="link.url"
                      :class="{
                        'text-pink-500 font-semibold': link.isActive,
                        'text-black': !link.isActive,
                        'hover:text-pink-500': true,
                        'text-sm': true,
                        block: true,
                      }"
                    >
                      {{ link.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li
            class="group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-3 relative"
          >
            <a
              href="javascript:void(0)"
              class="hover:text-pink-500 text-pink-500 text-sm block"
              @click="toggleMenu2"
            >
              Electonic Gadgets
            </a>
            <div
              class="absolute shadow-lg bg-white px-8 py-4 min-h-[60px] lg:top-11 max-lg:top-8 -left-6 z-50"
              v-if="isMenuOpen2"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 w-max">
                <ul class="space-y-2">
                  <li
                    v-for="(link, index) in GadgetsLinks2"
                    :key="index"
                    class="rounded"
                    @click="toggleMenu2"
                  >
                    <router-link
                      :to="link.url"
                      :class="{
                        'text-pink-500 font-semibold': link.isActive,
                        'text-black': !link.isActive,
                        'hover:text-pink-500': true,
                        'text-sm': true,
                        block: true,
                      }"
                    >
                      {{ link.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li
            class="group max-lg:border-b lg:border-r border-gray-400 lg:px-8 max-lg:py-3 relative"
          >
            <a
              href="javascript:void(0)"
              class="hover:text-pink-500 text-pink-500 text-sm block"
              @click="toggleMenu3"
            >
             Furniture
            </a>
            <div
              class="absolute shadow-lg bg-white px-8 py-4 min-h-[60px] lg:top-11 max-lg:top-8 -left-6 z-50"
              v-if="isMenuOpen3"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 w-max">
                <ul class="space-y-2">
                  <li
                    v-for="(link, index) in FurnitureLinks3"
                    :key="index"
                    class="rounded"
                    @click="toggleMenu3"
                  >
                    <router-link
                      :to="link.url"
                      :class="{
                        'text-pink-500 font-semibold': link.isActive,
                        'text-black': !link.isActive,
                        'hover:text-pink-500': true,
                        'text-sm': true,
                        block: true,
                      }"
                    >
                      {{ link.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex items-center max-lg:ml-auto">
        <div class="">
          <button
            @click="router.push({ name: 'register' })"
            class="w-[100px] ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>

        <button @click="toggleMenu" class="lg:hidden ml-7">
          <svg
            class="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>


</template>
