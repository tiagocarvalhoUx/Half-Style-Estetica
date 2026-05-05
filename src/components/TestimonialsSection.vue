<script setup>
import { computed, onMounted, ref } from "vue";
import { testimonials } from "../data/siteData";

const testimonialIndex = ref(0);
const currentTestimonial = computed(() => testimonials[testimonialIndex.value]);

function nextTestimonial() {
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length;
}

function prevTestimonial() {
  testimonialIndex.value = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length;
}

onMounted(() => {
  window.setInterval(nextTestimonial, 5000);
});
</script>

<template>
  <section class="testimonials-section px-5 py-20 lg:px-20 lg:py-28" id="depoimentos">
    <div class="mx-auto mb-9 max-w-4xl text-center">
      <p class="eyebrow">O que nossas clientes dizem</p>
      <h2 class="section-title">Prova social com espaço para fotos reais das clientes.</h2>
    </div>

    <div class="mx-auto grid max-w-6xl items-center gap-4 sm:grid-cols-[46px_1fr_46px]">
      <button class="testimonial-arrow hidden sm:grid" type="button" aria-label="Depoimento anterior" @click="prevTestimonial">&lt;</button>
      <article class="testimonial-card luxe-panel">
        <div class="testimonial-photo">
          <img :src="currentTestimonial.imageSrc" :alt="currentTestimonial.imageAlt" loading="lazy">
          <span>{{ currentTestimonial.procedure }}</span>
        </div>
        <div class="testimonial-content">
          <p class="testimonial-stars" aria-label="5 estrelas">*****</p>
          <blockquote>&ldquo;{{ currentTestimonial.text }}&rdquo;</blockquote>
          <cite>
            <strong>{{ currentTestimonial.author }}</strong>
            <span>{{ currentTestimonial.location }}</span>
          </cite>
        </div>
      </article>
      <button class="testimonial-arrow hidden sm:grid" type="button" aria-label="Próximo depoimento" @click="nextTestimonial">&gt;</button>
    </div>

    <div class="mx-auto mt-5 flex max-w-4xl justify-center gap-3" aria-label="Selecionar depoimento">
      <button
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.author"
        class="testimonial-thumb"
        :class="{ 'is-active': index === testimonialIndex }"
        type="button"
        :aria-label="`Ver depoimento de ${testimonial.author}`"
        @click="testimonialIndex = index"
      >
        <img :src="testimonial.imageSrc" :alt="testimonial.imageAlt" loading="lazy">
      </button>
    </div>

    <div class="mt-9 flex justify-center">
      <a class="btn-secondary" href="#contato">Quero resultados assim</a>
    </div>
  </section>
</template>
