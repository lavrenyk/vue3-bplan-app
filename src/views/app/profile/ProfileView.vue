<template>
  <div class="pb-5 mt-3">
    <div class="mb-9">
          <div class="row g-6">
            <div class="col-12 col-xl-4">
              <div class="card cover-image mb-5">
                <div class="card-header hover-actions-trigger position-relative mb-6" style="min-height: 130px; ">
                  <div class="bg-holder"
                    style="background-image: linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(../../assets/img/generic/59.png)">
                    <input class="d-none" id="upload-settings-cover-image" type="file">
                    <label class="cover-image-file-input" for="upload-settings-cover-image"></label>
                    <div class="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
                      <svg class="svg-inline--fa fa-camera me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"></path>
                      </svg><!-- <span class="fa-solid fa-camera me-2"></span> Font Awesome fontawesome.com -->
                    </div>
                  </div>
                  <input class="d-none" id="upload-settings-porfile-picture" type="file">
                  <label class="avatar avatar-4xl status-online feed-avatar-profile cursor-pointer" for="upload-settings-porfile-picture">
                    <img class="rounded-circle img-thumbnail bg-white shadow-sm" src="@/assets/img/team/12.webp" width="200" alt=""></label>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex flex-wrap mb-2 align-items-center">
                        <h3 class="me-2">
                          {{ userInfo.firstName }}
                          {{ userInfo.lastName }}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-bottom border-dashed pb-3 mb-4">
                <div class="row g-6">
                  <div class="col-6">
                    <h5 class="text-900 mb-3">Тип темы</h5>
                  </div>
                  <div class="col-6">
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
                  </div>
                </div>
              </div>
              <div class="pb-3 mb-2">
                <h4 class="text-black">Удалить аккаунт</h4>
                <p class="text-700">Полностью стереть аккаунт</p>
                <button class="btn btn-phoenix-danger">
                  Удалить аккаунт
                </button>
              </div>
            </div>
            <div class="col-12 col-xl-8">
              <div class="mb-4">
                <div class="mb-6">
                  <h4 class="mb-4">Персональная информация</h4>
                  <div class="row g-3">
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating">
                          <input v-model="userInfo.firstName"
                            class="form-control form-icon-input" id="firstName" type="text" placeholder="Имя">
                          <label class="text-700 form-icon-label" for="firstName">
                            ИМЯ
                          </label>
                        </div>
                        <svg class="svg-inline--fa fa-user text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                        </svg><!-- <span class="fa-solid fa-user text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating">
                          <input v-model="userInfo.lastName"
                            class="form-control form-icon-input" id="lastName" type="text" placeholder="Last Name">
                          <label class="text-700 form-icon-label" for="lastName">
                            ФАМИЛИЯ
                          </label>
                        </div>
                        <svg class="svg-inline--fa fa-user text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                        </svg><!-- <span class="fa-solid fa-user text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating">
                          <input class="form-control form-icon-input" id="emailSocial" type="email" placeholder="Email">
                          <label class="text-700 form-icon-label" for="emailSocial">
                            EMAIL
                          </label>
                        </div>
                        <svg class="svg-inline--fa fa-envelope text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path></svg><!-- <span class="fa-solid fa-envelope text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                      </div>
                    </div>
                    <div class="col-12 col-sm-6">
                      <div class="form-icon-container">
                        <div class="form-floating">
                          <input class="form-control form-icon-input" id="phone" type="tel" placeholder="Phone">
                          <label class="text-700 form-icon-label" for="phone">
                            ТЕЛЕФОН
                          </label>
                        </div>
                        <svg class="svg-inline--fa fa-phone text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path>
                        </svg><!-- <span class="fa-solid fa-phone text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row g-3 mb-6">
                  <div class="col-12 col-sm-6">
                    <h4 class="mb-4">Информация о компании</h4>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating">
                        <input class="form-control form-icon-input" id="companyName" type="text" placeholder="Company Name">
                        <label class="text-700 form-icon-label" for="companyName">
                          НАИМЕНОВАНИЕ
                        </label>
                      </div>
                      <svg class="svg-inline--fa fa-building text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z"></path>
                      </svg><!-- <span class="fa-solid fa-building text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                    </div>
                    <div class="form-icon-container">
                      <div class="form-floating">
                        <input class="form-control form-icon-input" id="website" type="text" placeholder="Website">
                        <label class="text-700 form-icon-label" for="website">
                          ВЕБСАЙТ
                        </label>
                      </div>
                      <svg class="svg-inline--fa fa-globe text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"></path>
                      </svg><!-- <span class="fa-solid fa-globe text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                    </div>
                    <div class="text-end mb-2">
                  <div>
                  <div class="mt-5 text-start">
                    <button class="btn btn-phoenix-secondary me-2 mt-1">
                      Отменить
                    </button>
                    <button class="btn btn-phoenix-success mt-1">
                      Сохранить
                    </button>
                  </div>
                </div>
                </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <h4 class="mb-4">Изменение пароля</h4>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating">
                        <input class="form-control form-icon-input" id="oldPassword" type="password" placeholder="Old password">
                        <label class="text-700 form-icon-label" for="oldPassword">
                          Текущий пароль
                        </label>
                      </div>
                      <svg class="svg-inline--fa fa-lock text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                      </svg><!-- <span class="fa-solid fa-lock text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                    </div>
                    <div class="form-icon-container mb-3">
                      <div class="form-floating">
                        <input class="form-control form-icon-input" id="newPassword" type="password" placeholder="New password">
                        <label class="text-700 form-icon-label" for="newPassword">
                          Новый пароль
                        </label>
                      </div>
                      <svg class="svg-inline--fa fa-key text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z"></path>
                      </svg><!-- <span class="fa-solid fa-key text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
                    </div>
                    <div class="form-icon-container">
                      <div class="form-floating">
                        <input class="form-control form-icon-input" id="newPassword2" type="password" placeholder="Confirm New password">
                        <label class="text-700 form-icon-label" for="newPassword2">
                          Подтверждение пароля
                        </label>
                      </div>
                      <svg class="svg-inline--fa fa-key text-900 fs--1 form-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z"></path>
                      </svg><!-- <span class="fa-solid fa-key text-900 fs--1 form-icon"></span> Font Awesome fontawesome.com -->
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
export default {
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo;
    }
  }
}
</script>

<style>

</style>