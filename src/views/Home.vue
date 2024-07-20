<script setup>
import { ref, computed } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const products = ref([
  {
    id: 1,
    name: 'Sole Elegance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 10,
    category: 'Casual',
    gender: 'Men',
    image: 'https://readymadeui.com/images/product9.webp'
  },
  {
    id: 2,
    name: 'Urban Sneakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12,
    category: 'Sport',
    gender: 'Women',
    image: 'https://readymadeui.com/images/product10.webp'
  },
  {
    id: 3,
    name: 'Velvet Boots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 14,
    category: 'Boots',
    gender: 'Men',
    image: 'https://readymadeui.com/images/product11.webp'
  },
  {
    id: 4,
    name: 'Summit Hiking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 12,
    category: 'Sport',
    gender: 'Women',
    image: 'https://readymadeui.com/images/product12.webp'
  },
  {
    id: 5,
    name: 'Zenith Glow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 15,
    category: 'Casual',
    gender: 'Men',
    image: 'https://readymadeui.com/images/product13.webp'
  },
  {
    id: 6,
    name: 'Echo Elegance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 14,
    category: 'Casual',
    gender: 'Women',
    image: 'https://readymadeui.com/images/product14.webp'
  },
  {
    id: 7,
    name: 'Pumps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 14,
    category: 'Casual',
    gender: 'Women',
    image: 'https://readymadeui.com/images/product15.webp'
  },
  {
    id: 8,
    name: 'Blaze Burst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 14,
    category: 'Sport',
    gender: 'Men',
    image: 'https://readymadeui.com/images/product10.webp'
  }
]);

const categories = ref(['All', 'Casual', 'Sport', 'Boots']);
const genders = ref(['All', 'Men', 'Women']);

const selectedCategory = ref('All');
const selectedGender = ref('All');

const addToCart = (product) => {
  console.log(`Added ${product.name} to cart`);
};

const viewProduct = (product) => {
    router.push({ name: 'product-detail', query: { name: product.name } })
}

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return (selectedCategory.value === 'All' || product.category === selectedCategory.value) &&
           (selectedGender.value === 'All' || product.gender === selectedGender.value);
  });
});
</script>

<template>
  <div class="font-[sans-serif] bg-gray-100">
    <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-6">Premium Sneakers</h2>
      <div class="flex justify-center mb-4">
        <div class="mr-4">
          <label class="font-bold text-gray-700">Category: </label>
          <select v-model="selectedCategory" class="border rounded p-2 w-[300px]">
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <div>
          <label class="font-bold text-gray-700">Gender: </label>
          <select v-model="selectedGender" class="border rounded p-2 w-[300px]">
            <option v-for="gender in genders" :key="gender" :value="gender">{{ gender }}</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
          <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
            <img :src="product.image" :alt="product.name" class="h-full w-full object-contain" />
          </div>
          <div>
            <h3 class="text-lg font-extrabold text-gray-800 cursor-pointer" @click="viewProduct(product)">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
            <h4 class="text-lg text-gray-800 font-bold mt-4">${{ product.price }}</h4>
            <div @click="addToCart(product)" class="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute bottom-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-800 w-6 h-6" viewBox="0 0 24 24">
                <path d="M10 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm8 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm1-2H7.42c-.42 0-.79-.25-.93-.63L4.1 6H1c-.55 0-1 .45-1 1s.45 1 1 1h2.52l2.73 8.68c.24.75.93 1.32 1.71 1.32H19c.55 0 1-.45 1-1s-.45-1-1-1zm-.87-9.29L18 4H6.21l-.94-2.35c-.13-.33-.44-.54-.79-.54H2c-.55 0-1 .45-1 1s.45 1 1 1h1.03L5.18 11h11.17l-1.22-3.29z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
