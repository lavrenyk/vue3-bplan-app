<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <!-- scrollbar removed-->
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <div v-if="showProjectSelector"
            class="d-grid gap-2">
            <p class="navbar-vertical-label navbar-vertical-label mt-2 mb-0 ps-2">
              Активный проект
            </p>
            <a data-v-7c16fed6="" href="/projects" class="btn btn-outline-secondary btn-sm btn-block m-2 mb-2"> sdfsdf </a>
            <hr class="mt-2">
          </div>

          <projects-menu />
          <b-plan-outline-menu v-if="isBPlanOutlineMenu" />
          <!-- <li class="nav-item">
            <p class="navbar-vertical-label">Apps</p>
            <div class="nav-item-wrapper">
              <a class="nav-link dropdown-indicator label-1" href="#section1" role="button"
                data-bs-toggle="collapse" aria-expanded="true" aria-controls="section1">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon">
                    <svg class="svg-inline--fa fa-caret-right" aria-hidden="true" focusable="false"
                      data-prefix="fas" data-icon="caret-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path>
                    </svg>
                  </div>
                  <span class="nav-link-text fs-1">
                    Введение
                  </span>
                </div>
                  </a>
                  <div class="parent-wrapper label-1">
                    <ul class="nav parent collapse show" data-bs-parent="#navbarVerticalCollapse" id="section1" style="">
                      <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="" aria-expanded="false">
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">
                              Возможности
                            </span>
                          </div>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="" aria-expanded="false">
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">
                              Ожидания
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
            </div>
            <div class="nav-item-wrapper">
              <a class="nav-link dropdown-indicator label-1" href="#email2" role="button"
                data-bs-toggle="collapse" aria-expanded="false" aria-controls="email2">
                <div class="d-flex align-items-center">
                  <div class="dropdown-indicator-icon">
                    <svg class="svg-inline--fa fa-caret-right" aria-hidden="true" focusable="false"
                      data-prefix="fas" data-icon="caret-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path>
                    </svg>
                  </div>
                  <span class="nav-link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <span class="nav-link-text">
                    Email
                  </span>
                </div>
                  </a>
                  <div class="parent-wrapper label-1">
                    <ul class="nav parent collapse" data-bs-parent="#navbarVerticalCollapse" id="email2" style="">
                      <li class="collapsed-nav-item-title d-none">
                        Email
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="../apps/email/inbox.html" data-bs-toggle="" aria-expanded="false">
                          <div class="d-flex align-items-center">
                            <span class="nav-link-text">Inbox</span></div>
                        </a>
                      </li>
                      <li class="nav-item"><a class="nav-link" href="../apps/email/email-detail.html" data-bs-toggle="" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text">Email detail</span></div>
                        </a>
                      </li>
                    </ul>
                  </div>
            </div>
            <hr class="navbar-vertical-line">

          </li> -->
        </ul>
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