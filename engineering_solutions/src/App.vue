<template>
  <div>
    <AppHeader />
    <AppNavbar />
    <AppHeroBlock />
    <AppUsersBlock />
    <AppNaturalGasBlock />
    <AppMaintenance />
    <AppContactInfo />
    <AppFooter />
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppNavbar from "@/components/AppNavbar.vue";
import AppHeroBlock from "@/components/AppHeroBlock.vue";
import AppUsersBlock from "@/components/AppUsersBlock.vue";
import AppNaturalGasBlock from "@/components/AppNaturalGasBlock.vue";
import AppContactInfo from "@/components/AppContactInfo.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMaintenance from "@/components/AppMaintenance.vue";
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
