<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="hero__title">
          МОНТАЖ <span>ВОДЯНОГО ТЕПЛОГО ПОЛА</span> ПОД КЛЮЧ
        </h1>
        <div class="hero__subtitle">
          ПО ТЕХНОЛОГИИ ENERGY EFFICIENT ECONOMY*<br />
          ЗА 5 ДНЕЙ С ГАРАНТИЕЙ!
        </div>
        <div class="features">
          <div class="feature_1">
            <img :src="feature1" alt="" class="feature__icon" />
            <p>Точный расчет теплопотерь помещений</p>
          </div>
          <div class="feature_2">
            <img :src="feature2" alt="" class="feature__icon" />
            <p>Надежное европейское оборудование</p>
          </div>
          <div class="feature_3">
            <img :src="feature3" alt="" class="feature__icon" />
            <p>Профессиональный проект и расширенная гарантия 5 лет</p>
          </div>
        </div>
        <div class="calculation-block">
          <p><span>РАССЧИТАЕМ СТОИМОСТЬ</span> ВОДЯНОГО ТЕПЛОГО ПОЛА</p>
          <p><span>С УЧЕТОМ ИНДИВИДУАЛЬНЫХ ПАРАМЕТРОВ ОБЪЕКТА</span>В ТЕЧЕНИИ 24 ЧАСОВ!</p>
          <p><span>ДЛЯ ЭТОГО</span> ЗАПОЛНИТЕ ЗАЯВКУ <span>И ОТПРАВЬТЕ ЕЕ НАМ</span></p>
          <button class="button button--calculation">РАССЧИТАТЬ СТОИМОСТЬ</button>
        </div>
        <p class="disclaimer">
          *Технология Energy Efficent Economy (EEE, или энергосберегающая экономия) предполагает внедрение в доме сбалансированной<br />
          и экологичной системы напольного отопления на основе теплотехнического расчета. Система регулируется зонально настенными термометрами.<br />
          Ее экономическая эффективность по сравнению с традиционными отопительными системами достигает 25%.<br />
          Технологическая цель - экономия энергии и Ваш комфорт!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import feature1 from '../../assets/feature_1.svg';
import feature2 from '../../assets/feature_2.svg';
import feature3 from '../../assets/feature_3.svg';
</script> 