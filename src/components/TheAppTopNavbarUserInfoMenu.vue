<template>
  <li v-if="userInfo"
    class="nav-item dropdown">
    <a class="nav-link lh-1 pe-0 white-space-nowrap"
      :class="{ 'show': showUserMenu }"
      id="navbarDropdownUser" href="#!"
      role="button" data-bs-toggle="dropdown" aria-haspopup="true"
      data-bs-auto-close="outside" aria-expanded="false">
      {{ userInfo.firstName }}
      <svg class="svg-inline--fa fa-chevron-down fs--2"
        aria-hidden="true" focusable="false"
        data-prefix="fas" data-icon="chevron-down"
        role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512" data-fa-i2svg="">
        <path fill="currentColor" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path>
      </svg><!-- <span class="fa-solid fa-chevron-down fs--2"></span> Font Awesome fontawesome.com -->
    </a>
    <div class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
      :class="{ 'show': showUserMenu }"
      style="z-index: 10000"
      aria-labelledby="navbarDropdownUser">
      <div class="card position-relative border-0">
        <div class="card-body p-0">
          <div class="text-center pt-4 pb-3">
            <div class="avatar avatar-xl ">
              <img v-if="!userInfo.profileAvatar"
                class="rounded-circle"
                src="@/assets/img/icons/avatar_placeholder.jpg"
                alt="Аватар">
              <img v-if="userInfo.profileAvatar"
                class="rounded-circle"
                :src="userInfo.profileAvatar"
                alt="Аватар">
            </div>
            <h6 class="mt-2 text-black">
              {{ userInfo.firstName }} {{ userInfo.lastName || '' }}
            </h6>
          </div>
          <hr class="mt-0">
        </div>
        <div class="overflow-auto scrollbar" style="height: 5rem;">
          <ul class="nav d-flex flex-column mb-2 pb-1">
            <li @click="showUserMenuToggle" class="nav-item">
              <router-link @click="showUserMenuToggle"
                to="/profile" class="nav-link px-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="16px" height="16px"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-user me-2 text-900">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Мой профиль</span>
              </router-link>
            </li>
            <li @click="showUserMenuToggle" class="nav-item">
              <a @click="showUserMenuToggle"
                class="nav-link px-3" href="#!">
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="16px" height="16px"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-help-circle me-2 text-900">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Центр поддержки
              </a>
            </li>
          </ul>
        </div>
        <div class="card-footer p-0">
          <div @click="signOut"
            class="px-3 pt-3 pb-1">
            <a @click="signOut"
              class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="16px" height="16px"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-log-out me-2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Выйти из аккаунта
            </a>
          </div>
          <div class="my-2 text-center fw-bold fs--2 text-600">
            <a @click="showUserMenuToggle"
              class="text-600 me-1" href="#!">
              Политика
            </a>
            •
            <a @click="showUserMenuToggle"
              class="text-600 mx-1" href="#!">
              Условия
            </a>
            •
            <a @click="showUserMenuToggle"
              class="text-600 ms-1" href="#!">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data: () => ({
    showUserMenu: false
  }),
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    }
  },
  methods: {
    showUserMenuToggle() {
      this.showUserMenu = !this.showUserMenu;
    },
    async signOut() {
      await this.$store.dispatch('signOut');
      this.showUserMenuToggle;
      this.$router.push('/login');

    }
  }
}
</script>

<style>

</style>