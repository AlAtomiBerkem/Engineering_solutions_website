<template>
  <div>
    <div class="maintenance">
      <div class="container">
        <div class="maintenance__content" id="maintenanceAncor">
          <div class="maintenance__content-topic">
            <h4>Техобслуживание газового оборудования: кто проводит, как и зачем</h4>
          </div>
          <div class="maintenance__content-wrapper">
            <div class="maintenance__content-text">
              <p class="intro">Разбираемся, обязательно ли техническое обслуживание ВКГО и ВДГО, кто им занимается и чем грозит отсутствие договора с обслуживающей организацией.</p>
              <p class="details">
                Что относится к газовому оборудованию<br>
                ВКГО — это внутриквартирное газовое оборудование, к нему относятся газовые плиты, отопительные котлы или водонагревательные колонки вместе с прочими газовыми коммуникациями в границах квартиры либо частного дома.<br><br>
                ВДГО — это внутридомовое газовое оборудование, к нему относятся:<br>
                - газопроводы;<br>
                - газоиспользующее оборудование;<br>
                - технические устройства на газопроводах, в том числе регулирующая и предохранительная арматура;<br>
                - системы контроля загазованности помещений, приборы учета газа и др.<br><br>
                Граница между ВДГО и ВКГО в многоквартирном доме — первый запорный кран на входе газопровода в жилое помещение. Именно он отключает подачу газа.
              </p>
            </div>
            <div class="maintenance__content-image">
              <img src="@/assets/img/img2.jpg" alt="Газовое оборудование">
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
.maintenance {
  width: 100%;
  background-color: #035F8F;
  padding: 40px 0;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.maintenance__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.maintenance__content-topic h4 {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1.4;
  margin: 0;
}

.maintenance__content-wrapper {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.maintenance__content-text {
  flex: 1;
  max-width: 60%;
}

.maintenance__content-text .intro {
  font-size: 18px;
  line-height: 1.6;
  color: #f0f0f0;
}

.maintenance__content-text .details {
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
}

.maintenance__content-image {
  flex: 1;
  max-width: 40%;
}

.maintenance__content-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.maintenance__content-topic h4,
.maintenance__content-text .intro,
.maintenance__content-text .details {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.maintenance__content-topic {
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .maintenance__content-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .maintenance__content-text {
    max-width: 100%;
  }

  .maintenance__content-image {
    max-width: 100%;
  }

  .maintenance__content-topic h4 {
    font-size: 24px;
  }

  .maintenance__content-text .intro {
    font-size: 16px;
  }

  .maintenance__content-text .details {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .maintenance__content-topic h4 {
    font-size: 20px;
  }

  .maintenance__content-text .intro {
    font-size: 14px;
  }

  .maintenance__content-text .details {
    font-size: 12px;
  }
}
</style>