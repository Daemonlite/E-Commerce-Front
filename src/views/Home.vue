<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <body class="max-w-[1920px] mx-auto text-black text-sm">
    <div class="bg-white">
      <div class="lg:min-h-[560px] bg-blue-100 px-4 sm:px-10">
        <div class="max-w-7xl w-full mx-auto py-16">
          <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
            <div>
              <h1
                class="md:text-5xl text-4xl font-bold mb-6 md:!leading-[55px]"
              >
                Shop from a wide range of products at Affordabe Prices
              </h1>
              <p class="text-base leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                doloremque, odit ut impedit in sit inventore maiores et
                consectetur ratione vel libero temporibus ipsam excepturi nam
                fuga, rem, modi autem.
              </p>
              <div class="flex flex-wrap gap-y-4 gap-x-8 mt-8">
                <button
                  @click="router.push({ name: 'login' })"
                  class="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[14px] fill-current ml-2"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path
                      d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  class="bg-transparent border-2 border-[#333] flex items-center transition-all font-semibold rounded-md px-5 py-2"
                >
                  Customer Support
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[14px] fill-current ml-2"
                    viewBox="0 0 492.004 492.004"
                  >
                    <path
                      d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="max-lg:mt-12 h-full">
              <img
                src="https://readymadeui.com/analtsis.webp"
                alt="banner img"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-28 px-4 sm:px-10">
        <div class="max-w-7xl w-full mx-auto">
          <div class="grid lg:grid-cols-2 items-center gap-10">
            <div class="">
              <h2 class="md:text-4xl text-3xl font-semibold mb-6">
                We offer varietties of High Quality Products
              </h2>
              <p>
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
                officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem
                ad tempor ut reprehenderit. Eu eu quis anim aute.
              </p>
              <button
                class="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[14px] fill-current ml-2"
                  viewBox="0 0 492.004 492.004"
                >
                  <path
                    d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
            <div class="grid sm:grid-cols-2 gap-8">
              <div
                class="text-center bg-white shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6"
              >
                <h3 class="text-base font-semibold mt-6 mb-2">
                  Home Appliances
                </h3>
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 font-bold inline-block hover:underline"
                  >Learn more</a
                >
              </div>
              <div
                class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6"
              >
                <h3 class="text-base font-semibold mt-6 mb-2">
                  Casual & Formal Clothing
                </h3>
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 font-bold inline-block hover:underline"
                  >Learn more</a
                >
              </div>
              <div
                class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6"
              >
                <h3 class="text-base font-semibold mt-6 mb-2">
                  Gaming Accessories
                </h3>
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 font-bold inline-block hover:underline"
                  >Learn more</a
                >
              </div>
              <div
                class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6"
              >
                
                <h3 class="text-base font-semibold mt-6 mb-2">
                  Home and Office Furniture
                </h3>
                <a
                  href="javascript:void(0);"
                  class="text-blue-600 font-bold inline-block hover:underline"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-10 mt-28">
        <div class="max-w-7xl w-full mx-auto">
          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="w-full h-full">
              <img
                src="https://readymadeui.com/team-image.webp"
                alt="Premium Benefits"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 class="md:text-4xl text-3xl font-semibold mb-6">
                Fresh Ideas for your business design
              </h2>
              <p>
                Veniam proident aute magna anim excepteur et ex consectetur
                velit ullamco veniam minim aute sit. Elit occaecat officia et
                laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
                anim excepteur et ex consectetur velit ullamco veniam minim aute
                sit.
              </p>

              <div class="mt-8">
                <div class="flex items-center">
                  <img
                    src="https://readymadeui.com/profile_2.webp"
                    class="w-12 h-12 rounded-full"
                  />
                  <div class="ml-4">
                    <h4 class="font-semibold text-base">John Doe</h4>
                  </div>
                </div>
                <div class="mt-4">
                  <p>
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit. Elit occaecat officia
                    et laboris Lorem minim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-10 mt-28">
        <div
          class="max-w-7xl w-full mx-auto grid md:grid-cols-2 justify-center items-center gap-10"
        >
          <div>
            <h2 class="md:text-4xl text-3xl font-semibold mb-6">
              100% Secure your data
            </h2>
            <p>
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in. consectetur
              velit ullamco veniam minim aute sit.
            </p>
            <button
              class="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[14px] fill-current ml-2"
                viewBox="0 0 492.004 492.004"
              >
                <path
                  d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
          </div>
          <div class="w-full h-full">
            <img
              src="https://readymadeui.com/login-image.webp"
              alt="feature"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="mt-28 px-4 sm:px-10 bg-blue-100">
        <div
          class="min-h-[400px] relative h-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center px-6 py-16"
        >
          <h2 class="md:text-4xl text-3xl font-semibold mb-6">
            We Deliver, wherever you are in Ghana
          </h2>
          <p>
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in. consectetur
            velit ullamco veniam minim aute sit.
          </p>
          <button
            class="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[14px] fill-current ml-2"
              viewBox="0 0 492.004 492.004"
            >
              <path
                d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </body>
</template>
