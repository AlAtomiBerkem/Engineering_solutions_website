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
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppNavbar from "@/components/AppNavbar.vue";
import AppHeroBlock from "@/components/AppHeroBlock.vue";
import AppUsersBlock from "@/components/AppUsersBlock.vue";
import AppNaturalGasBlock from "@/components/AppNaturalGasBlock.vue";
import AppContactInfo from "@/components/AppContactInfo.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppMaintenance from "@/components/AppMaintenance.vue";
</script>

<style scoped>

</style>