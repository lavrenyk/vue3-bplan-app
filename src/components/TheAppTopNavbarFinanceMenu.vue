<template>
  <div class="container-small d-flex flex-between-center" data-navbar="data-navbar">
    <ul class="navbar-nav justify-content-end align-items-center ms-3 my-2">
      <li class="nav-item border-right" data-nav-item="data-nav-item">
        <router-link to="/finance" class="nav-link ps-0" :exact-active-class="'nav-link active'">
          Финансовые данные
        </router-link>
      </li>
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/finance/profit-and-loss" class="nav-link" :exact-active-class="'nav-link active'">
          Доходы и Расходы
        </router-link>
      </li>
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/finance/cash-flow" class="nav-link" :exact-active-class="'nav-link active'">
          Движение денег
        </router-link>
      </li>
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/finance/balance" class="nav-link" :exact-active-class="'nav-link active'">
          Баланс
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>