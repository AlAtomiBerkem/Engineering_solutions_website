<template>
  <div>
    <AppHeader />
    <AppNavbar />
    <div class="block gas-connection">
      <div class="container">
        <div class="content">
          <h3 id="podcluchenie">Подключение газа</h3>
          <h2>Подключение газа</h2>
          <p>
            Подключение газа — это важный шаг к комфорту и экономии. Мы предлагаем полный комплекс услуг по газификации вашего дома, дачи или предприятия.
            Наши специалисты проведут все необходимые работы: от проектирования до пуска газа в эксплуатацию.
            Гарантируем качество, безопасность и соблюдение всех нормативов. Оставьте заявку, и мы бесплатно проконсультируем вас по всем вопросам!
          </p>
          <ul>
            <li>Проектирование и согласование</li>
            <li>Монтаж газового оборудования</li>
            <li>Пуско-наладочные работы</li>
            <li>Техническое обслуживание</li>
          </ul>
          <button>Оставить заявку</button>
        </div>
      </div>
    </div>

    <div class="block individuals">
      <div class="container">
        <div class="content">
          <h3 id="urlitsa">Физические лица</h3>
          <h2>Услуги для физических лиц</h2>
          <p>
            Мы заботимся о вашем комфорте и безопасности! Для частных клиентов мы предлагаем широкий спектр услуг по газификации и обслуживанию газового оборудования.
            Независимо от того, нужно ли вам подключить газ к дому, установить газовый котел или провести техническое обслуживание, — наши специалисты готовы помочь.
            Работаем быстро, качественно и с гарантией!
          </p>
          <ul>
            <li>Подключение газа к частному дому</li>
            <li>Установка газовых котлов и плит</li>
            <li>Ремонт и обслуживание газового оборудования</li>
            <li>Консультации по безопасной эксплуатации</li>
          </ul>
          <button>Узнать подробнее</button>
        </div>
      </div>
    </div>

    <div class="block legal-entities">
      <div class="container">
        <div class="content">
          <h3>Юридические лица</h3>
          <h2>Услуги для юридических лиц</h2>
          <p>
            Для предприятий и организаций мы предлагаем профессиональные услуги по газификации и обслуживанию газового оборудования.
            Наши решения помогут вам оптимизировать затраты на энергоресурсы и обеспечить бесперебойную работу вашего бизнеса.
            Мы работаем с объектами любой сложности: от небольших кафе до крупных производственных комплексов.
          </p>
          <ul>
            <li>Проектирование и монтаж газовых систем</li>
            <li>Пуско-наладочные работы</li>
            <li>Техническое обслуживание и ремонт</li>
            <li>Аудит газового оборудования</li>
          </ul>
          <button>Связаться с нами</button>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style scoped>
.block {
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center; /* Текст справа */
  background-size: cover;
  background-position: center;
}

.block .container {
  width: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.block h2 {
  font-size: 2.5rem;
  color: #035F8F;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}

.block h3 {
  font-size: 1.5rem;
  color: #025178;
  margin-bottom: 10px;
  font-family: 'Varela Round', sans-serif;
  font-weight: 600;
}

.block p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.6;
}

.block ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.block ul li {
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.block button {
  background-color: #035F8F;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.block button:hover {
  background-color: #025178;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.block button:active {
  background-color: #024160;
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Цвета для блоков */
.gas-connection {
  background-color: #f0f8ff;
}

.individuals {
  background-color: #e6f7ff;
}

.legal-entities {
  background-color: #f0f8ff;
}

@media (max-width: 1200px) {
  .block .container {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .block {
    justify-content: center;
  }

  .block .container {
    width: 90%;
    padding: 20px;
  }

  .block h2 {
    font-size: 2rem;
  }

  .block h3 {
    font-size: 1.3rem;
  }

  .block p {
    font-size: 1rem;
  }

  .block button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

</style>