<template>
  <header class="header">
    <button class="burger" @click="isMenuOpen = !isMenuOpen" aria-label="Открыть меню">
      <span></span><span></span><span></span>
    </button>
    <div :class="['nav__menu', { 'nav__menu--open': isMenuOpen }]">
      <a href="#" class="nav__link">Расчет</a>
      <a href="#" class="nav__link">Этапы монтажа</a>
      <a href="#" class="nav__link">Примеры работ</a>
      <a href="#" class="nav__link">Вопрос-ответ</a>
      <a href="#" class="nav__link">Контакты</a>
      <div class="header__location">
        <img :src="location" alt="" class="icon" />
        <span>г.Санкт-Петербург, Выборгское шоссе, д.212, строение 8</span>
      </div>
    </div>
    <div class="container header__container" v-show="!isMenuOpen">
      <nav class="nav">
        <a href="/" class="logo">
          <img :src="logo" alt="STOPRADIATORS" class="logo__img" />
          <div class="logo__text">
            <span class="logo__title">STOPRADIATORS</span>
            <span class="logo__subtitle">ВСЕ ИНЖЕНЕРНЫЕ СЕТИ</span>
          </div>
          <div class="logo__text__2">
            <span class="text__title">Монтаж инженерных систем</span>
            <span class="text__subtitle">И продажа оборудования</span>
          </div>
        </a>
        <div class="nav__info">
          <div class="header__contacts">
            <div class="header__contact-info">
              <div class="header__phones">
                <img :src="headphones" alt="" class="headphones_img" />
                <div>
                  <a href="tel:+78124525246" class="tel__1">8 (812) 452-52-46</a>
                  <a href="tel:+78124583538" class="tel__2">8 (812) 458-35-38</a>
                </div>
              </div>
              <button class="button button--primary">ЗАКАЗАТЬ ЗВОНОК</button>
              <div class="header__schedule">
                <img :src="mail" alt="" class="mail_img" />
                <div class="schedule__text">
                  <span>Пн-Пт: 9:00-19:00</span>
                  <a href="mailto:info@stopradiators.ru">info@stopradiators.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';
import location from '../../assets/location.svg';
import logo from '../../assets/logo.svg';
import headphones from '../../assets/Headphones.svg';
import mail from '../../assets/mail.svg';
const isMenuOpen = ref(false);

watch(isMenuOpen, (val) => {
  if (val) {
    document.body.classList.add('menu-open');
    const app = document.getElementById('app');
    if (app) app.classList.add('menu-hide-content');
  } else {
    document.body.classList.remove('menu-open');
    const app = document.getElementById('app');
    if (app) app.classList.remove('menu-hide-content');
  }
});
</script> 