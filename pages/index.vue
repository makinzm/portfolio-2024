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
        <i class="fa-brands fa-x-twitter" />
      </a>
      &nbsp;&nbsp;
      <a
        href="https://github.com/makinzm"
        target="_blank"
      >
        <i class="fa-brands fa-github" />
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
      I like reading books <i class="fa-solid fa-book" />
      , clibming mountains <i class="fa-solid fa-mountain" />
      and running <i class="fa-solid fa-running" />
    </article>
    <br>
    <h1 class="hello-scss text-3xl">
      What I post here
    </h1>
    This year, I am trying to create something per month. I will add some links here. <br>
    (I added schedules but I am not sure if I can follow them.)
    <ul class="list-disc list-inside">
      <li>
        <nuxt-link to="/posts/2024_01_english_learning">
          How to learn English after working <i class="fa-solid fa-earth-americas"></i>
        </nuxt-link>
      </li>
      <li>
        Feb. Something about Rust (I think I write about Rust product because there are many products written in Rust)
        <i class="fa-brands fa-rust"/>
      </li>
      <li>
        Mar. Something about Machine Learning
        <i class="fa-brands fa-python" />
      </li>
      <li>
        Apr. Something about Knowledge Management
        <i class="fa-solid fa-book" />
      </li>
      <li>
        May. Something about English
        <i class="fa-solid fa-language" />
      </li>
      <li>
        Jun. Something about Competitive Programming
        <i class="fa-solid fa-forward" />
      </li>
      <li>
        Jul. Something about Machine Learning
        <i class="fa-solid fa-fire" />
      </li>
      <li>
        Aug. Something about Rust
        <i class="fa-brands fa-rust" />
      </li>
      <li>
        Sep. Something about GCP
        <i class="fa-solid fa-cloud" />
      </li>
      <li>
        Oct. Something about English
        <i class="fa-solid fa-language" />
      </li>
      <li>
        Nov. Something about Finance
        <i class="fa-solid fa-money-bill-trend-up" />
      </li>
      <li>
        Dec. Something about Music
        <i class="fa-solid fa-music" />
      </li>
    </ul>
  </div>
</template>
