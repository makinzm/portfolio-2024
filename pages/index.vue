<template>
  <div>
    <h1 class="hello-scss">
      About Me
    </h1>
    <MyAlert>
      I am a backend engineer. <br>
      I am interested in machine learning.
    </MyAlert>
    <br>
    <h1 class="hello-scss">
      What I like <img
        src="/img/favicon.ico"
        loading="lazy"
        height="20"
        width="20"
      >
    </h1>
    <MyAlert>
      I like reading books, clibming mountains and running.
    </MyAlert>
    <br>
    <h1 class="hello-scss">
      What I post here
    </h1>
    This year, I am trying to create something per month. I will add some links here. <br>
    (I added schedules but I am not sure if I can follow them.)
    <ul>
      <li>
        <nuxt-link to="/posts/1">
          Go to January article (something about English)
        </nuxt-link>
      </li>
      <li>
        Feb. Something about Rust
      </li>
      <li>
        Mar. Something about Machine Learning
      </li>
      <li>
        Apr. Something about Knowledge Management
      </li>
      <li>
        May. Something about English
      </li>
      <li>
        Jun. Something about Competitive Programming
      </li>
      <li>
        Jul. Something about Machine Learning
      </li>
      <li>
        Aug. Something about Rust
      </li>
      <li>
        Sep. Something about GCP
      </li>
      <li>
        Oct. Something about English
      </li>
      <li>
        Nov. Something about Finance
      </li>
      <li>
        Dec. Something about Music
      </li>
    </ul>
  </div>
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
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ],
  link: [
    { rel: "icon", type: "image/", href: "https://raw.githubusercontent.com/makinzm/portfolio-2024/main/public/img/hope.ico" },
  ],
})
</script>
