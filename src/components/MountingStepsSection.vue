<template>
  <section class="mounting-steps" :style="{ backgroundImage: `url(${fon3})` }">
    <h2 class="mounting-steps__title">
      <span>КАК БУДЕТ ПРОИСХОДИТЬ РАБОТА ПО МОНТАЖУ СИСТЕМЫ</span> ВОДЯНОГО ТЕПЛОГО ПОЛА?
    </h2>
    <div class="mounting-steps__grid">
      <div
        v-for="(step, idx) in steps"
        :key="step.title"
        class="mounting-step"
      >
        <div class="mounting-step__img-wrap">
          <img :src="step.img" :alt="step.title" class="mounting-step__img" />
        </div>
        <div class="mounting-step__info">
          <div class="mounting-step__num">{{ idx + 1 }}</div>
          <div class="mounting-step__text">
            <div class="mounting-step__title">{{ step.title }}</div>
            <div class="mounting-step__desc">{{ step.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fon3 from '../../assets/fon3.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';

const steps = [
  {
    img: img1,
    title: 'ПОДГОТОВКА ОСНОВАНИЯ',
    desc: 'Пол выравнивается перед укладкой пенополистирола (сбиваются наплывы бетонного раствора)'
  },
  {
    img: img2,
    title: 'УКЛАДКА УТЕПЛИТЕЛЯ',
    desc: 'Укладываем пенополистирол толщиной определенной в расчете (по умолчанию 100мм). Сверху укладываем подложку для теплого пола с разметкой.'
  },
  {
    img: img3,
    title: 'УКЛАДКА ТРУБЫ',
    desc: 'Труба укладывается с определенным шагом в расчете (по умолчанию 150мм). Контуры делаются примерно одинаковой длины для лучшей балансировки системы. Прокладываем кабели от коллектора к местам будущей установки комнатных термостатов.'
  },
  {
    img: img4,
    title: 'МОНТАЖ КОЛЛЕКТОРА',
    desc: 'В заранее определенном месте устанавливается коллектор. Затем все трубы подключаются к коллектору с помощью специальных присоединительных элементов.'
  },
  {
    img: img5,
    title: 'ОПРЕССОВКА И ПРОВЕРКА',
    desc: 'Перед выполнением работ по стяжке система опрессовывается воздухом с фиксацией давления (проверка на герметичность).'
  },
  {
    img: img6,
    title: 'ЗАЛИВКА СТЯЖКИ',
    desc: 'После того как убедились, что система герметична, выполняем цементно-песчаную стяжку.'
  },
  {
    img: img7,
    title: 'УСТАНОВКА АВТОМАТИКИ',
    desc: 'После окончания чистовой отделки устанавливается автоматика для управления системой отопления.'
  },
  {
    img: img8,
    title: 'ЗАПУСК СИСТЕМЫ В РАБОТУ',
    desc: 'Когда стяжка высохла, система запускается в работу с постепенным поднятием температуры.'
  }
];
</script>

<style scoped>
.mounting-steps {
  padding: 32px 0 24px 0;
  background-size: cover;
  background-position: center;
}
.mounting-steps__title {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.mounting-steps__grid {
  display: grid;
  grid-template-columns: repeat(4, 312px);
  gap: 16px;
  justify-content: center;
  max-width: 1320px;
  margin: 0 auto;
}
.mounting-step {
  background: rgba(255,255,255,0.97);
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 315px;
  position: relative;
  padding: 0;
}
.mounting-step__img-wrap {
  width: 100%;
  height: 169px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  border-radius: 0;
}
.mounting-step__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  border: none;
}
.mounting-step__info {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding: 10px 12px 12px 12px;
  flex: 1 1 auto;
  min-height: 0;
}
.mounting-step__num {
  width: 28px;
  height: 28px;
  background: #d4af37;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: 2px;
}
.mounting-step__text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
  min-height: 0;
}
.mounting-step__title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 4px;
  color: #333;
}
.mounting-step__desc {
  font-size: 0.92rem;
  color: #444;
  line-height: 1.25;
}
@media (max-width: 1320px) {
  .mounting-steps__grid {
    grid-template-columns: repeat(3, 312px);
    max-width: 990px;
  }
}
@media (max-width: 990px) {
  .mounting-steps__grid {
    grid-template-columns: repeat(2, 312px);
    max-width: 640px;
  }
}
@media (max-width: 700px) {
  .mounting-steps__grid {
    grid-template-columns: 1fr;
    max-width: 312px;
  }
  .mounting-step {
    width: 100%;
    min-width: 0;
  }
}
</style> 