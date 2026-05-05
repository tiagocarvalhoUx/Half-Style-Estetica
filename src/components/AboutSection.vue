<script setup>
import { metrics } from "../data/siteData";
</script>

<template>
  <section class="grid gap-9 bg-gradient-to-b from-ivory to-[#fbf5ee] px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-20 lg:py-28" id="sobre">
    <div>
      <p class="eyebrow">Sobre a Half Style</p>
      <h2 class="section-title">Cuidado estetico com criterio, conforto e transparencia.</h2>
      <p class="mt-5 max-w-3xl text-[#6f6268]">A Half Style Estetica foi estruturada para atender clientes que buscam tratamentos faciais e corporais com atendimento consultivo, ambiente reservado e orientacao clara antes de cada procedimento.</p>
    </div>

    <div class="grid gap-4" aria-label="Indicadores de confianca">
      <article v-for="metric in metrics" :key="metric.label" class="luxe-panel p-6">
        <strong class="block text-4xl leading-none text-[#8f4657]">{{ metric.value }}</strong>
        <span class="mt-2 block font-bold text-[#6f6268]">{{ metric.label }}</span>
      </article>
    </div>
  </section>
</template>
