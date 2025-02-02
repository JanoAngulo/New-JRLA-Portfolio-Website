<template>
  <div class="flex flex-col justify-between h-screen xl:p-20">
    <swiper-container class="w-full h-full" init="false">
      <swiper-slide class="py-20"><home></home></swiper-slide>
      <swiper-slide class="py-20">
        <div class="grid w-full h-full pb-20 font-bold text-light-primary dark:text-dark-primary font-ProductSans place-content-center text-9xl">What am I?</div>
      </swiper-slide>
      <swiper-slide class="p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis quam architecto nostrum cumque molestiae ex minima provident ullam quod fugiat fuga id expedita ipsa laborum, quia et est ipsum?</swiper-slide>
      <swiper-slide class="p-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis quam architecto nostrum cumque molestiae ex minima provident ullam quod fugiat fuga id expedita ipsa laborum, quia et est ipsum?</swiper-slide>
    </swiper-container>

    <!-- <home></home>
    <features></features>
    <portfolio></portfolio> -->
    <!-- <resume></resume>
    <contact></contact> -->
    <navbar></navbar>
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Navbar from './components/Navbar.vue'
  import Features from './components/Features.vue'
  import Portfolio from './components/Portfolio.vue'
  // import Resume from './components/Resume.vue'
  // import Contact from './components/Contact.vue'

  export default {
    components: {
      Home,
      Navbar,
      Features,
      Portfolio
      // Resume,
      // Contact
    },
    methods: {
      initializeSwiper() {
        const swiperEl = document.querySelector('swiper-container')
        const swiperParams = {
          breakpoints: {
            640: {
              direction: 'horizontal'
            },
            0: {
              direction: 'vertical'
            }
          },
          slidesPerView: 1,
          mousewheel: true,
          speed: 1000,
          allowTouchMove: false,
          keyboard: {
            enabled: true,
            onlyInViewport: true
          }
        }
        Object.assign(swiperEl, swiperParams)
        swiperEl.initialize()
      },
      logMessage() {
        console.log(`
     ##   #####    #          #
     ##   #    #   #         # #
     ##   #####    #        #####
     ##   #  ##    #       #     #
  ###    #    ##   #####  #       #

  Hello there! 👋
  It seems like you are a curious one! 🧐
  But it's ok, curiosity is the first step towards knowledge. 🧠
  Feel free to explore my portfolio and learn more about me. 🚀

  If you have any questions or just want to say hi, don't hesitate to reach out to using my portfolio contact form or directly at my email: Angulo.johnrussel.l.7814@gmail.com 📧

  Have a great day! 🌞`)
      }
    },
    mounted() {
      this.initializeSwiper()
      this.logMessage()
    }
  }
</script>
