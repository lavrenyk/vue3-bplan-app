<template>
  <div class="bg-white sticky-top landing-navbar" data-navbar-shadow-on-scroll="data-navbar-shadow-on-scroll">
    <nav class="navbar navbar-expand-lg container-small py-0 px-3 px-lg-7 px-xxl-3">
      <router-link
        class="navbar-brand flex-1 flex-lg-grow-0" to="/">
        <div class="d-flex align-items-center">
          <img src="@/assets/img/icons/bplan-logo.png" alt="Bplan" width="60">
          <p class="logo-text ms-2">bplan.app</p>
        </div>
      </router-link>
      <div class="d-lg-none">
        <div class="theme-control-toggle fa-icon-wait px-2">
          <input class="form-check-input ms-0 theme-control-toggle-input"
            type="checkbox"
            data-theme-control="phoenixTheme"
            value="dark" id="themeControlToggleSm">
            <label class="mb-0 theme-control-toggle-label theme-control-toggle-light"
            for="themeControlToggleSm"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Switch theme"
            data-bs-original-title="Switch theme">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="16px" height="16px"
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-moon icon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
            for="themeControlToggleSm"
            data-bs-toggle="tooltip" data-bs-placement="left"
            aria-label="Switch theme" data-bs-original-title="Switch theme">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="16px" height="16px" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-sun icon">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </label>
        </div>
      </div>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="border-bottom border-bottom-lg-0 mb-2">
          <div class="search-box d-inline d-lg-none">
            <form class="position-relative"
              data-bs-toggle="search" data-bs-display="static">
              <input class="form-control search-input search rounded-pill my-4" type="search" placeholder="Search" aria-label="Search">
              <!-- <svg class="svg-inline--fa fa-magnifying-glass search-box-icon"
                aria-hidden="true" focusable="false"
                data-prefix="fas" data-icon="magnifying-glass"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                <path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
              </svg> -->
              <span class="fas fa-search search-box-icon"></span>
            </form>
          </div>
        </div>
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item border-bottom border-bottom-lg-0">
            <router-link to="#"
              class="nav-link lh-1 py-0 fs--1 fw-bold text-uppercase py-4  active" aria-current="page">
              Планируем
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link lh-1 fs--1 fw-bold text-uppercase py-4" href="#team">
              Финансируем
            </a>
          </li>
          <li class="nav-item border-bottom border-bottom-lg-0">
            <a class="nav-link lh-1 fs--1 fw-bold text-uppercase py-4" href="#blog">
              Запускаем
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link lh-1 fs--1 fw-bold text-uppercase py-4 me-2" href="#team">
              Масштабируем
            </a>
          </li>
          <li class="nav-item border-bottom border-bottom-lg-0">
            <div class="border-start" style="position: absolute; top: 35%; height: 30%;"></div>
            <a class="nav-link lh-1 fs--1 fw-bold text-uppercase py-4 ms-2" href="#feature">
              Примеры
            </a>
          </li>
        </ul>
        <div class="d-grid d-lg-flex align-items-center">
          <div class="nav-item d-flex align-items-center d-none d-lg-block pe-2">
            <div class="theme-control-toggle fa-icon-wait px-2">
              <input class="form-check-input ms-0 theme-control-toggle-input"
                type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle">
              <label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle"
                data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Switch theme" data-bs-original-title="Switch theme">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon icon">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
              <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle"
                data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Switch theme" data-bs-original-title="Switch theme">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun icon">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </label>
            </div>
          </div>
          <router-link to="/registration" v-if="!isLogin"
            class="btn btn-link text-900 order-1 order-lg-0 ps-3 me-2">
            Регистрация
          </router-link>
          <router-link to="/login" v-if="!isLogin"
            class="btn btn-phoenix-primary order-0">
            <span class="fw-bold">Вход</span>
          </router-link>
          <router-link to="/plan" v-if="isLogin"
            class="btn btn-phoenix-success order-0">
            <i class="fas fa-sign-in-alt me-2" aria-hidden="true"></i>
            <span class="fw-bold">Рабочий кабинет</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'
import ShadowOnScroll from '@/assets/js/misc/navbar-shadow-on-scroll'

const store = useStore();

onMounted(() => {
  ShadowOnScroll();
})

const isLogin = computed(() => store.getters.getUserInfo ? true : false);


</script>

<style>

</style>