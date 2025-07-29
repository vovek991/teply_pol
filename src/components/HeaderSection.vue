<template>
  <header class="header">
    <div class="container header__container">
      <button class="burger" @click="isMenuOpen = !isMenuOpen" aria-label="Открыть меню">
        <span></span><span></span><span></span>
      </button>
      <div class="logo-block">
        <img :src="headphones" alt="" class="headphones_img" />
        <a href="/" class="logo">
          <img :src="logo" alt="STOPRADIATORS" class="logo__img" />
          <div class="logo__text">
            <span class="logo__title">STOPRADIATORS</span>
            <span class="logo__subtitle">ВСЕ ИНЖЕНЕРНЫЕ СЕТИ</span>
          </div>
        </a>
      </div>
      
      <!-- ПК навигация -->
      <nav class="header-pc-nav">
        <a href="#" class="header-pc-nav__link">РАСЧЕТ</a>
        <a href="#" class="header-pc-nav__link">ЭТАПЫ МОНТАЖА</a>
        <a href="#" class="header-pc-nav__link">ПРИМЕРЫ РАБОТ</a>
        <a href="#" class="header-pc-nav__link">ВОПРОС-ОТВЕТ</a>
        <a href="#" class="header-pc-nav__link header-pc-nav__link--active">КОНТАКТЫ</a>
      </nav>
      
      <!-- ПК контакты -->
      <div class="header-pc-contacts">
        <div class="header-pc-contacts__item">
          <img :src="mail" alt="" class="header-pc-contacts__icon" />
          <div class="header-pc-contacts__info">
            <div class="header-pc-contacts__schedule">Пн-Пт 9:00-19:00</div>
            <div class="header-pc-contacts__email">info@stopradiators.ru</div>
          </div>
        </div>
        <div class="header-pc-contacts__item">
          <img :src="headphones" alt="" class="header-pc-contacts__icon" />
          <div class="header-pc-contacts__info">
            <div class="header-pc-contacts__phone">8 (812) 245-23-46</div>
            <div class="header-pc-contacts__phone">8 (812) 438-32-58</div>
          </div>
        </div>
      </div>
      
      <button class="button button--primary header__call-btn">ЗАКАЗАТЬ ЗВОНОК</button>
    </div>
    
    <!-- Выпадающее меню -->
    <div :class="['dropdown-menu', { 'dropdown-menu--open': isMenuOpen }]">
      <div class="dropdown-menu__header">
        <button class="dropdown-menu__close" @click="isMenuOpen = false" aria-label="Закрыть меню">
          <span>×</span>
        </button>
        <div class="dropdown-menu__logo">
          <img :src="logo" alt="STOPRADIATORS" class="logo__img" />
          <div class="logo__text">
            <span class="logo__title">STOPRADIATORS</span>
            <span class="logo__subtitle">ВСЕ ИНЖЕНЕРНЫЕ СЕТИ</span>
          </div>
        </div>
      </div>
      
      <nav class="dropdown-menu__nav">
        <a href="#" class="dropdown-menu__link">РАСЧЕТ</a>
        <a href="#" class="dropdown-menu__link">ЭТАПЫ МОНТАЖА</a>
        <a href="#" class="dropdown-menu__link">ПРИМЕРЫ РАБОТ</a>
        <a href="#" class="dropdown-menu__link">ВОПРОС-ОТВЕТ</a>
        <a href="#" class="dropdown-menu__link dropdown-menu__link--active">КОНТАКТЫ</a>
      </nav>
      
      <div class="dropdown-menu__contacts">
        <div class="dropdown-menu__contact-item">
          <img :src="mail" alt="" class="dropdown-menu__icon" />
          <div>
            <div>Пн-Пт 9:00-19:00</div>
            <div>info@stopradiators.ru</div>
          </div>
        </div>
        <div class="dropdown-menu__contact-item">
          <img :src="headphones" alt="" class="dropdown-menu__icon" />
          <div>
            <div>8 (812) 245-23-46</div>
            <div>8 (812) 438-32-58</div>
          </div>
        </div>
        <button class="button button--primary dropdown-menu__call-btn">ЗАКАЗАТЬ ЗВОНОК</button>
      </div>
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
  } else {
    document.body.classList.remove('menu-open');
  }
});
</script> 