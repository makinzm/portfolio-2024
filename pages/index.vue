<template>
  <div>
    <h1 class="hello-scss text-3xl">
      About Me
    </h1>
    <article>
      I am a backend engineer. <br>
      I am interested in machine learning. <br>
      <a
        href="https://twitter.com/buono_na"
        target="_blank"
      >
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      &nbsp;&nbsp;
      <a
        href="https://github.com/makinzm"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </article>
    <br>
    <h1 class="hello-scss text-3xl">
      What I like <img
        src="/img/favicon.ico"
        loading="lazy"
        height="20"
        width="20"
        class="inline"
      >
    </h1>
    <article>
      I like reading books <i class="fa-solid fa-book"></i>
      , clibming mountains <i class="fa-solid fa-mountain"></i>
      and running <i class="fa-solid fa-running"></i>
    </article>
    <br>
    <h1 class="hello-scss text-3xl">
      What I post here
    </h1>
    This year, I am trying to create something per month. I will add some links here. <br>
    (I added schedules but I am not sure if I can follow them.)
    <ul class="list-disc list-inside">
      <li>
        <nuxt-link to="/posts/1">
          Jan. Something about English (Comming soon) <i class="fa-solid fa-earth-americas"></i>
        </nuxt-link>
      </li>
      <li>
        Feb. Something about Rust 
        <i class="fa-brands fa-rust"></i>
      </li>
      <li>
        Mar. Something about Machine Learning
        <i class="fa-brands fa-python"></i>
      </li>
      <li>
        Apr. Something about Knowledge Management
        <i class="fa-solid fa-book"></i>
      </li>
      <li>
        May. Something about English
        <i class="fa-solid fa-language"></i>
      </li>
      <li>
        Jun. Something about Competitive Programming
        <i class="fa-solid fa-forward"></i>
      </li>
      <li>
        Jul. Something about Machine Learning
        <i class="fa-solid fa-fire"></i>
      </li>
      <li>
        Aug. Something about Rust
        <i class="fa-brands fa-rust"></i>
      </li>
      <li>
        Sep. Something about GCP
        <i class="fa-solid fa-cloud"></i>
      </li>
      <li>
        Oct. Something about English
        <i class="fa-solid fa-language"></i>
      </li>
      <li>
        Nov. Something about Finance
        <i class="fa-solid fa-money-bill-trend-up"></i>
      </li>
      <li>
        Dec. Something about Music
        <i class="fa-solid fa-music"></i>
      </li>
    </ul>
  </div>
</template>
