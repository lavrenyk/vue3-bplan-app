<template>
  <main class="alternate-landing" style="--phoenix-scroll-margin-top: 1.2rem;">
    <the-vertical-navbar />
    <the-app-top-navbar />
    <div class="content">
      <router-view/>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import TheAppTopNavbar from '@/components/TheAppTopNavbar.vue';
import TheVerticalNavbar from '@/components/TheVerticalNavbar.vue';

export default defineComponent({
  components: {
    TheAppTopNavbar,
    TheVerticalNavbar
  },
  mounted() {
    var body = document.querySelector('body');
    var topNavSlim = document.querySelector('#topNavSlim');
    var navbarVertical = document.querySelector('.navbar-vertical');

    topNavSlim.style.display = 'block';
    navbarVertical.removeAttribute('style');
    body.classList.add('nav-slim');
    topNavSlim.classList.add('navbar-darker');
  }
})
</script>

<style>

</style>