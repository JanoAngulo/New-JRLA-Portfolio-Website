<template>
  <div class="sticky top-0 w-full">
    <div class="py-5 lg:px-14 px-5 dark:bg-zinc-900 dark:text-white bg-[#f5f8ff] shadow-md relative z-[999]">
      <div class="flex items-center justify-between">
        <button @click="scrollTop" class="flex items-center gap-2 group">
          <svg class="h-12 dark:group-hover:fill-secondary group-hover:fill-primary dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745.03 831.62">
            <g>
              <polygon points="347.69 0 347.69 831.62 322.85 817.28 298.02 802.93 273.18 788.6 248.35 774.25 223.52 759.91 198.68 745.57 173.84 731.25 149.02 716.9 124.17 702.59 99.34 688.23 74.5 673.89 49.67 659.55 24.86 645.23 0 630.88 0 401.47 24.84 415.81 49.67 430.15 49.67 602.2 74.53 616.55 99.34 630.88 124.17 645.23 149.02 659.55 173.84 673.91 223.52 702.59 248.35 716.92 273.18 731.25 298.02 745.59 298.02 28.68 322.85 14.34 347.69 0"></polygon>
              <polygon points="745.03 401.47 745.03 630.88 720.2 645.23 695.37 659.55 670.53 673.9 620.86 702.58 596.03 716.92 571.19 731.26 546.36 745.59 521.53 759.93 496.69 774.27 447.02 802.94 422.19 817.28 397.35 831.62 397.35 0 422.19 14.34 447.02 28.69 447.02 745.59 471.86 731.26 496.69 716.92 521.53 702.58 546.36 688.23 571.19 673.9 596.03 659.55 620.86 645.23 645.7 630.88 670.53 616.55 695.37 602.2 695.37 430.15 720.2 415.81 745.03 401.47"></polygon>
              <path d="M391,195.88l-24.84,14.34-24.83,14.33-24.84,14.34-24.83,14.34-24.84,14.34V697.73l24.84,14.34,24.83,14.34V525.66l24.82-14.34L366.16,497V755.08L391,769.42l24.83,14.34V497L391,482.65l24.83-14.34V181.54ZM366.16,439.64,341.31,454l-24.82,14.34v-172l24.84-14.35,24.83-14.33Z" transform="translate(-167.48 -124.19)"></path>
              <path d="M788.35,253.23l-24.84-14.32-24.83-14.36-24.84-14.32L689,195.9l-24.84-14.34V783.74L689,769.42l24.85-14.35V497l24.85,14.35,24.82,14.34V726.39l49.67-28.68V267.58ZM763.51,468.31,738.69,454l-24.85-14.33V267.57l24.84,14.34,24.83,14.35Z" transform="translate(-167.48 -124.19)"></path>
            </g>
          </svg>
          <p class="text-2xl font-Gilroy dark:group-hover:text-secondary group-hover:text-primary">JRLA</p>
        </button>
        <div>
          <div class="hidden text-base font-semibold uppercase gap-x-10 lg:flex">
            <a @click="scrollTop" class="cursor-pointer hover:text-primary dark:hover:text-secondary" href="#Home">Home</a>
            <a class="hover:text-primary dark:hover:text-secondary" href="#Features">Features</a>
            <a class="hover:text-primary dark:hover:text-secondary" href="#Portfolio">Portfolio</a>
            <a class="hover:text-primary dark:hover:text-secondary" href="#Resume">Resume</a>
            <a class="hover:text-primary dark:hover:text-secondary" href="#Contact">Contact</a>
            <button class="grid w-4 place-content-center" @click="toggleDarkMode">
              <i :class="darkMode ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon dark:text-yellow-300'"></i>
            </button>
          </div>
          <div class="grid w-8 dark:text-white place-content-center hover:text-primary dark:hover:text-secondary">
            <i @click="navbarToggle = !navbarToggle" :class="navbarToggle ? 'fa-bars' : 'fa-xmark'" class="block text-3xl cursor-pointer fa-solid lg:hidden"></i>
          </div>
        </div>
      </div>
    </div>

    <div :class="navbarToggle ? '-translate-y-96' : '-translate-y-0'" class="absolute left-0 grid justify-end w-full px-5 py-5 text-base font-semibold text-right uppercase transition-transform duration-700 shadow-md dark:shadow-2xl dark:shadow-zinc-900 gap-y-5 dark:text-white dark:bg-zinc-800 bg-slate-100 lg:px-14">
      <a @click="scrollTop(), (navbarToggle = true)" class="cursor-pointer hover:text-primary dark:hover:text-secondary" href="#Home">Home</a>
      <a @click="navbarToggle = true" class="hover:text-primary dark:hover:text-secondary" href="#Features">Features</a>
      <a @click="navbarToggle = true" class="hover:text-primary dark:hover:text-secondary" href="#Portfolio">Portfolio</a>
      <a @click="navbarToggle = true" class="hover:text-primary dark:hover:text-secondary" href="#Resume">Resume</a>
      <a @click="navbarToggle = true" class="hover:text-primary dark:hover:text-secondary" href="#Contact">Contact</a>
      <button class="grid w-4 place-content-center place-self-end" @click="toggleDarkMode">
        <i :class="darkMode ? 'fa-solid fa-sun text-yellow-500' : 'fa-solid fa-moon dark:text-yellow-300'" class=""></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const darkMode = ref(false)
const navbarToggle = ref(true)
const windowWidth = ref(window.innerWidth)
const systemTheme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

onMounted(() => {
  const resizeHandler = () => {
    windowWidth.value = window.innerWidth
    if (navbarToggle.value === false) {
      navbarToggle.value = isMobile.value
    }
  }

  window.addEventListener('resize', resizeHandler)

  if (systemTheme.value) {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    darkMode.value = true
  } else {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    darkMode.value = false
  }

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })
})

const scrollTop = () => {
  window.scrollTo(0, 0)
}

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    darkMode.value = false
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    darkMode.value = true
  }
}

const isMobile = computed(() => windowWidth.value > 768)
</script>
