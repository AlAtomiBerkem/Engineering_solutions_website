<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="header-logo"><img src="@/assets/logo10.png" alt="logo"></div>
          <p class="header__company-name">Инженерные решения</p>
          <div class="header__button">
            <router-link to="PageTechnicalWork">
              <button class="header__button-button">
                <strong class="button-text">Личный кабинет</strong>
                <img class="button-svg" src="@/assets/svg/user.svg" alt="user">
              </button>
            </router-link>
            <router-view to="/:pathMatch(.*)*"></router-view>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  padding: 0 80px;
}

.header {
  width: 100%;
  height: 70px;
  background-color: #035F8F;
  align-items: center;
  justify-content: center;
}

.header-content {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__button {
  padding-bottom: 25px;
}

.header__button-button {
  margin-top: 30px;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #E4BD3F;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, color 0.3s ease;
}

.header__button-button:active {
  background-color: #C4981F;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}

.header__button-button .button-svg {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

.header__button-button:hover .button-svg {
  width: 27px;
  height: 27px;
  transform: rotate(360deg);
}

.button-svg {
  width: 25px;
  height: 25px;
  padding-left: 20px;
}

.header-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.header__company-name {
  font-size: 30px;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: 1.5px;
}

/* Адаптация для планшетов */
@media (max-width: 1200px) {
  .header__company-name {
    font-size: 25px;
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .header__company-name {
    font-size: 20px;
  }

  .header__button-button {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
  }

  .header__button-button .button-text {
    display: none; /* Скрываем текст в кнопке */
  }

  .header__button-button .button-svg {
    margin-left: 0;
    padding-left: 0;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .header__company-name {
    font-size: 18px;
  }

  .header__button-button {
    width: 35px;
    height: 35px;
    border-radius: 50%; /* Делаем кнопку круглой */
  }

  .header__button-button .button-svg {
    width: 20px;
    height: 20px;
  }
}
</style>
