<template>
  <nav class="navbar navbar-top navbar-slim fixed-top navbar-expand navbar-darker" id="topNavSlim" style="display: block;">
    <div class="collapse navbar-collapse justify-content-between">
      <div class="navbar-logo">
        <button class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
        <router-link to="/" class="navbar-brand navbar-brand">
          BPlan COMPOSER
        </router-link>
      </div>
      <div class="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-start" id="navbarTopCollapse">
          <ul class="navbar-nav navbar-nav-top" >
            <li class="nav-item mt-0">
              <router-link to="/pitch" class="nav-link ps-5" :exact-active-class="'nav-link active'" role="button">
                <i class="fa-solid fa-person-chalkboard me-2"></i>
                Презентация
              </router-link>
            </li>
            <li class="nav-item mt-0">
              <router-link class="nav-link" to="/plan" :class="{'active': isActiveLink == 'plan'}">
              <svg xmlns="http://www.w3.org/2000/svg"
                  width="16px" height="16px"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-layers me-2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Бизнес-план
              </router-link>
            </li>
            <li class="nav-item mt-0">
              <router-link class="nav-link" to="/finance" :class="{'active': isActiveLink == 'finance'}" role="button">
                <i class="fa-solid fa-chart-column me-2"></i>
                Финансы
              </router-link>
            </li>
            <li class="nav-item mt-0">
              <router-link to="/milestones" class="nav-link" :class="{'active': isActiveLink == 'milestones'}" role="button">
                <i class="fa-solid fa-check-double me-2"></i>
                Ключевые этапы
              </router-link>
            </li>
            <li class="nav-item mt-0">
              <router-link to="/dashboard" class="nav-link" :class="{'active': isActiveLink == 'dashboard'}" role="button">
                <i class="fa-solid fa-bars-progress me-2"></i>
                Мониторинг показателей
              </router-link>
            </li>
          </ul>
        </div>
      <ul class="navbar-nav navbar-nav-icons flex-row">
        <li class="nav-item">
          <div class="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
            <input class="form-check-input ms-0 theme-control-toggle-input"
              id="themeControlToggle"
              type="checkbox"
              data-theme-control="phoenixTheme"
              value="dark">
            <label class="mb-0 theme-control-toggle-label theme-control-toggle-light"
              for="themeControlToggle"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-original-title="Переключить тему">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-moon icon d-none d-sm-block">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
              for="themeControlToggle"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-original-title="Switch theme">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="16px" height="16px"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-sun icon d-none d-sm-block">
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
        </li>
        <the-app-top-navbar-user-info-menu />
      </ul>
    </div>
    <nav class="ecommerce-navbar fixed-top navbar-expand navbar-light bg-white justify-content-between"
      style="margin-top: 2.48rem; margin-left: 15.9rem;">
      <component :is="showAdditionalMenu" />
    </nav>
  </nav>
</template>

<script>
import TheAppTopNavbarPlanMenu from './TheAppTopNavbarPlanMenu.vue';
import TheAppTopNavbarFinanceMenu from './TheAppTopNavbarFinanceMenu.vue';
import TheAppTopNavbarUserInfoMenu from './TheAppTopNavbarUserInfoMenu.vue';


export default {
  components: {
    TheAppTopNavbarPlanMenu,
    TheAppTopNavbarFinanceMenu,
    TheAppTopNavbarUserInfoMenu,
  },

  computed: {
    isActiveLink() {
      if (this.$route.fullPath.includes('pitch')) {
        return 'pitch'
      }
      if (this.$route.fullPath.includes('plan')) {
        return 'plan'
      }
      if (this.$route.fullPath.includes('finance')) {
        return 'finance'
      }
      if (this.$route.fullPath.includes('milestones')) {
        return 'milestones'
      }
      if (this.$route.fullPath.includes('dashboard')) {
        return 'dashboard'
      }
      return ''
    },
    showAdditionalMenu() {
      return 'the-app-top-navbar-' + this.isActiveLink + '-menu';
    }
  }
}
</script>

<style lang="css" scoped>
.active {
    color: #42b983;
}
</style>