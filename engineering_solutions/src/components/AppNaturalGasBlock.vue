<template>
  <div>
    <div class="blog2">
      <div class="container">
        <div class="blog2-content">
          <div class="connected_gas">
            <div class="connected_gas-text">
              <h4>Уже подключены к газу?</h4>
              <p>закажите услуги газораспределительной организации онлайн: техническое обслуживание, установака и замена газового оборудования, разработка проекта и пр.</p>
            </div>
            <div class="connected_gas-img"><img src="@/assets/img/conaction_gas.jpg" alt="connected_gas"></div>
          </div>
          <div class="disconnected_gas">
            <div class="disconnected_gas-text">
              <h4>Еще не подключены?</h4>
              <p>получите всю необходимую информацию о вариантах газификации</p>
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
  height: 340px;
  background-size: cover;
  background-position: center;
  background-color: #d7e1dd;
}

.blog2-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 340px;
}

.connected_gas {
  width: 530px;
  height: 270px;
  background-color: #035F8F;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
}

.connected_gas-text {
  position: absolute;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 2;
}

.connected_gas-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33.33%;
  z-index: 1;
}

.connected_gas-img img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;

}

.connected_gas:hover .connected_gas-img img {
  transform: scale(1.1);
}

.connected_gas-text p {
  margin: 10px 0 0;
  font-size: 15px;
  color: #fff;
  letter-spacing: 0.3px;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
}

.connected_gas-text h4 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.disconnected_gas {
  width: 530px;
  height: 270px;
  background-color: #025178;
  margin-left: 20px;
  position: relative;
  overflow: hidden;
}

.disconnected_gas-text {
  position: absolute;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 2;
}

.disconnected_gas-text h4 {
  margin: 0;
  font-size: 20px;
  color: #fff;
}

.disconnected_gas-text p {
  margin: 10px 0 0;
  font-size: 15px;
  color: #fff;
  letter-spacing: 0.3px;
  line-height: 1.5;
  font-family: 'Arial', sans-serif;
}

.disconnected_gas-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33.33%;
  z-index: 1;
}

.disconnected_gas-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.disconnected_gas:hover .disconnected_gas-img img {
  transform: scale(1.1);
}

</style>