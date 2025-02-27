<template>
  <div>
    <nav class="navigate">
      <div class="container">
        <!-- Бургер-меню для мобильных устройств -->
        <div class="burger-menu" @click="toggleMenu">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
        <ul class="navigate__list" :class="{ 'active': isMenuOpen }">
          <li class="navigate__item">
            <router-link to="/" class="navigate__link">Главная</router-link>
          </li>
          <li class="navigate__item">
            <router-link to="/PageContent" class="navigate__link">Подключение газа</router-link>
          </li>
          <li class="navigate__item">
            <router-link to="/#maintenanceAncor" class="navigate__link">Техническое обслуживание</router-link>
          </li>
          <li class="navigate__item">
            <router-link to="/PageContent" class="navigate__link">Юридическим лицам</router-link>
          </li>
          <li class="navigate__item">
            <router-link to="/PageContent" class="navigate__link">Прилагающиеся документы</router-link>
          </li>
          <li class="navigate__item">
            <router-link to="/#contactAncor" class="navigate__link">Контакты</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.navigate {
  width: 100%;
  height: 56px;
  background-color: #025178;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.navigate__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigate__item {
  margin: 0 20px;
}

.navigate__link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.navigate__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: #0393A8;
  transition: width 0.3s ease;
}

.navigate__link:hover {
  color: #0393A8;
}

.navigate__link:hover::after {
  width: 100%;
}

.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.burger-line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}


@media (max-width: 850px) {
  .burger-menu {
    display: flex;
  }

  .navigate__list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    background-color: #025178;
    padding: 10px 0;
  }

  .navigate__list.active {
    display: flex;
  }

  .navigate__item {
    margin: 10px 0;
    text-align: center;
  }

  .navigate__link {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }

  .navigate__item {
    margin: 10px 0;
  }

  .navigate__link {
    font-size: 16px;
  }
}
</style>
