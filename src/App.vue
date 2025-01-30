<template>
  <div class="w-full">
    <div class="sticky top-0 z-50">
      <navbar></navbar>
    </div>
    <home></home>
    <features></features>
    <portfolio></portfolio>
    <resume></resume>
    <contact></contact>
  </div>
</template>

<script setup>
  import Home from './components/Home.vue'
  import Navbar from './components/Navbar.vue'
  import Features from './components/Features.vue'
  import Portfolio from './components/Portfolio.vue'
  import Resume from './components/Resume.vue'
  import Contact from './components/Contact.vue'

  import { onMounted } from 'vue'

  onMounted(() => {
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
  })
</script>
