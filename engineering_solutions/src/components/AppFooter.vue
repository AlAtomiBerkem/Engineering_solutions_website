<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="footer_content">
          <div class="footer_content-logo"><img src="@/assets/logo10.png" alt="logo"></div>
          <div class="footer_content-company_name">Инженерные решения</div>
          <div class="footer_content-contacts">
            <ul>
              <li><strong>адресс:</strong>  аддрес: 420006, Татарстан, г.Казань, тер. Химград, д.41, офис 4</li>
              <li><strong>почта:</strong>  ir-kazan@mail.ru</li>
              <li><strong>телефон:</strong>  телефон: Офис: +7(986) 907-18-00</li>
              <li><strong>режим работы:</strong>  режим работы: 9:00 - 21:00 суббота, воскресенье выходной</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #025178;
  padding: 20px 0;
}

.footer_content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
}

.footer_content-logo {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_content-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer_content-company_name {
  font-size: 25px;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

.footer_content-contacts {
  display: flex;
  color: #e5eded;
}

.footer_content-contacts ul {
  list-style: none;
  padding: 0;
}

@media (max-width: 768px) {
  .footer_content {
    flex-direction: column;
    text-align: center;
  }

  .footer_content-company_name {
    font-size: 20px;
    margin: 10px 0;
  }

  .footer_content-contacts ul {
    padding: 0;
  }

  .footer_content-contacts ul li {
    margin: 5px 0;
  }
}

@media (max-width: 480px) {
  .footer_content-company_name {
    font-size: 18px;
  }

  .footer_content-contacts ul li {
    font-size: 14px;
  }
}
</style>