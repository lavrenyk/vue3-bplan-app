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
            <a data-v-7c16fed6="" href="/projects" class="btn btn-outline-secondary btn-sm btn-block m-2 mb-2"> sdfsdf </a>
            <hr class="mt-2">
          </div>
          <component :is="verticalMenu"></component>
        </div>
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
      if (!this.$route.fullPath.includes('project')) {
        return 'help'
      }
      return ''
    },
    isBPlanOutlineMenu() {
      return this.$route.fullPath.includes('plan');
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
      console.log(this.$route);
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
    }
  }
}
</script>

<style>

</style>