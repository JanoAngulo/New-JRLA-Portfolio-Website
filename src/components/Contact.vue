<template>
  <div id="Contact" class="scroll-mt-32">
    <div class="grid px-5 mb-5 md:mb-20 lg:gap-6 md:gap-10 lg:px-14">
      <div class="pb-6 text-center md:pb-0 font-Gilroy">
        <p class="text-lg uppercase dark:text-secondary text-primary">Contact</p>
        <p class="py-3 text-5xl capitalize dark:text-white xl:text-7xl">contact with me</p>
      </div>

      <div class="grid grid-cols-1 gap-y-6 lg:gap-5 xl:gap-10 md:grid-cols-1 lg:grid-cols-3">
        <div class="grid col-span-1 p-5 gap-y-6 card">
          <img class="object-cover w-full rounded-md lg:aspect-video lg:h-auto h-44" src="@/assets/img/HandShake.webp" alt="HandShake Icon" />
          <p class="text-2xl text-center capitalize dark:text-white 2xl:text-4xl lg:text-2xl md:text-4xl font-Gilroy md:text-left">John Russel Angulo</p>
          <p class="text-center md:text-left dark:text-white">I found myself particulary interested in designing, prototyping, and making mockup designs that helped me pursue and become a good Website Developer.</p>
          <div class="grid gap-3 text-center md:gap-0 md:text-left dark:text-white">
            <p class="grid xl:block lg:grid sm:block"><span class="font-bold">Phone: </span>(+63) 9997675971</p>
            <p class="grid xl:block lg:grid sm:block"><span class="font-bold">Email: </span>Angulo.johnrussel.l.7814@gmail.com</p>
          </div>
          <div class="flex flex-col self-end w-full text-center md:text-left gap-y-3">
            <p class="uppercase font-Gilroy dark:text-white">here are my social links</p>

            <div class="flex justify-center text-xl md:justify-start gap-x-4">
              <a target="_blank" href="https://www.linkedin.com/in/jrla1219/" class="grid w-12 h-12 transition-transform duration-300 ease-out hover:-translate-y-2 dark:bg-secondary dark:hover:bg-primary hover:text-white hover:bg-primary place-content-center card">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a target="_blank" href="https://www.facebook.com/janoangulo1219" class="grid w-12 h-12 transition-transform duration-300 ease-out hover:-translate-y-2 dark:bg-secondary dark:hover:bg-primary hover:text-white hover:bg-primary place-content-center card">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a target="_blank" href="https://www.behance.net/JRLA" class="grid w-12 h-12 transition-transform duration-300 ease-out hover:-translate-y-2 dark:bg-secondary dark:hover:bg-primary hover:text-white hover:bg-primary place-content-center card">
                <i class="fa-brands fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <form action="https://formspree.io/f/meqbvbnr" method="POST" class="grid grid-cols-6 gap-6 p-5 card">
            <div class="grid md:col-span-4 col-span-full">
              <label for="name" class="pb-2 capitalize dark:text-white">your name <span class="text-primary">*</span></label>
              <input class="w-full p-3 border rounded-lg input" placeholder="Input your name here" id="name" name="Full Name" type="text" required />
            </div>
            <div class="grid md:col-span-2 col-span-full">
              <label for="phone" class="pb-2 capitalize dark:text-white">phone number <span class="text-primary">*</span></label>
              <input class="w-full p-3 border rounded-lg input" placeholder="(900) 123-4567" id="phone" name="Mobile Number" maxlength="14" type="tel" v-maska data-maska="(###) ###-####" required />
            </div>
            <div class="grid col-span-full">
              <label for="email" class="pb-2 capitalize dark:text-white">email address <span class="text-primary">*</span></label>
              <input class="w-full p-3 border rounded-lg input" placeholder="juandelacruz@gmail.com" id="email" name="Email Address" type="email" required />
            </div>
            <div class="grid col-span-full">
              <label for="subject" class="pb-2 capitalize dark:text-white">subject <span class="text-primary">*</span></label>
              <input class="w-full p-3 border rounded-lg input" placeholder="Input your subject here" id="subject" name="Subject" type="text" required />
            </div>
            <div class="grid col-span-full">
              <label for="message" class="pb-2 capitalize dark:text-white">your message <span class="text-primary">*</span></label>
              <textarea class="w-full h-full p-3 border rounded-lg resize-none input" placeholder="What do you like to talk about?" id="email" name="Message" type="text" cols="30" :rows="rowCount" required></textarea>
            </div>

            <button type="submit" class="py-3 text-center text-black capitalize rounded-md shadow-sm col-span-full hover:text-white hover:bg-primary bg-secondary font-Gilroy">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vMaska } from 'maska'
import { ref, onMounted, onUnmounted } from 'vue'

const rowCount = ref(8)

const windowSize = () => {
  if (window.innerWidth > 1440) {
    rowCount.value = 8
  } else if (window.innerWidth >= 1024) {
    rowCount.value = 6
  } else if (window.innerWidth <= 768) {
    rowCount.value = 4
  }
}

onMounted(() => {
  windowSize()
  window.addEventListener('resize', windowSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowSize)
})
</script>
