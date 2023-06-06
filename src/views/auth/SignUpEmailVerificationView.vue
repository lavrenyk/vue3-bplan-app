<template>
  <div class="container-fluid bg-300 dark__bg-1200">
    <div class="bg-holder bg-auth-card-overlay"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/bg/37.png') +')' }">
    </div>
    <!--/.bg-holder-->
    <div class="row flex-center position-relative min-vh-100 g-0 py-5">
      <div class="col-12 col-sm-10 col-xl-4">
        <div class="card border border-200 auth-card">
          <div class="card-body">
              <div class="col mx-auto">
                <div class="auth-form-box">
                  <div class="text-center mb-7">
                    <router-link to="/"
                      class="d-flex flex-center text-decoration-none mb-4 me-4">
                      <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                        <img src="@/assets/img/icons/bplan-logo.png" alt="Bplan" width="80"></div>
                        <p class="logo-text">BPlan.app</p>
                    </router-link>
                    <h3 class="text-1000">Добро пожаловать!</h3>
                    <p class="text-700">
                      Подтвердите свой email. <br>
                      Если письмо не видно в папке "Входящие", проверьте папку "Спам".
                    </p>
                  </div>
                  <div class="mt-5 text-center">
                    <div class="row">
                      <div class="col-6">
                        <div class="row mx-1">
                          <button v-if="!loading" @click="sendEmailVerification"
                            class="btn btn-phoenix-secondary me-2 mt-1">
                            <i class="fa-solid fa-retweet me-2"></i>
                            Повторить
                          </button>
                          <button v-if="loading"
                            class="btn btn-primary w-100 mb-3 p-1" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status"></span>
                          </button>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="row mx-1">
                          <button v-if="!loading" @click="signOut"
                            class="btn btn-phoenix-primary mt-1">
                            <i class="fa-solid fa-arrow-right-from-bracket me-2"></i>
                            Выйти
                          </button>
                          <button v-if="loading"
                            class="btn btn-primary w-100 mb-3 p-1" type="button" disabled>
                            <span class="spinner-grow spinner-grow-sm" role="status"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "SignIn",
  setup () {
  },
  data: () => ({
    loading: false
  }),
  methods: {
    async sendEmailVerification() {
      this.loading = true;
      await this.$store.dispatch('sendEmailVerification');
      this.loading = false;
    },
    async signOut() {
      this.loading = true;
      await this.$store.dispatch('signOut');
      this.loading = false;
      this.$router.go('/login');
    }
  }

})
</script>

<style scoped>
</style>