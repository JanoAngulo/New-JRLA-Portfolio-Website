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
</script>
