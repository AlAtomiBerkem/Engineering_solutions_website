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
</style>
