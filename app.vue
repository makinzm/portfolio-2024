<template>
  <NuxtLayout>
    <header class="bg-white dark:bg-gray-800 text-black dark:text-white fix">
      <div class="hidden lg:block">
        <nav class="border-gray-200 px-4 lg:px-6 py-2.5">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img
              src="https://raw.githubusercontent.com/makinzm/portfolio-2024/main/public/img/hope.ico"
              class="mr-3 h-6 sm:h-9"
              alt="Making it hope Logo"
            >
            <span class="self-center text-xl font-semibold whitespace-nowrap">makinzm</span>
            <div
              id="mobile-menu-2"
              class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <nuxt-link 
                    to="/" 
                    class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  >
                    Home
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link 
                    to="/other" 
                    class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  >
                    My past Home Page
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="block lg:hidden">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <nuxt-link 
              to="/" 
              class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/other" 
              class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
            >
              My past Home Page
            </nuxt-link>
          </li>
        </ul>
      </div>
    </header>
    <div class="under-header">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  title: 'makinzm-portfolio',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ 
    { innerHTML: 'console.log(\'Hello Top\')' } 
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "https://raw.githubusercontent.com/makinzm/portfolio-2024/main/public/img/hope.ico" },
  ],
})
</script>
