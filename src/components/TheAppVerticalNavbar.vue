<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <!-- scrollbar removed-->
      <div class="navbar-vertical-content">
        <div class="navbar-nav flex-column" id="navbarVerticalNav">
          <div v-if="showProjectSelector"
            class="d-grid gap-2">
            <p class="navbar-vertical-label navbar-vertical-label mt-2 mb-0 ps-2">
              Активный проект
            </p>
            <router-link v-if="activeBPlan"
              to="/projects" class="btn btn-outline-secondary btn-sm btn-block m-2 mb-2">
              {{ activeBPlan }}
            </router-link>
            <div v-if="!activeBPlan"
              class="btn btn-outline-light btn-sm btn-block m-2 mb-2 disabled">
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <hr class="mt-2">
          </div>
          <component :is="verticalMenu"></component>
        </div>
      </div>
    </div>
    <div class="navbar-vertical-footer">
        <p class="navbar-vertical-label mt-1 mb-2 ps-2">
        Нужна <br>
        помощь?
      </p>
      <div class="btn btn-phoenix-primary btn-sm py-1 ps-1 pe-2 d-flex align-items-center ms-3 mb-0">
        <div class="d-flex align-items-center icon-wrapper-sm shadow-primary-100" style="transform: rotate(-7.45deg);">
          <span class="fa-regular fa-message text-primary fs-1 z-index-1 ms-2"></span>
        </div>
        <p class="text-700 fs--1 mb-0 ms-2 mt-0">Чат с поддержкой</p>
      </div>

    </div>
  </nav>
</template>

<script>
import ProjectsMenu from './app/vertical-menus/ProjectsMenu.vue';
import BPlanOutlineMenu from './app/vertical-menus/BPlanOutlineMenu.vue';

export default {
  data: () => ({
    navbarCollapsed: false,
  }),
  components: {
    ProjectsMenu,
    BPlanOutlineMenu
  },
  computed: {
    showProjectSelector() {
      return this.$route.name != 'bplan-projects-page';
    },
    activeBPlan() {
      let activeBPlan = this.$store.getters.getActiveBPlan;
      if (activeBPlan) {
        return activeBPlan.title;
      } else {
        this.fetchCurrentBPlan();
        return null;
      }
    },
    verticalMenu() {
      switch (this.$route.name) {
        case 'bplan-projects-page':
          return ProjectsMenu;
        case 'bplan-page':
          return BPlanOutlineMenu;
        default:
          break;
      }
      return '';
    }
  },
  methods: {
    verticalNavbarCollapsedToggle() {
      if (this.navbarCollapsed) {
        document.body.classList.remove('navbar-vertical-collapsed');
        this.navbarCollapsed = !this.navbarCollapsed;
      } else {
        document.body.classList.add('navbar-vertical-collapsed');
        this.navbarCollapsed = !this.navbarCollapsed;
      }
    },
    fetchCurrentBPlan() {
      this.$store.dispatch('fetchCurrentBPlan');
    }
  }
}
</script>

<style scoped>

.navbar-vertical-label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: .64rem;
  color: var(--phoenix-navbar-vertical-label-color);
}

.icon-wrapper-sm::before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    border-radius: 0.243rem;
    top: 0.5rem;
    left: 0.2rem;
}

</style>