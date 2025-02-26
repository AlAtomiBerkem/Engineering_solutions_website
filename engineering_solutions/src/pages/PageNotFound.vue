<template>
  <div>
    <AppHeader />
    <AppNavbar />
    <main class="error-page">
      <div class="error-page__content">
        <h1 class="error-page__title">404</h1>
        <p class="error-page__description">Упс! Страница, которую вы ищете, не существует.</p>
        <a href="/" class="error-page__button">Вернуться на главную</a>
      </div>
      <AppFooter />
    </main>
  </div>

</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped>

.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f0f4f8;
  padding: 20px;
}

.error-page__content {
  text-align: center;
  max-width: 600px;
}

.error-page__title {
  font-size: 120px;
  font-weight: 700;
  color: #035F8F;
  margin: 0;
  line-height: 1;
}

.error-page__description {
  font-size: 24px;
  color: #025178;
  margin: 20px 0 40px;
}

.error-page__button {
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

.error-page__button:hover {
  background-color: #035F8F;
  transform: translateY(-2px);
}

.error-page__button:active {
  background-color: #025178;
  transform: translateY(0);
}
</style>