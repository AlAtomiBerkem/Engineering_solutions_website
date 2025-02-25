<template>
  <div>
    <div class="contact-info">
      <div class="container">
        <div class="contact-info__content">
          <div class="contact__items">
            <div class="contact__item-icon"><img src="@/assets/svg/contact__phone.svg" alt="phone"></div>
            <div class="contact__item-text">Телефон</div>
            <div class="contact__item-valuer">+7(986) 907-18-00</div>
          </div>
          <div class="contact__items" id="contacts">
            <div class="contact__item-icon"><img src="@/assets/svg/contact__mail.svg" alt="mail"></div>
            <div class="contact__item-text">Почта</div>
            <div class="contact__item-valuer">ir-kazan@mail.ru</div>
          </div>
          <div class="contact__items">
            <div class="contact__item-icon"><img src="@/assets/svg/contact__target.svg" alt=""></div>
            <div class="contact__item-text">Адресс</div>
            <div class="contact__item-valuer">г.Казань, тер. Химград, д.41, офис 4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.contact-info {
  width: 100%;
  background-color: #035F8F;
  padding: 60px 0;
}

.contact-info__content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.contact__items {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact__items:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.contact__item-icon img {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.contact__item-text {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.contact__item-valuer {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}
</style>