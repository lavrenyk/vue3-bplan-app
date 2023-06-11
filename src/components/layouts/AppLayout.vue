<template>
  <main class="alternate-landing" style="--phoenix-scroll-margin-top: 1.2rem;">
    <the-app-vertical-navbar />
    <the-app-top-navbar />
    <div class="content">
      <router-view/>
      <the-app-footer />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import TheAppTopNavbar from '@/components/TheAppTopNavbar.vue';
import TheAppVerticalNavbar from '@/components/TheAppVerticalNavbar.vue';
import TheAppFooter from '@/components/TheAppFooter.vue';

export default defineComponent({
  components: {
    TheAppTopNavbar,
    TheAppVerticalNavbar,
    TheAppFooter,
  },
  async mounted() {
    var body = document.querySelector('body');
    var topNavSlim = document.querySelector('#topNavSlim');
    var navbarVertical = document.querySelector('.navbar-vertical');

    topNavSlim.style.display = 'block';
    navbarVertical.removeAttribute('style');
    body.classList.add('nav-slim');
    topNavSlim.classList.add('navbar-darker');

    await this.$store.dispatch('fetchUserInfo');
    await this.$store.dispatch('fetchCurrentOutline');
  }
})
</script>

<style>

</style>