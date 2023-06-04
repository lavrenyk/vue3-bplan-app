<template>
  <div class="container-small d-flex flex-between-center" data-navbar="data-navbar">
    <ul class="navbar-nav justify-content-end align-items-center ms-3 my-2">
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/plan" class="nav-link ps-0" :exact-active-class="'nav-link active'">
          Обзор
        </router-link>
      </li>
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/plan/outline" class="nav-link" :exact-active-class="'nav-link active'">
          Структура
        </router-link>
      </li>
      <li class="nav-item" data-nav-item="data-nav-item">
        <router-link to="/plan/download" class="nav-link" :exact-active-class="'nav-link active'">
          Загрузить & Распечатать
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