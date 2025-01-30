<template>
  <div class="grid w-full h-auto gap-6 px-5 pt-20 pb-5 mb-20 xl:pt-0 lg:pt-10 md:pt-32 lg:mb-24 lg:grid-cols-2 lg:px-14">
    <div class="grid w-full gap-y-10 lg:pt-14">
      <div class="grid content-center text-center lg:text-left gap-y-6">
        <p class="tracking-[0.2rem] uppercase xl:text-lg lg:text-xs text-base lg:px-0 px-10 dark:text-white">Welcome to my website Portfolio</p>
        <p class="text-4xl font-bold xl:text-6xl lg:text-4xl md:text-6xl dark:text-white">Hi, I'm <span class="text-primary dark:text-secondary">John Russel</span></p>
        <p class="text-4xl font-bold xl:text-6xl lg:text-4xl md:text-6xl">
          <span class="text-primary dark:text-secondary">a </span>
          <vue-typewriter-effect class="capitalize dark:text-white" :strings="titles" :pause-for="3500"> </vue-typewriter-effect>
        </p>
        <div class="grid px-4 sm:px-10 lg:px-0 xl:text-lg lg:pr-14 lg:text-base text-slate-600 dark:text-zinc-400">
          <p class="text-pretty">
            I’m a Front End Developer, UI/UX Designer, Video Editor, and Vector Artist living in the Philippines.
            <br class="hidden lg:block"> <br class="hidden lg:block"> Started with creating basic websites when I was in college, learning UI/UX, taking video editing and videography as a hobby, and making different vector art really helped me boost my
            creative side.
          </p>
          <p></p>
        </div>
      </div>

      <div class="grid py-8 lg:hidden place-content-center">
        <div class="max-w-[20rem] min-w-0 p-5 rounded-3xl card">
          <swiper class="pointer-events-none rounded-xl" :modules="modules" :autoplay="{ delay: 3500 }" :space-between="20" :loop="true">
            <swiper-slide><img class="rounded-xl" src="@/assets/img/picture.webp" alt="" /></swiper-slide>
            <swiper-slide><img class="rounded-xl" src="@/assets/img/picture2.webp" alt="" /></swiper-slide>
            <swiper-slide><img class="rounded-xl" src="@/assets/img/picture3.webp" alt="" /></swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="flex flex-col self-end w-full text-center lg:text-left gap-y-8">
        <p class="uppercase font-Gilroy dark:text-white">here are my social links</p>
        <div class="flex justify-center lg:justify-start gap-x-10">
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
    <div class="hidden lg:grid place-content-center pt-14">
      <div class="hover:scale-[1.02] duration-150 ease-out transition-transform max-w-[39rem] min-w-0 p-5 rounded-3xl card">
        <swiper class="pointer-events-none rounded-xl" :modules="modules" :autoplay="{ delay: 3500 }" :space-between="20" :loop="true">
          <swiper-slide><img class="rounded-xl" src="@/assets/img/picture.webp" alt="" /></swiper-slide>
          <swiper-slide><img class="rounded-xl" src="@/assets/img/picture2.webp" alt="" /></swiper-slide>
          <swiper-slide><img class="rounded-xl" src="@/assets/img/picture3.webp" alt="" /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VueTypewriterEffect from 'vue-typewriter-effect'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import { ref } from 'vue'

  const titles = ref(['front-end developer.', 'UI/UX Designer.', 'video editor.', 'vector artist.'])
  const modules = [Autoplay]
</script>
