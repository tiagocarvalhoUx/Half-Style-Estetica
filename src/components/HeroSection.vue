<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { emeraldHeroProducts } from "../assets";

const benefits = [
  {
    title: "Natural",
    text: "Ingredientes selecionados",
    icon: "leaf"
  },
  {
    title: "Eficaz",
    text: "Tecnologia avançada e resultados reais",
    icon: "drop"
  },
  {
    title: "Personalizado",
    text: "Tratamentos únicos para você",
    icon: "flower"
  }
];

const flipActive = ref(false);
let flipTimer;
let flipInterval;

function playFlip() {
  window.clearTimeout(flipTimer);
  flipActive.value = false;

  window.requestAnimationFrame(() => {
    flipActive.value = true;
    flipTimer = window.setTimeout(() => {
      flipActive.value = false;
    }, 1150);
  });
}

onMounted(() => {
  playFlip();
  flipInterval = window.setInterval(playFlip, 6000);
});

onUnmounted(() => {
  window.clearTimeout(flipTimer);
  window.clearInterval(flipInterval);
});
</script>

<template>
  <section class="emerald-hero">
    <div class="hero-copy">
      <p class="section-kicker">Emerald Wellness</p>
      <h1 class="hero-title">
        Beleza que floresce de
        <em>dentro para fora.</em>
      </h1>
      <p class="hero-lead">Rituais personalizados que unem ciência, natureza e cuidado para realçar sua melhor versão.</p>

      <div class="hero-actions">
        <a class="emerald-button" href="#contato">
          Agendar sua experiência
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div class="hero-benefits" aria-label="Diferenciais">
        <article v-for="benefit in benefits" :key="benefit.title">
          <span class="benefit-icon" :class="`benefit-${benefit.icon}`" aria-hidden="true"></span>
          <strong>{{ benefit.title }}</strong>
          <p>{{ benefit.text }}</p>
        </article>
      </div>
    </div>

    <div
      class="hero-product hero-flip-card animate__animated animate__flip"
      :class="{ 'is-flipping': flipActive }"
      @mouseenter="playFlip"
      @click="playFlip"
      @touchstart.passive="playFlip"
    >
      <img :src="emeraldHeroProducts" alt="Linha Emerald Wellness com sérum e máscara da Health Style Estética">
    </div>
  </section>
</template>
