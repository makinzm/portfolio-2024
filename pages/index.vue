<template>
  <div>
    <h1 class="hello-scss">
      Welcome to the homepage
    </h1>
    <MyAlert>
      This is an auto-imported component
    </MyAlert>
    <br>
    <nuxt-link to="/about">
      Go to About Page
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link to="/posts/1">
          Go to Post 1
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
