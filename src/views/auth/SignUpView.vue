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
                      <img src="@/assets/img/icons/bplan-logo.png" alt="BPlan" width="58">
                      <p class="logo-text">BPlan.app</p>
                    </div>
                  </router-link>
                  <h3 class="text-1000">
                    Регистрация
                  </h3>
                  <p class="text-700">Создайте свой эккаунт</p>
                </div>

                <form>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="name">
                      Имя
                    </label>
                    <input v-model="name"
                      class="form-control"
                      :class="{
                        'is-invalid': v$.name.$error,
                        'is-valid': !v$.name.$error && v$.name.$dirty,
                      }"
                      id="name"
                      type="text"
                      placeholder="Имя">
                  </div>
                  <div class="mb-3 text-start">
                    <label class="form-label" for="email">
                      Email
                    </label>
                    <input v-model="email" @change="v$.email.$touch"
                      class="form-control"
                      :class="{
                        'is-invalid': v$.email.$error,
                        'is-valid': !v$.email.$error && v$.password.$dirty,
                      }"
                      id="email"
                      type="email"
                      placeholder="name@example.com">
                  </div>
                  <div class="row g-3 mb-3">
                    <div class="col-xl-6">
                      <label class="form-label" for="password">Пароль</label>
                      <div class="form-icon-container">
                        <input v-model="password" @change="v$.name.$touch"
                          class="form-control form-icon-input pe-5"
                          :class="{
                            'is-invalid': v$.password.$error,
                            'is-valid': !v$.password.$error && v$.password.$dirty,
                          }"
                          id="password"
                          :type="showPassword ? 'text' : 'password'"
                          placeholder="укажите пароль"
                          :disabled="loading">
                        <span @click="showPaswordToggle"
                          :class="{ 'fa-eye': showPassword }"
                          class="fa-solid fa-eye-slash cursor-pointer text-600 fs--1 form-icon"></span>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <label class="form-label" for="confirmPassword">
                        Подвтердить пароль
                      </label>
                      <div class="form-icon-container">
                        <input v-model="passwordProof" @change="v$.name.$touch"
                          class="form-control form-icon-input pe-5"
                          :class="{
                            'is-invalid': v$.passwordProof.$error,
                            'is-valid': !v$.passwordProof.$error && v$.passwordProof.$dirty,
                          }"
                          id="passwordProof"
                          :type="showPasswordProof ? 'text' : 'password'"
                          placeholder="Еще раз"
                          :disabled="loading || v$.password.$error || password == ''">
                        <span @click="showPaswordProofToggle"
                          class="fa-solid fa-eye-slash cursor-pointer text-600 fs--1 form-icon"
                          :class="{ 'fa-eye': showPasswordProof }">
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-check mb-3">
                    <input v-model="termsAgree"
                      class="form-check-input"
                      :class="{ 'is-invalid': termsAgree != true }"
                      id="termsService"
                      type="checkbox">
                    <label class="form-label fs--1 text-none" for="termsService">
                      Я принимаю
                      <a href="#!">условия</a>
                      и
                      <a href="#!">пользовательское соглашение</a>
                    </label>
                  </div>
                  <div class="position-relative mt-4">
                    <hr class="bg-200">
                    <div class="divider-content-center bg-white">или</div>
                  </div>
                  <button class="btn btn-phoenix-secondary w-100 mb-2">
                    <svg class="svg-inline--fa fa-google text-danger me-2 fs--1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg><!-- <span class="fab fa-google text-danger me-2 fs--1"></span> Font Awesome fontawesome.com -->
                    Регистрация при помощи Google
                  </button>
                  <hr>
                  <button v-if="!loading"
                    @click.prevent="signUp"
                    class="btn btn-primary w-100 mb-3 mt-3">
                    Регистрация
                  </button>
                  <button v-if="loading"
                    class="btn btn-primary w-100 mb-3 p-1" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status"></span>
                  </button>
                  <div class="text-center">
                    <router-link to="/login" class="fs--1 fw-bold">
                      У меня уже есть аккаунт
                    </router-link>
                  </div>
                </form>

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
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default defineComponent({
  name: "SignUp",
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    passwordProof: '',
    passwordMinLength: 6,
    showPassword: false,
    showPasswordProof: false,
    termsAgree: false,
    loading: false
  }),

  methods: {
    async signUp() {

      this.loading = true;

      const isFormCorrect = await this.v$.$validate()

      console.log(isFormCorrect, this.termsAgree)

      if ( !isFormCorrect || !this.termsAgree ) {
        this.loading = false;
        return
      }

      const signUpData = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      const registrationResult = await this.$store.dispatch('registration', signUpData);

      if (registrationResult) {
        this.loading = false;
        this.$router.push('/plan');
      }

      this.loading = false;
    },

    showPaswordToggle() {
      this.showPassword = !this.showPassword;
    },

    showPaswordProofToggle() {
      this.showPasswordProof = !this.showPasswordProof;
    }
  },

  validations () {
    return {
      name: {
        required,
        minLength: minLength(3),
        $lazy: true,
      },
      email: {
        required,
        email,
        $lazy: true
      },
      password: {
        required,
        minLength: minLength(this.passwordMinLength),
        $lazy: true
      },
      passwordProof: {
        required,
        $autoDirty: true,
        sameAsPassword: sameAs(this.password),
        $lazy: true
      },
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

.is-valid.password-toggler {
  right: 35px;
}

</style>