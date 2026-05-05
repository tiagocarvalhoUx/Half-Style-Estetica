<script setup>
import { onMounted, ref } from "vue";
import { halfStyleFinal } from "../assets";
import { trustItems } from "../data/siteData";

const flipActive = ref(false);
let flipTimer;

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
  window.setInterval(playFlip, 6000);
});
</script>

<template>
  <section class="hero-bg grid min-h-[calc(100vh-72px)] items-center gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-20 lg:py-16">
    <div
      class="hero-media hero-visual hero-flip-card animate__animated animate__flip order-first min-h-[340px] overflow-hidden rounded-lg border border-gold/25 shadow-luxe lg:order-last lg:min-h-[min(68vh,620px)]"
      :class="{ 'is-flipping': flipActive }"
      @mouseenter="playFlip"
      @click="playFlip"
      @touchstart.passive="playFlip"
    >
      <img class="hero-brand-image" :src="halfStyleFinal" alt="Identidade visual premium da Half Style Estetica">
      <div class="hero-image-shade"></div>
    </div>

    <div class="max-w-3xl">
      <h1 class="brand-title font-display text-[clamp(3rem,8vw,7rem)] leading-[.92]">Half Style Estetica</h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-[#574b51] lg:text-xl">Procedimentos premium para sobrancelhas, pele, labios, laser e bem-estar, com avaliacao profissional e plano de cuidado individual.</p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a class="btn-primary" href="#contato">Agende sua consulta gratis</a>
        <a class="btn-secondary" href="#procedimentos">Ver procedimentos</a>
      </div>

      <p class="mt-4 text-sm text-[#6f6268]">Primeiros 10 agendamentos ganham 20% de desconto no primeiro procedimento.</p>

      <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" aria-label="Diferenciais">
        <span v-for="item in trustItems" :key="item" class="rounded-lg border border-gold/30 bg-ivory/80 px-3 py-2 text-sm font-bold">{{ item }}</span>
      </div>
    </div>
  </section>
</template>
