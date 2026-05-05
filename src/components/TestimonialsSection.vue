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
  <section class="bg-gradient-to-b from-[#fbf7f2] to-[#f3ebe4] px-5 py-20 lg:px-20 lg:py-28" id="depoimentos">
    <div class="mx-auto mb-9 max-w-4xl text-center">
      <p class="eyebrow">O que nossas clientes dizem</p>
      <h2 class="section-title">Prova social com espaco para fotos reais das clientes.</h2>
    </div>

    <div class="mx-auto grid max-w-5xl items-center gap-4 sm:grid-cols-[46px_1fr_46px]">
      <button class="hidden h-12 w-12 rounded-lg border border-[#e8ddd7] bg-ivory font-black text-plum sm:block" type="button" aria-label="Depoimento anterior" @click="prevTestimonial">&lt;</button>
      <article class="luxe-panel grid min-h-[220px] gap-5 p-6 sm:grid-cols-[110px_1fr]">
        <div class="client-photo" aria-hidden="true"></div>
        <div>
          <p class="font-black text-[#8f6732]" aria-label="5 estrelas">*****</p>
          <blockquote class="mt-2 text-xl font-bold">&ldquo;{{ currentTestimonial.text }}&rdquo;</blockquote>
          <cite class="mt-4 block not-italic font-extrabold text-[#6f6268]">{{ currentTestimonial.author }}</cite>
        </div>
      </article>
      <button class="hidden h-12 w-12 rounded-lg border border-[#e8ddd7] bg-ivory font-black text-plum sm:block" type="button" aria-label="Proximo depoimento" @click="nextTestimonial">&gt;</button>
    </div>

    <div class="mt-9 flex justify-center">
      <a class="btn-secondary" href="#contato">Quero resultados assim</a>
    </div>
  </section>
</template>
