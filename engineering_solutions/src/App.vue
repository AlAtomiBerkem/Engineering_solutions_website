<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
// import MainPage from "@/pages/MainPage.vue";
</script>

<style>
* {
  margin: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

body {
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: 'Varela Round', sans-serif;
}

.wrapper {
  width: 100%;
  margin: 0 auto;
}

.container {
  padding: 0 80px;
}

a {
  text-decoration: none;
  color: inherit;
  outline: none;
}

/* Адаптация для планшетов */
@media (max-width: 1200px) {
  .container {
    padding: 0 40px; /* Уменьшаем отступы */
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .container {
    padding: 0 20px; /* Ещё меньше отступы */
  }

  body {
    font-size: 14px; /* Уменьшаем размер шрифта для мобильных устройств */
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .container {
    padding: 0 10px; /* Минимальные отступы */
  }

  body {
    font-size: 13px; /* Ещё меньше размер шрифта */
  }
}
</style>
