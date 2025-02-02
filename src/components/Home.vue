<template>
  <div class="w-full h-full">
    <div class="grid w-full h-full">
      <div class="flex flex-col text-center gap-y-3">
        <p class="font-Gilroy tracking-[0.2rem] uppercase xl:text-3xl lg:text-xs text-base lg:px-0 px-10 dark:text-white">Welcome to my website Portfolio</p>
        <div>
          <p class="text-4xl font-bold xl:text-8xl lg:text-4xl md:text-6xl dark:text-white">Hi, I'm <span class="text-primary dark:text-secondary">John Russel</span></p>
          <p class="text-4xl font-bold xl:text-8xl lg:text-4xl md:text-6xl">
            <span class="text-primary dark:text-secondary">a </span>
            <vue-typewriter-effect class="capitalize dark:text-white" :strings="titles" :pause-for="3500"> </vue-typewriter-effect>
          </p>
        </div>

        <div class="grid px-10 text-black xl:px-20 xl:text-2xl lg:text-base dark:text-white">
          <p class="text-balance font-Gilroy">My digital creative journey began in college with basic web design. Exploring UI/UX, videography, video editing, and vector art has since fueled my passion and honed my creative skills.</p>
        </div>
      </div>

      <div class="flex flex-col w-full text-center gap-y-4">
        <p class="text-2xl font-bold uppercase font-ProductSans dark:text-white">here are my social links</p>
        <div class="flex justify-center gap-x-10">
          <a target="_blank" href="https://www.linkedin.com/in/jrla1219/" class="grid w-16 h-16 text-2xl transition-transform duration-300 ease-out hover:-translate-y-2 dark:text-secondary dark:hover:text-white hover:text-white hover:bg-primary place-content-center card">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://www.facebook.com/janoangulo1219" class="grid w-16 h-16 text-2xl transition-transform duration-300 ease-out hover:-translate-y-2 dark:text-secondary dark:hover:text-white hover:text-white hover:bg-primary place-content-center card">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a target="_blank" href="https://www.behance.net/JRLA" class="grid w-16 h-16 text-2xl transition-transform duration-300 ease-out hover:-translate-y-2 dark:text-secondary dark:hover:text-white hover:text-white hover:bg-primary place-content-center card">
            <i class="fa-brands fa-behance"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueTypewriterEffect from 'vue-typewriter-effect'
  import { ref } from 'vue'

  export default {
    components: {
      VueTypewriterEffect
    },
    data() {
      return {
        titles: ['front-end developer.', 'UI/UX Designer.', 'video editor.', 'vector artist.']
      }
    },
  }
</script>
