<template>
  <section class="hero-redesign-bg">
    <div class="hero-redesign-bg__overlay"></div>
    <div class="hero-redesign-bg__content">
      <div class="hero-redesign-bg__left">
        <div class="hero-redesign-bg__subtitle">
          МОНТАЖ <span>ВОДЯНОГО<br>ТЕПЛОГО ПОЛА</span> ПОД КЛЮЧ
        </div>
        <div class="hero-redesign-bg__title">
          ПО ТЕХНОЛОГИИ <span>ENERGY<br> EFFICIENT ECONOMY*</span><br>ЗА 5 ДНЕЙ С ГАРАНТИЕЙ!
        </div>
        <div class="hero-redesign-bg__features">
          <div class="hero-redesign-bg__feature">
            <img :src="feature1" alt="" class="hero-redesign-bg__icon" />
            <div class="hero-redesign-bg__feature-text">Точный расчет<br>теплопотерь помещений</div>
          </div>
          <div class="hero-redesign-bg__feature">
            <img :src="feature2" alt="" class="hero-redesign-bg__icon" />
            <div class="hero-redesign-bg__feature-text">Надежное европейское<br>оборудование</div>
          </div>
          <div class="hero-redesign-bg__feature">
            <img :src="feature3" alt="" class="hero-redesign-bg__icon" />
            <div class="hero-redesign-bg__feature-text">Профессиональный проект<br>и расширенная гарантия 3 года</div>
          </div>
        </div>
        <div class="hero-redesign-bg__desc">
          <span>РАССЧИТАЕМ СТОИМОСТЬ</span> ВОДЯНОГО ТЕПЛОГО ПОЛА <span>С УЧЕТОМ ИНДИВИДУАЛЬНЫХ<br>ПАРАМЕТРОВ ОБЪЕКТА</span> В ТЕЧЕНИИ 24 ЧАСОВ!<br>
          <span class="hero-redesign-bg__desc-bold">ДЛЯ ЭТОГО ЗАПОЛНИТЕ ЗАЯВКУ<br>И ОТПРАВЬТЕ ЕЕ НАМ</span>
        </div>
        <button class="hero-redesign-bg__button">РАССЧИТАТЬ СТОИМОСТЬ</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import feature1 from '../../assets/feature_1.svg';
import feature2 from '../../assets/feature_2.svg';
import feature3 from '../../assets/feature_3.svg';
import girl from '../../assets/hero_girl.png';
</script>

<style scoped>
.hero-redesign-bg {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../../assets/hero_girl.png') no-repeat right bottom;
  background-size: cover;
  background-position: 70% 80%;
  overflow: hidden;
}
.hero-redesign-bg__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 0%),
    linear-gradient(90deg, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.55) 100%);
  z-index: 1;
}
.hero-redesign-bg__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
  min-height: 700px;
  padding: 32px 16px 32px 32px;
  box-sizing: border-box;
}
.hero-redesign-bg__left {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.hero-redesign-bg__subtitle {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 16px;
  color: #232c36;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero-redesign-bg__subtitle span {
  font-weight: 700;
}
.hero-redesign-bg__title {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 28px;
  color: #b88e34;
  font-weight: 700;
  margin-bottom: 28px;
  line-height: 1.2;
  text-transform: uppercase;
}
.hero-redesign-bg__title span {
  color: #b88e34;
  font-weight: 700;
}
.hero-redesign-bg__features {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
}
.hero-redesign-bg__feature {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.hero-redesign-bg__icon {
  width: 48px;
  height: 48px;
}
.hero-redesign-bg__feature-text {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 16px;
  color: #232c36;
  font-weight: 400;
  text-align: left;
  line-height: 1.2;
}
.hero-redesign-bg__desc {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(90deg, #b88e34 0%, #b88e34cc 100%);
  border-radius: 8px;
  padding: 16px 18px;
  margin-bottom: 18px;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  line-height: 1.4;
}
.hero-redesign-bg__desc span {
  font-weight: 700;
  color: #fff;
}
.hero-redesign-bg__desc-bold {
  display: block;
  font-weight: 700;
  color: #fff;
  margin-top: 6px;
}
.hero-redesign-bg__button {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #b88e34;
  border: none;
  border-radius: 6px;
  padding: 16px 32px;
  cursor: pointer;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s;
}
.hero-redesign-bg__button:hover {
  background: #9b7300;
}
@media (max-width: 900px) {
  .hero-redesign-bg__content {
    flex-direction: column;
    align-items: center;
    min-height: unset;
    padding: 16px 4px;
  }
}
@media (max-width: 600px) {
  .hero-redesign-bg__content {
    padding: 8px 0;
  }
  .hero-redesign-bg__left {
    padding: 0 4px;
  }
  .hero-redesign-bg__title {
    font-size: 18px;
  }
  .hero-redesign-bg__feature-text {
    font-size: 13px;
  }
  .hero-redesign-bg__desc {
    font-size: 12px;
    padding: 10px 8px;
  }
  .hero-redesign-bg__button {
    font-size: 14px;
    padding: 10px 16px;
  }
}
</style> 