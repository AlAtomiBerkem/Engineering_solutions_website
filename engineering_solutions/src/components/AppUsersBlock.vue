<template>
  <div>
    <div class="users">
      <div class="container">
        <div class="users__block">
          <div class="users__items">
            <div class="users__items-text"><strong>Физические лица</strong></div>
            <div class="users__items-icon">
              <img src="@/assets/svg/fizick.svg" alt="fizick">
            </div>
            <div class="users__items-button">
              <button><strong>Подробнее</strong></button>
            </div>
          </div>
          <div class="users__items">
            <div class="users__items-text"><strong>Юридические лица</strong></div>
            <div class="users__items-icon">
              <img src="@/assets/svg/ooo.svg" alt="ooo">
            </div>
            <div class="users__items-button">
              <button><strong>Подробнее</strong></button>
            </div>
          </div>
          <div class="users__items">
            <div class="users__items-text"><strong>Индивидуальные предприниматели</strong></div>
            <div class="users__items-icon">
              <img src="@/assets/svg/ip.svg" alt="ip">
            </div>
            <div class="users__items-button">
              <button><strong>Подробнее</strong></button>
            </div>
          </div>
          <div class="users__items">
            <div class="users__items-text"><strong>Садоводческие или огороднические некоммерческие товарищества</strong></div>
            <div class="users__items-icon">
              <img src="@/assets/svg/snt.svg" alt="snt">
            </div>
            <div class="users__items-button">
              <button><strong>Подробнее</strong></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.users {
  width: 100%;
  background-color: #035F8F;
  padding: 20px 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.users__block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.users__items {
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 250px;
  height: 200px;
  background-color: rgb(240, 244, 245);
  border-radius: 10px;
  padding: 15px;
  transition: all 0.3s ease;
}

.users__items:hover {
  background-color: #dae1e1;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.users__items-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40px;
}

.users__items-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
}

.users__items:hover .users__items-icon img {
  transform: scale(1.1);
}

.users__items-text {
  font-size: 16px;
  transition: all 0.3s ease;
}

.users__items:hover .users__items-text {
  transform: translateY(-5px);
}

.users__items-button {
  display: flex;
  align-items: end;
  margin-bottom: 15px;
}

.users__items-button button {
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ebebed;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.users__items:hover .users__items-button button {
  background-color: #6195FF;
  color: white;
  box-shadow: 0 4px 10px rgba(97, 149, 255, 0.3);
}

/* Адаптация для планшетов */
@media (max-width: 1024px) {
  .users__items {
    width: 220px;
    height: 180px;
  }

  .users__items-text {
    font-size: 14px;
  }

  .users__items-button button {
    width: 130px;
    height: 30px;
    font-size: 14px;
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .users__block {
    flex-direction: column;
    align-items: center;
  }

  .users__items {
    width: 100%;
    max-width: 300px;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 20px;
  }

  .users__items-icon {
    padding-left: 0;
    justify-content: flex-start;
  }

  .users__items-text {
    font-size: 16px;
    text-align: center;
  }

  .users__items-button {
    justify-content: center;
    margin-bottom: 10px;
  }

  .users__items-button button {
    width: 100%;
    max-width: 200px;
    height: 40px;
    font-size: 16px;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .users__items {
    padding: 15px;
  }

  .users__items-text {
    font-size: 14px;
  }

  .users__items-button button {
    height: 35px;
    font-size: 14px;
  }
}
</style>