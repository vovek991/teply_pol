<template>
  <div id="app">
    <HeaderSection />
    <main>
      <HeroSection />
      <FactorsSection />
      <CalculatorSection />
      <MountingStepsSection />
    </main>
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue';
import HeroSection from './components/HeroSection.vue';
import FactorsSection from './components/FactorsSection.vue';
import CalculatorSection from './components/CalculatorSection.vue';
import MountingStepsSection from './components/MountingStepsSection.vue';
</script>

<style>
@import '../styles.css';
</style> 