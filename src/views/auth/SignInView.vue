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
                    <a class="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                      <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                        <img src="@/assets/img/icons/bplan-logo.png" alt="phoenix" width="80"></div>
                    </a>
                    <h3 class="text-1000">С возвращением!</h3>
                    <p class="text-700">Введите данные своего аккаунта</p>
                  </div>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">Email</label>
                    <div class="form-icon-container">
                      <input v-model="email"
                        class="form-control form-icon-input"
                        :class="{'is-invalid': v$.email.$error}"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        :disabled="loading">
                      <svg class="svg-inline--fa fa-user text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                      </svg><!-- <span class="fas fa-user text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                    </div>
                    <div v-if="v$.email.$error"
                      class="invalid-feedback">
                      Некорректно указан email
                    </div>
                  </div>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="password">Пароль</label>
                    <div class="form-icon-container">
                      <input v-model="password"
                        class="form-control form-icon-input"
                        :class="{'is-invalid': v$.password.$error}"
                        id="password"
                        :type="showPassword ? 'text' : 'password'"
                        placeholder="укажите пароль"
                        :disabled="loading">
                      <svg class="svg-inline--fa fa-key text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z"></path>
                      </svg><!-- <span class="fas fa-key text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                      <span @click="showPaswordToggle"
                        class="p-0">
                        <i class="fa-solid fa-eye-slash cursor-pointer password-toggler"
                          :class="{
                            'fa-eye': showPassword,
                            'is-invalid': v$.password.$error
                          }">
                        </i>
                      </span>
                    </div>
                    <div v-if="v$.password.$error"
                      class="invalid-feedback">
                      Длина пароля должна быть не менее {{ passwordMinLength }} знаков
                    </div>
                  </div>
                  <div class="position-relative">
                    <hr class="bg-200 mt-5 mb-4">
                    <div class="divider-content-center bg-white">или войдите при помощи</div>
                  </div>
                  <button class="btn btn-phoenix-secondary w-100 mb-3">
                    <svg class="svg-inline--fa fa-google text-danger me-2 fs--1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg><!-- <span class="fab fa-google text-danger me-2 fs--1"></span> Font Awesome fontawesome.com -->
                    Google
                  </button>
                  <div class="row flex-between-center mt-5 mb-7">
                    <div class="col-auto">
                      <div class="form-check mb-0">
                        <input class="form-check-input" id="basic-checkbox" type="checkbox" checked="checked">
                        <label class="form-check-label mb-0" for="basic-checkbox">Запомнить меня</label>
                      </div>
                    </div>
                    <div class="col-auto">
                      <a class="fs--1 fw-semi-bold" href="#">
                        Забыли пароль?
                      </a>
                    </div>
                  </div>
                  <button v-if="!loading"
                    @click.prevent="signIn"
                    class="btn btn-primary w-100 mb-3">
                    Войти
                  </button>
                  <button v-if="loading"
                    class="btn btn-primary w-100 mb-3 p-1" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status"></span>
                  </button>
                  <div class="text-center">
                    <a class="fs--1 fw-bold" href="#">
                      Зарегистрироваться
                    </a>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default defineComponent({
  name: "SignIn",
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    email: '',
    password: '',
    passwordMinLength: 6,
    showPassword: false,
    loading: false
  }),
  methods: {
    async signIn() {

      this.loading = true;

      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        this.loading = false;
        return
      }

      const signInData = {
        email: this.email,
        password: this.password
      }

      const loginResult = await this.$store.dispatch('login', signInData);

      if (loginResult) {
        console.log("Login granted!");
        // this.$router.push('/');
      }

      this.loading = false;
    },

    showPaswordToggle() {
      this.showPassword = !this.showPassword
    }
  },
  validations () {
    return {
      email: {
        required,
        email,
        $lazy: true
      },
      password: {
        required,
        minLength: minLength(this.passwordMinLength),
        $lazy: true
      }
    }
  }
})
</script>

<style scoped>
.password-toggler {
  position: absolute;
  top: 11px;
  right: 10px;
  background: initial;
  border: none !important;
  color: gray;
}

.is-invalid.password-toggler {
  right: 35px;
}

</style>