<script setup>
import { emeraldStudioInterior } from "../assets";
import { metrics } from "../data/siteData";
</script>

<template>
  <section class="about-panel" id="sobre">
    <div class="about-image-frame">
      <img :src="emeraldStudioInterior" alt="Recepção da Half Style Estética em tons claros e naturais" loading="lazy">
    </div>

    <div class="about-copy">
      <p class="section-kicker">Sobre nós</p>
      <h2>Mais que estética, um estilo de vida.</h2>
      <p>Na Half Style Estética, acreditamos que o cuidado verdadeiro vai além da aparência. É sobre sentir-se bem, ter mais confiança e viver sua melhor versão todos os dias.</p>
      <a class="emerald-button" href="#contato">
        Conheça nossa história
        <span aria-hidden="true">→</span>
      </a>

      <div class="about-metrics" aria-label="Indicadores de confiança">
        <article v-for="metric in metrics" :key="metric.label">
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
