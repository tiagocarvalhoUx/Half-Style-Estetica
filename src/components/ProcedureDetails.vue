<script setup>
import { ref } from "vue";
import { procedures } from "../data/siteData";

const openDetails = ref(["microblading"]);

function toggleDetail(id) {
  if (openDetails.value.includes(id)) {
    openDetails.value = openDetails.value.filter((item) => item !== id);
    return;
  }
  openDetails.value = [...openDetails.value, id];
}
</script>

<template>
  <section class="bg-ivory px-5 py-20 lg:px-20 lg:py-28" id="detalhes">
    <div class="mx-auto mb-9 max-w-4xl text-center">
      <p class="eyebrow">Procedimentos detalhados</p>
      <h2 class="section-title">Informacoes essenciais para decidir com seguranca.</h2>
    </div>

    <div class="mx-auto grid max-w-5xl gap-3">
      <article v-for="procedure in procedures" :id="procedure.id" :key="procedure.id" class="luxe-panel overflow-hidden">
        <button class="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-[#251f24]" type="button" :aria-expanded="openDetails.includes(procedure.id)" @click="toggleDetail(procedure.id)">
          <span>{{ procedure.name }} <small class="text-[#6f6268]">{{ procedure.subtitle }}</small></span>
          <span aria-hidden="true">{{ openDetails.includes(procedure.id) ? "-" : "+" }}</span>
        </button>
        <div v-show="openDetails.includes(procedure.id)" class="grid gap-5 px-5 pb-6 text-[#6f6268] md:grid-cols-[260px_1fr]">
          <img class="detail-image" :src="procedure.imageSrc" :alt="procedure.imageAlt" loading="lazy">
          <dl class="grid gap-2 sm:grid-cols-[150px_1fr]">
            <dt class="font-extrabold text-[#251f24]">Investimento</dt><dd>{{ procedure.price }}</dd>
            <dt class="font-extrabold text-[#251f24]">Resultado</dt><dd>{{ procedure.result }}. Resultados podem variar por pessoa.</dd>
            <dt class="font-extrabold text-[#251f24]">Duracao</dt><dd>{{ procedure.duration }}</dd>
            <dt class="font-extrabold text-[#251f24]">Imagem</dt><dd>{{ procedure.image }}</dd>
            <dt class="font-extrabold text-[#251f24]">Resumo</dt><dd>{{ procedure.detail }}</dd>
          </dl>
        </div>
      </article>
    </div>
  </section>
</template>
