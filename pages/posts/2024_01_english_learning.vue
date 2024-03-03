<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
console.log(route.params.id)
const postId = route.params.id

</script>
<template>
  <section>
    <h1 class="hello-scss text-3xl"> 🤧 March 3, 2024</h1>
    <h1 class="hello-scss text-3xl">How to learn English after working</h1>
    <article>I used to study English a lot 
        when I was a university entrance exam student 
            or 
        when I was about to pass the Eiken level pre-1 before I started working company.
    </article>
    <article> However, I cannot continue to study English after I started working because of some reasons:
        <ul class="list-disc list-inside">
            <li>It is difficult to find time to study</li>
            <li>I do not have a clear goal</li>
            <li>I do not have a good way to study</li>
        </ul>
        I want to improve my English skills again. 
        I will write about what I learned and how I learned it. 
        I hope this will help me to continue studying English.
    </article>
    <h1 class="hello-scss text-3xl">What is my aim</h1>
    <article> First thing first, I felt that 
        studying for an exam 
            and 
        actually 
            speaking English 
                or 
            reading a programming document in English smoothly 
        are completely different.
        So I have to change my way of studying English and set a new goal.
    </article>
    <ul class="list-disc list-inside">
      <li>Speak English smoothly</li>
      <li>Read a programming document in English smoothly</li>
      <li>Enjoy Music and sing in English with understanding the lyrics</li>
      <li>IELTS 7.5</li>
    </ul>
    <h1 class="hello-scss text-3xl">How I will study</h1>
    <article>
        In my opinion, the most important thing is to continue studying,
        so I have to make learning English a habit.
        To make it a habit, I should make it comfortable and fun.
    </article>
    <h1 class="hello-scss text-3xl"> What I tried</h1>
    <article>
        I tried to use <a href="https://www.notion.so" target="_blank">Notion</a> to create my original vocabulary list.
        How to create a vocabulary list is like this: <a href="https://www.youtube.com/watch?v=kz9e-ti40oA" target="_blank">【見なきゃ損】効率を極めまくった最強の英単語暗記法 - YouTube</a>.
        In addition, I tried to associate the words with Weblink like this (if you use <a href="https://ejje.weblio.jp/">英和辞典・和英辞典 - Weblio辞書</a>)
        <br>
        <code class="bg-gray-200">
            if(not empty(prop("Word")), "https://ejje.weblio.jp/content/" + replaceAll(replaceAll(prop("Word"), "[,]", ""), " ", "+"), "")
        </code>
        <br>
        It is good to use Notion not only on laptops but also on smartphones.
        However, I felt this method was not so effective for me because of the following reasons:
        <ul class="list-disc list-inside">
            <li>Creating a vocabulary list makes me feel like it is ok even when I cannot remember the words</li>
        </ul>
        To avoid these problems, I will try to make my time schedule by Notion.
    </article>
    <article>
        After I started working company, I realized that time not work is invaluable.
        So I will try to spare time for studying English.
        For instance,
        <ul class="list-disc list-inside">
            <li>AM 6:00 - 6:10: Create a today schedule by Notion or a piece of paper</li>
            <li>AM 6:10 - 6:30: Listen to English podcast</li>
            <li>AM 6:30 - 7:00: Speark English and confirm the pronunciation by <a href="https://github.com/makinzm/improve_english_pronunciation" target="_blank">makinzm/improve_english_pronunciation: Only Available in local(now)</a></li>
            <li>PM 6:00 - 6:30: Listen to English podcast</li>
            <li>PM 9:00 - 9:30: Write a diary in English</li>
            <li>PM 9:30 - 10:30: Remember the words I met today and create a vocabulary list</li>
        </ul>
    </article>
    <h1 class="hello-scss text-3xl">What I will do next</h1>
    <p>
        I think the most important thing is to continue studying, so I have to make day schedule.
        However, this task to make day schedule is not so easy for me.
        So I would like to try to make a day schedule by Notion completely automatically.
    </p>
    <h1 class="hello-scss text-3xl">PS</h1>
    <p>I'm sorry for late update.</p>
  </section>
</template>
