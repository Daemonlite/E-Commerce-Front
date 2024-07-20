<script setup>
import { ref, computed } from "vue";

// Sample products data
const products = ref([
  {
    id: 1,
    name: "Sole Elegance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 10,
    category: "Casual",
    gender: "Men",
    image: "https://readymadeui.com/images/product9.webp",
  },
  {
    id: 2,
    name: "Urban Sneakers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 12,
    category: "Sport",
    gender: "Women",
    image: "https://readymadeui.com/images/product10.webp",
  },
  {
    id: 3,
    name: "Velvet Boots",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 14,
    category: "Boots",
    gender: "Men",
    image: "https://readymadeui.com/images/product11.webp",
  },
  {
    id: 4,
    name: "Summit Hiking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 12,
    category: "Sport",
    gender: "Women",
    image: "https://readymadeui.com/images/product12.webp",
  },
  {
    id: 5,
    name: "Zenith Glow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 15,
    category: "Casual",
    gender: "Men",
    image: "https://readymadeui.com/images/product13.webp",
  },
  {
    id: 6,
    name: "Echo Elegance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 14,
    category: "Casual",
    gender: "Women",
    image: "https://readymadeui.com/images/product14.webp",
  },
  {
    id: 7,
    name: "Pumps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 14,
    category: "Casual",
    gender: "Women",
    image: "https://readymadeui.com/images/product15.webp",
  },
  {
    id: 8,
    name: "Blaze Burst",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 14,
    category: "Sport",
    gender: "Men",
    image: "https://readymadeui.com/images/product10.webp",
  },
]);

const categories = ref(["All", "Casual", "Sport", "Boots"]);
const genders = ref(["All", "Men", "Women"]);

const selectedCategory = ref("All");
const selectedGender = ref("All");

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return (
      (selectedCategory.value === "All" ||
        product.category === selectedCategory.value) &&
      (selectedGender.value === "All" ||
        product.gender === selectedGender.value)
    );
  });
});

const mainImage = ref(
  filteredProducts.value.length > 0 ? filteredProducts.value[0].image : ""
);
const setMainImage = (image) => {
  mainImage.value = image;
};
</script>

<template>
  <div class="font-sans">
    <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
      <div
        class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12"
      >
        <div class="w-full lg:sticky top-0 sm:flex gap-2">
          <div
            class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4"
          >
            <img
              v-for="product in filteredProducts"
              :key="product.id"
              :src="product.image"
              :alt="product.name"
              class="w-full cursor-pointer rounded-md outline"
              @click="setMainImage(product.image)"
            />
          </div>
          <img
            :src="mainImage"
            alt="Product"
            class="w-4/5 rounded-md object-cover"
          />
        </div>
        <div class="w-full border border-space-gray-200 rounded-md p-6 shadow-md">
          <div class="flex mb-4">
            <div class="mr-4">
              <label class="font-bold text-gray-700">Category: </label>
              <select v-model="selectedCategory" class="border rounded p-2">
                <option
                  v-for="category in categories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700">Gender: </label>
              <select v-model="selectedGender" class="border rounded p-2">
                <option v-for="gender in genders" :key="gender" :value="gender">
                  {{ gender }}
                </option>
              </select>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ filteredProducts[0].name }}
          </h2>
          <div class="flex flex-wrap gap-4 mt-4">
            <p class="text-gray-800 text-xl font-bold">
              ${{ filteredProducts[0].price }}
            </p>
            <p class="text-gray-400 text-xl">
              <strike>${{ filteredProducts[0].price + 4 }}</strike>
              <span class="text-sm ml-1.5">Tax included</span>
            </p>
          </div>
          <div class="flex space-x-2 mt-4">
            <svg
              class="w-5 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
              />
            </svg>
            <svg
              class="w-5 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
              />
            </svg>
            <svg
              class="w-5 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
              />
            </svg>
            <svg
              class="w-5 fill-blue-600"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
              />
            </svg>
            <svg
              class="w-5 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
              />
            </svg>
          </div>
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-800">Sizes</h3>
            <div class="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                SM
              </button>
              <button
                type="button"
                class="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                MD
              </button>
              <button
                type="button"
                class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                LG
              </button>
              <button
                type="button"
                class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
              >
                XL
              </button>
            </div>
          </div>
          <button
            type="button"
            class="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
          >
            Add to cart
          </button>
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-800">About the item</h3>
            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
              <li>{{ filteredProducts[0].description }}</li>
            </ul>
          </div>
          <div class="mt-8">
            <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
            <div class="space-y-3 mt-4">
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">5.0</p>
                <svg
                  class="w-5 fill-blue-600 ml-1.5"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                  <div class="w-2/3 h-full rounded-md bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
              </div>
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">4.0</p>
                <svg
                  class="w-5 fill-blue-600 ml-1.5"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                  <div class="w-1/3 h-full rounded-md bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
              </div>
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">3.0</p>
                <svg
                  class="w-5 fill-blue-600 ml-1.5"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                  <div class="w-1/6 h-full rounded-md bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
              </div>
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">2.0</p>
                <svg
                  class="w-5 fill-blue-600 ml-1.5"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                  <div class="w-1/12 h-full rounded-md bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
              </div>
              <div class="flex items-center">
                <p class="text-sm text-gray-800 font-bold">1.0</p>
                <svg
                  class="w-5 fill-blue-600 ml-1.5"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
                <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                  <div class="w-[6%] h-full rounded-md bg-blue-600"></div>
                </div>
                <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
              </div>
            </div>
            <button
              type="button"
              class="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md"
            >
              Read all reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
