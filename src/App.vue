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

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Features from './components/Features.vue'
import Portfolio from './components/Portfolio.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    Features,
    Portfolio,
    Resume,
    Contact
  },

  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = 'dark'

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
  }
}
</script>
