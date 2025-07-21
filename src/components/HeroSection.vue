<template>
  <section class="hero-redesign">
    <div class="hero-redesign__content">
      <div class="hero-redesign__left">
        <div class="hero-redesign__subtitle">
          МОНТАЖ <span>ВОДЯНОГО<br>ТЕПЛОГО ПОЛА</span> ПОД КЛЮЧ
        </div>
        <div class="hero-redesign__title">
          ПО ТЕХНОЛОГИИ <span>ENERGY<br> EFFICIENT ECONOMY*</span><br>ЗА 5 ДНЕЙ С ГАРАНТИЕЙ!
        </div>
        <div class="hero-redesign__features">
          <div class="hero-redesign__feature">
            <img :src="feature1" alt="" class="hero-redesign__icon" />
            <div class="hero-redesign__feature-text">Точный расчет<br>теплопотерь помещений</div>
          </div>
          <div class="hero-redesign__feature">
            <img :src="feature2" alt="" class="hero-redesign__icon" />
            <div class="hero-redesign__feature-text">Надежное европейское<br>оборудование</div>
          </div>
          <div class="hero-redesign__feature">
            <img :src="feature3" alt="" class="hero-redesign__icon" />
            <div class="hero-redesign__feature-text">Профессиональный проект<br>и расширенная гарантия 3 года</div>
          </div>
        </div>
        <div class="hero-redesign__desc">
          <span>РАССЧИТАЕМ СТОИМОСТЬ</span> ВОДЯНОГО ТЕПЛОГО ПОЛА <span>С УЧЕТОМ ИНДИВИДУАЛЬНЫХ<br>ПАРАМЕТРОВ ОБЪЕКТА</span> В ТЕЧЕНИИ 24 ЧАСОВ!<br>
          <span class="hero-redesign__desc-bold">ДЛЯ ЭТОГО ЗАПОЛНИТЕ ЗАЯВКУ<br>И ОТПРАВЬТЕ ЕЕ НАМ</span>
        </div>
        <button class="hero-redesign__button">РАССЧИТАТЬ СТОИМОСТЬ</button>
      </div>
      <div class="hero-redesign__right">
        <img :src="girl" alt="Девушка" class="hero-redesign__girl" />
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
.hero-redesign {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(180deg, #f7f7f7 60%, #e2e2e2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.hero-redesign__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 900px;
  min-height: 700px;
  padding: 32px 16px 32px 32px;
  box-sizing: border-box;
}
.hero-redesign__left {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
}
.hero-redesign__subtitle {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 16px;
  color: #232c36;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero-redesign__subtitle span {
  font-weight: 700;
}
.hero-redesign__title {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 28px;
  color: #b88e34;
  font-weight: 700;
  margin-bottom: 28px;
  line-height: 1.2;
  text-transform: uppercase;
}
.hero-redesign__title span {
  color: #b88e34;
  font-weight: 700;
}
.hero-redesign__features {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
}
.hero-redesign__feature {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.hero-redesign__icon {
  width: 48px;
  height: 48px;
}
.hero-redesign__feature-text {
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 16px;
  color: #232c36;
  font-weight: 400;
  text-align: left;
  line-height: 1.2;
}
.hero-redesign__desc {
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
.hero-redesign__desc span {
  font-weight: 700;
  color: #fff;
}
.hero-redesign__desc-bold {
  display: block;
  font-weight: 700;
  color: #fff;
  margin-top: 6px;
}
.hero-redesign__button {
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
.hero-redesign__button:hover {
  background: #9b7300;
}
.hero-redesign__right {
  flex: 1 1 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  min-width: 320px;
  max-width: 380px;
}
.hero-redesign__girl {
  width: 100%;
  max-width: 380px;
  height: auto;
  object-fit: contain;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
}
@media (max-width: 900px) {
  .hero-redesign__content {
    flex-direction: column;
    align-items: center;
    min-height: unset;
    padding: 16px 4px;
  }
  .hero-redesign__right {
    max-width: 100vw;
    min-width: 0;
    margin-top: 24px;
    justify-content: center;
  }
  .hero-redesign__girl {
    max-width: 320px;
  }
}
@media (max-width: 600px) {
  .hero-redesign__content {
    padding: 8px 0;
  }
  .hero-redesign__left {
    padding: 0 4px;
  }
  .hero-redesign__title {
    font-size: 18px;
  }
  .hero-redesign__feature-text {
    font-size: 13px;
  }
  .hero-redesign__desc {
    font-size: 12px;
    padding: 10px 8px;
  }
  .hero-redesign__button {
    font-size: 14px;
    padding: 10px 16px;
  }
  .hero-redesign__girl {
    max-width: 220px;
  }
}
</style> 