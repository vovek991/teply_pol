<template>
  <section class="main-banner">
    <div class="main-banner__title">ЧТО ВЛИЯЕТ НА СТОИМОСТЬ ВОДЯНОГО ТЕПЛОГО ПОЛА?</div>
    <div class="main-banner__icons main-banner__icons--bottom">
      <div
        v-for="(item, idx) in icons"
        :key="item.title"
        class="main-banner__icon-block"
        :class="{ 'main-banner__icon-block--active': idx === activeIndex }"
        @click="activeIndex = idx"
      >
        <img :src="item.img" :alt="item.title" />
        <div class="main-banner__icon-text">{{ item.title }}</div>
        <div v-if="idx === activeIndex" class="main-banner__icon-arrow"></div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="activeIndex !== null" class="main-banner__desc-block">
        <div class="main-banner__desc-text">
          {{ icons[activeIndex].desc }}
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import factor1 from '../../assets/factor_1.svg';
import factor2 from '../../assets/factor_2.svg';
import factor3 from '../../assets/factor_3.svg';
import factor4 from '../../assets/factor_4.svg';
import factor5 from '../../assets/factor_5.svg';
import factor6 from '../../assets/factor_6.svg';

const icons = [
  {
    img: factor1,
    title: 'Размер строения',
    desc: 'Всем понятно что чем больше здание, тем общая стоимость дороже. В то же время чем объект меньше, тем стоимость одного квадратного метра напольного отопления дороже. Это связано с небольшой разницей в стоимости распределительного оборудования, автоматики для меньших и больших площадей.'
  },
  {
    img: factor2,
    title: 'Выбор материала',
    desc: 'Большое влияние на общую стоимость системы отопления оказывает выбор материала. Одну и ту же систему напольного отопления можно сделать за разумную цену, а можно переплатить за бренд, получив на выходе один и тот же функционал.'
  },
  {
    img: factor3,
    title: 'Способ монтажа',
    desc: 'Под условия каждого объекта способ монтажа подбирается индивидуально. Самым оптимальным вариантом водяного теплого пола является система бетонного типа, но так-как возможность ее выполнения не везде возможна (деревянные перекрытия) выполняются легкие напольные системы.'
  },
  {
    img: factor4,
    title: 'Техническое решение',
    desc: 'Очень многое зависит как в стоимости так и в функциональных возможностях от оптимального технического решения подобранного под Ваши нужды и особенности объекта. Многолетний опыт работы позволяет нам безошибочно выбирать правильные решения.'
  },
  {
    img: factor5,
    title: 'Зональное управление',
    desc: 'Только зонально регулируемая система может привести к правильной сбалансированной работе, экономии и комфорту. Если автоматика установлена правильно и настроена как положено, ещё никто ни разу не пожалел о её приобретении.'
  },
  {
    img: factor6,
    title: 'Толщина утеплителя',
    desc: 'От толщины утеплителя зависит не только стоимость первоначальных вложений в систему, но и дальнейшие расходы на эксплуатацию. Сэкономив изначально, Вы будете переплачивать на протяжении всего срока эксплуатации системы.'
  },
];

const activeIndex = ref(0);
</script>

<style scoped>
.main-banner {
  width: 100vw;
  min-height: 0;
  position: relative;
  overflow: hidden;
  background: #f7f7f7;
  padding: 0;
}
.main-banner__title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #232c36;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}
/* Удалены стили main-banner__bg и main-banner__btn */
.main-banner__icons--bottom {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 48px;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
}
.main-banner__icon-block {
  max-width: 120px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: color 0.2s;
}
.main-banner__icon-block img {
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
  filter: grayscale(1);
  transition: filter 0.2s;
}
.main-banner__icon-block--active img {
  filter: grayscale(0) brightness(1.1) sepia(1) hue-rotate(-30deg) saturate(2) !important;
}
.main-banner__icon-text {
  color: #232c36;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 4px;
  transition: color 0.2s, font-weight 0.2s;
}
.main-banner__icon-block--active .main-banner__icon-text {
  color: #c49a41;
  font-weight: 700;
}
.main-banner__icon-arrow {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #c49a41;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -18px;
}
.main-banner__desc-block {
  width: 100vw;
  background: #ededed;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  border-radius: 8px;
  margin: 0 auto;
  padding: 24px 32px;
  max-width: 1100px;
  font-size: 18px;
  color: #232c36;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 1200px) {
  .main-banner__icons--bottom {
    gap: 24px;
    padding: 0;
  }
  .main-banner__desc-block {
    padding: 16px 8px;
    font-size: 15px;
  }
}
@media (max-width: 800px) {
  .main-banner__icons--bottom {
    gap: 8px;
    padding: 0;
  }
  .main-banner__desc-block {
    padding: 8px 2px;
    font-size: 12px;
  }
}
@media (max-width: 600px) {
  .main-banner__icons--bottom {
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    align-items: flex-start;
    max-width: 100vw;
    padding: 0 4px;
  }
  .main-banner__icon-block {
    max-width: 80px;
    min-width: 60px;
    margin-bottom: 8px;
  }
  .main-banner__icon-block img {
    width: 40px;
    height: 40px;
  }
  .main-banner__icon-text {
    font-size: 12px;
  }
  .main-banner__desc-block {
    font-size: 12px;
    padding: 8px 2px;
    max-width: 98vw;
  }
}
</style> 