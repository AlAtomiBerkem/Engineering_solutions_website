<template>
  <div>
    <AppHeader />
    <AppNavbar />
    <main class="maintenance-page">
      <div class="maintenance-page__content">
        <h1 class="maintenance-page__title">Технические работы</h1>
        <p class="maintenance-page__description">На сайте ведутся технические работы. Приносим извинения за временные неудобства!</p>
        <a href="/" class="maintenance-page__button">Вернуться на главную</a>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped>
.maintenance-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f4f8;
  padding: 20px;
}

.maintenance-page__content {
  text-align: center;
  max-width: 600px;
}

.maintenance-page__title {
  font-size: 72px;
  font-weight: 700;
  color: #035F8F;
  margin: 0;
  line-height: 1;
}

.maintenance-page__description {
  font-size: 24px;
  color: #025178;
  margin: 20px 0 40px;
}

.maintenance-page__button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #0393A8;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.maintenance-page__button:hover {
  background-color: #035F8F;
  transform: translateY(-2px);
}

.maintenance-page__button:active {
  background-color: #025178;
  transform: translateY(0);
}
</style>