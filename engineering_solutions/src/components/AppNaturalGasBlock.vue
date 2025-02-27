<template>
  <div>
    <div class="blog2">
      <div class="container">
        <div class="blog2-content">
          <div class="connected_gas">
            <div class="connected_gas-text">
              <h4>Уже подключены к газу?</h4>
              <p>Закажите услуги газораспределительной организации онлайн: техническое обслуживание, установка и замена газового оборудования, разработка проекта и пр.</p>
            </div>
            <div class="connected_gas-img"><img src="@/assets/img/conaction_gas.jpg" alt="connected_gas"></div>
          </div>
          <div class="disconnected_gas">
            <div class="disconnected_gas-text">
              <h4>Еще не подключены?</h4>
              <p>Получите всю необходимую информацию о вариантах газификации</p>
            </div>
            <div class="disconnected_gas-img"><img src="@/assets/img/disconection_gas.png" alt="disconected_gas"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
</script>

<style scoped>
.blog2 {
  width: 100%;
  background-color: #d7e1dd;
  padding: 40px 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog2-content {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.connected_gas,
.disconnected_gas {
  width: 530px;
  height: 270px;
  background-color: #035F8F;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.connected_gas:hover,
.disconnected_gas:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.connected_gas-text,
.disconnected_gas-text {
  position: absolute;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 2;
}

.connected_gas-text h4,
.disconnected_gas-text h4 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.connected_gas-text p,
.disconnected_gas-text p {
  margin: 10px 0 0;
  font-size: 15px;
  color: #fff;
  letter-spacing: 0.3px;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
}

.connected_gas-img,
.disconnected_gas-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33.33%;
  z-index: 1;
}

.connected_gas-img img,
.disconnected_gas-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.connected_gas:hover .connected_gas-img img,
.disconnected_gas:hover .disconnected_gas-img img {
  transform: scale(1.1);
}

/* Адаптация для планшетов */
@media (max-width: 1024px) {
  .connected_gas,
  .disconnected_gas {
    width: 48%;
    height: 250px;
  }

  .connected_gas-text h4,
  .disconnected_gas-text h4 {
    font-size: 18px;
  }

  .connected_gas-text p,
  .disconnected_gas-text p {
    font-size: 14px;
  }
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .blog2-content {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .connected_gas,
  .disconnected_gas {
    width: 100%;
    max-width: 530px;
    height: 200px;
  }

  .connected_gas-text h4,
  .disconnected_gas-text h4 {
    font-size: 16px;
  }

  .connected_gas-text p,
  .disconnected_gas-text p {
    font-size: 13px;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .connected_gas,
  .disconnected_gas {
    height: 180px;
  }

  .connected_gas-text h4,
  .disconnected_gas-text h4 {
    font-size: 14px;
  }

  .connected_gas-text p,
  .disconnected_gas-text p {
    font-size: 12px;
  }
}
</style>