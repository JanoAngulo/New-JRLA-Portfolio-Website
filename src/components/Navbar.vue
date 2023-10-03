<template>
  <div class="sticky top-0 w-full">
    <div class="py-5 lg:px-14 px-5 bg-[#f5f8ff] shadow-md relative z-[999]">
      <div class="flex items-center justify-between">
        <button @click="scrollTop" class="flex items-center gap-2 group">
          <svg class="h-12 group-hover:fill-primary fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745.03 831.62">
            <g>
              <polygon points="347.69 0 347.69 831.62 322.85 817.28 298.02 802.93 273.18 788.6 248.35 774.25 223.52 759.91 198.68 745.57 173.84 731.25 149.02 716.9 124.17 702.59 99.34 688.23 74.5 673.89 49.67 659.55 24.86 645.23 0 630.88 0 401.47 24.84 415.81 49.67 430.15 49.67 602.2 74.53 616.55 99.34 630.88 124.17 645.23 149.02 659.55 173.84 673.91 223.52 702.59 248.35 716.92 273.18 731.25 298.02 745.59 298.02 28.68 322.85 14.34 347.69 0"></polygon>
              <polygon points="745.03 401.47 745.03 630.88 720.2 645.23 695.37 659.55 670.53 673.9 620.86 702.58 596.03 716.92 571.19 731.26 546.36 745.59 521.53 759.93 496.69 774.27 447.02 802.94 422.19 817.28 397.35 831.62 397.35 0 422.19 14.34 447.02 28.69 447.02 745.59 471.86 731.26 496.69 716.92 521.53 702.58 546.36 688.23 571.19 673.9 596.03 659.55 620.86 645.23 645.7 630.88 670.53 616.55 695.37 602.2 695.37 430.15 720.2 415.81 745.03 401.47"></polygon>
              <path d="M391,195.88l-24.84,14.34-24.83,14.33-24.84,14.34-24.83,14.34-24.84,14.34V697.73l24.84,14.34,24.83,14.34V525.66l24.82-14.34L366.16,497V755.08L391,769.42l24.83,14.34V497L391,482.65l24.83-14.34V181.54ZM366.16,439.64,341.31,454l-24.82,14.34v-172l24.84-14.35,24.83-14.33Z" transform="translate(-167.48 -124.19)"></path>
              <path d="M788.35,253.23l-24.84-14.32-24.83-14.36-24.84-14.32L689,195.9l-24.84-14.34V783.74L689,769.42l24.85-14.35V497l24.85,14.35,24.82,14.34V726.39l49.67-28.68V267.58ZM763.51,468.31,738.69,454l-24.85-14.33V267.57l24.84,14.34,24.83,14.35Z" transform="translate(-167.48 -124.19)"></path>
            </g>
          </svg>
          <p class="text-2xl font-Gilroy group-hover:text-primary">JRLA</p>
        </button>
        <div>
          <div class="hidden text-base font-semibold uppercase gap-x-10 lg:flex">
            <a @click="scrollTop" class="cursor-pointer hover:text-primary">Home</a>
            <a class="hover:text-primary" href="#Features">Features</a>
            <a class="hover:text-primary" href="#Portfolio">Portfolio</a>
            <a class="hover:text-primary" href="#Resume">Resume</a>
            <a class="hover:text-primary" href="#">Contact</a>
            <button class="">
              <i class="fa-solid fa-sun"></i>
              <i class="hidden fa-solid fa-moon"></i>
            </button>
          </div>
          <div class="grid w-8 place-content-center">
            <i @click="navbarToggle = !navbarToggle" :class="navbarToggle ? 'fa-bars' : 'fa-xmark'" class="block text-3xl cursor-pointer fa-solid lg:hidden"></i>
          </div>
        </div>
      </div>
    </div>

    <div :class="navbarToggle ? '-translate-y-96' : '-translate-y-0'" class="absolute left-0 grid justify-end w-full px-5 py-5 text-base font-semibold text-right uppercase transition-all duration-700 shadow-md gap-y-5 bg-slate-100 lg:px-14">
      <a @click="scrollTop(), navbarToggle = true" class="cursor-pointer hover:text-primary">Home</a>
      <a @click="navbarToggle = true" class="hover:text-primary" href="#Features">Features</a>
      <a @click="navbarToggle = true" class="hover:text-primary" href="#Portfolio">Portfolio</a>
      <a @click="navbarToggle = true" class="hover:text-primary" href="#Resume">Resume</a>
      <a @click="navbarToggle = true" class="hover:text-primary" href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarToggle: true,
      windowWidth: window.innerWidth
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      if (this.navbarToggle === false) {
        this.navbarToggle = this.isMobile
      }
    })
  },

  computed: {
    isMobile() {
      return this.windowWidth > 768
    }
  },

  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
