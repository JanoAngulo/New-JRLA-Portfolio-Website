<template>
  <div id="Portfolio" class="scroll-mt-40">
    <div class="grid gap-6 px-5 mb-32 lg:px-14">
      <div class="text-center font-Gilroy">
        <p class="text-lg uppercase text-primary">you can check my works here</p>
        <p class="py-3 text-5xl capitalize xl:text-7xl">my portfolio</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="(item, index) in data.portfolio" :key="index" :id="portfolioId(item.title)" class="grid gap-4 p-5 transition-all duration-200 ease-out card group lg:hover:-translate-y-2">
          <div @click="passModalData(item)" class="cursor-pointer relative grid h-full w-fit ease-out lg:group-hover:scale-[1.02] transition-all duration-300">
            <img class="object-cover rounded-lg aspect-video" :src="item.thumbnail" :alt="item.title + ' Image'" />
            <div class="absolute grid w-full h-full transition-all duration-300 bg-black rounded-lg lg:opacity-0 group-hover:opacity-100 place-self-center place-content-center bg-opacity-30">
              <p class="text-white underline">View Project</p>
            </div>
          </div>

          <div>
            <p class="lg:text-2xl md:text-xl font-Gilroy">{{ item.title }}</p>
            <p class="text-gray-700 md:line-clamp-4 line-clamp-3">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-show="toggleModal" class="fixed z-[999] w-full h-screen top-0 left-0 grid">
      <div class="grid w-full h-full place-content-center">
        <div @click="closeModal" class="absolute w-full h-full bg-black bg-opacity-30"></div>
        <div id="modalContainer" class="p-5 transition-all duration-300 translate-y-3 opacity-0">
          <div class="relative grid self-center max-w-xl gap-6 p-5 card">
            <button @click="closeModal" class="absolute grid w-5 h-5 p-5 text-white rounded-full shadow-xl bg-primary hover:bg-white hover:text-primary top-2 right-2 place-content-center">
              <i class="fa-solid fa-xmark"></i>
            </button>

            <img class="self-center h-auto rounded-lg aspect-video" :src="modalData.thumbnail" alt="" />
            <div class="grid content-center gap-2">
              <p class="text-lg capitalize">featured - {{ modalData.feature }}</p>
              <p class="text-3xl capitalize lg:text-4xl font-Gilroy">{{ modalData.title }}</p>
              <p class="text-gray-700 whitespace-pre-wrap">{{ modalData.description }}</p>
              <a :href="modalData.link" target="_blank" class="w-full py-3 mt-3 text-center text-white capitalize rounded-md shadow-sm hover:text-black hover:bg-secondary h-fit bg-primary">view project</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import data from './PortfolioData.js'
export default {
  name: 'Portfolio',
  data() {
    return {
      data,
      toggleModal: false,
      modalData: []
    }
  },

  methods: {
    passModalData(data) {
      this.modalData = data
      this.openModal()
    },

    openModal() {
      this.toggleModal = true
      document.body.classList.add('overflow-hidden')
      setTimeout(() => {
        document.getElementById('modalContainer').classList.remove('opacity-0')
        document.getElementById('modalContainer').classList.remove('translate-y-3')
      }, 100)
    },

    closeModal() {
      document.body.classList.remove('overflow-hidden')
      document.getElementById('modalContainer').classList.add('opacity-0')
      document.getElementById('modalContainer').classList.add('translate-y-3')
      setTimeout(() => {
        this.toggleModal = false
      }, 300)
    },

    portfolioId(data) {
      return data[0].toLowerCase() + data.replace(/[,.' ]/g, '').slice(1)
    }
  }
}
</script>
