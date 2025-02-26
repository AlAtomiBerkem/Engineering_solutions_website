<template>
  <div>
    <nav class="navigate">
      <div class="container">
        <ul class="navigate__list">
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
    <router-view></router-view> <!-- Это место для отображения текущего маршрута -->
  </div>
</template>

<script setup >

</script>

<style scoped>
.navigate {
  width: 100%;
  height: 56px;
  background-color: #025178;
  display: flex;
  justify-content: center;
  align-items: center;
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

</style>