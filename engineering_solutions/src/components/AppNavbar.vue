<template>
  <div>
    <nav class="navigate">
      <div class="container">
        <ul class="navigate__list">
          <li class="navigate__item"><router-view to="/" class="navigate__link">Главная</router-view></li>
          <li class="navigate__item"><router-view to="PageContent" class="navigate__link">Подключение газа</router-view></li>
          <li class="navigate__item"><a href="#" class="navigate__link">Техническое обслуживание</a></li>
          <li class="navigate__item"><a href="PageContent" class="navigate__link">Юридическим лицам</a></li>
          <li class="navigate__item"><a href="PageContent" class="navigate__link">Прилогающеяся документы</a></li>
          <li class="navigate__item"><a href="PageContent" class="navigate__link">Контакты</a></li>
          <router-view></router-view>

        </ul>
      </div>
    </nav>
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