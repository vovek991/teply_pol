<template>
  <section class="calculator">
    <div class="container">
      <h2 class="calculator__title">
        <span>ПОДБЕРЕМ И РАССЧИТАЕМ</span> ВОДЯНОЙ ТЕПЛЫЙ ПОЛ <span>ДЛЯ ВАШЕГО ОБЪЕКТА</span> В ТЕЧЕНИИ 24 ЧАСОВ
      </h2>
      <div class="calculator__form">
        <div class="calculator__info">
          <div class="info__time">
            <span>В среднем на монтаж теплого пола нужно от 4 до 5 дней!</span>
          </div>
          <div class="calculator__question">
            <h3>Какой тип укладки вас интересует?</h3>
            <div class="calculator__options">
              <div class="option">
                <div class="option__image-container">
                  <img :src="floor1" alt="На матах с бобышками" class="option__image" />
                  <div class="option__price"><span>300</span><br /> руб. м2</div>
                </div>
                <div class="option__description">На матах с бобышками - 300 руб. м2</div>
              </div>
              <div class="option">
                <div class="option__image-container">
                  <img :src="floor2" alt="На скобах к пенополексу" class="option__image" />
                  <div class="option__price"><span>400</span><br /> руб. м2</div>
                </div>
                <div class="option__description">На скобах к пенополексу - 400 руб. м2</div>
              </div>
              <div class="option">
                <div class="option__image-container">
                  <img :src="floor3" alt="На фольгированном элементе" class="option__image" />
                  <div class="option__price"><span>450</span><br /> руб. м2</div>
                </div>
                <div class="option__description">На фольгированном элементе - 450 руб. м2</div>
              </div>
              <div class="option">
                <div class="option__image-container">
                  <img :src="floor4" alt="На армированной сетке" class="option__image" />
                  <div class="option__price"><span>500</span><br /> руб. м2</div>
                </div>
                <div class="option__description">На армированной сетке - 500 руб. м2</div>
              </div>
            </div>
          </div>
          <div class="calculator__progress">
            <div class="progress__label">Готово: <span>0%</span></div>
            <div class="progress__bar">
              <div class="progress__fill" style="width: 0%"></div>
            </div>
          </div>
          <div class="calculator__navigation">
            <button class="nav__button nav__button--prev" disabled>
              <img :src="arrowLeft" alt="Назад" />
            </button>
            <button class="nav__button nav__button--next">
              Далее
              <img :src="arrowRight" alt="Вперед" />
            </button>
          </div>
        </div>
        <div class="calculator__consultant">
          <div class="consultant__photo">
            <img :src="consultant" alt="Дмитрий" />
            <div class="consultant__status"></div>
          </div>
          <div class="consultant__info">
            <div class="consultant__name">Дмитрий</div>
            <div class="consultant__position">Менеджер</div>
            <p class="consultant__message">
              Здравствуйте, меня зовут Дмитрий, у каждого типа монтажа есть свои особенности, ответьте на несколько вопросов и я подробно расскажу Вам чем они отличаются друг от друга, а также помогу выбрать материал для водяного теплого пола.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import floor1 from '../../assets/floor_1.png';
import floor2 from '../../assets/floor_2.jpg';
import floor3 from '../../assets/floor_3.jpg';
import floor4 from '../../assets/floor_4.png';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import consultant from '../../assets/consultant.jpg';
// Логика калькулятора будет добавлена отдельно
</script> 