<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
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

@media (max-width: 1200px) {
  .container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }

  body {
    font-size: 13px;
  }
}
</style>
