<script setup>
import { computed, onMounted, ref } from "vue";
import { categories, procedures } from "../data/siteData";

const procedureIndex = ref(0);
const dragStartX = ref(null);

const currentProcedure = computed(() => procedures[procedureIndex.value]);

function nextProcedure() {
  procedureIndex.value = (procedureIndex.value + 1) % procedures.length;
}

function prevProcedure() {
  procedureIndex.value = (procedureIndex.value - 1 + procedures.length) % procedures.length;
}

function setProcedure(index) {
  procedureIndex.value = index;
}

function getCarouselOffset(index) {
  const length = procedures.length;
  let offset = index - procedureIndex.value;

  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;

  return offset;
}

function procedureCardStyle(index) {
  const offset = getCarouselOffset(index);
  const abs = Math.abs(offset);
  const visible = abs <= 2;
  const x = offset * 34;
  const rotate = offset * -9;
  const scale = 1 - abs * 0.09;
  const y = abs * 16;

  return {
    transform: `translateX(${x}%) translateY(${y}px) translateZ(${-abs * 90}px) rotateY(${rotate}deg) scale(${scale})`,
    opacity: visible ? 1 - abs * 0.18 : 0,
    zIndex: 30 - abs,
    pointerEvents: visible ? "auto" : "none"
  };
}

function startProcedureDrag(event) {
  dragStartX.value = event.touches ? event.touches[0].clientX : event.clientX;
}

function endProcedureDrag(event) {
  if (dragStartX.value === null) return;

  const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
  const delta = endX - dragStartX.value;

  if (Math.abs(delta) > 44) {
    delta < 0 ? nextProcedure() : prevProcedure();
  }

  dragStartX.value = null;
}

function categoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label;
}

onMounted(() => {
  window.setInterval(nextProcedure, 2800);
});
</script>

<template>
  <section class="bg-gradient-to-b from-[#fbf7f2] to-[#f3ebe4] px-5 py-20 lg:px-20 lg:py-28" id="procedimentos">
    <div class="mx-auto mb-9 max-w-4xl text-center">
      <p class="eyebrow">Nossos procedimentos premium</p>
      <h2 class="section-title">Explore todos os tratamentos em uma experiencia imersiva.</h2>
      <p class="mx-auto mt-5 max-w-3xl text-[#6f6268]">Arraste para os lados ou use os controles. O procedimento em destaque avanca na tela para facilitar comparacao e decisao de agendamento.</p>
    </div>

    <div
      class="procedure-carousel mx-auto max-w-7xl"
      role="region"
      aria-label="Carrossel de procedimentos esteticos"
      @mousedown="startProcedureDrag"
      @mouseup="endProcedureDrag"
      @mouseleave="dragStartX = null"
      @touchstart.passive="startProcedureDrag"
      @touchend="endProcedureDrag"
    >
      <button class="carousel-control left-0 lg:left-6" type="button" aria-label="Procedimento anterior" @click="prevProcedure">&lt;</button>

      <div class="carousel-stage">
        <article
          v-for="(procedure, index) in procedures"
          :key="procedure.id"
          class="carousel-card luxe-card overflow-hidden"
          :class="{ 'is-active': index === procedureIndex }"
          :style="procedureCardStyle(index)"
          @click="setProcedure(index)"
        >
          <div class="procedure-media">
            <img :src="procedure.imageSrc" :alt="procedure.imageAlt" loading="lazy">
            <span>{{ procedure.result }}</span>
          </div>
          <div class="p-5">
            <p class="text-xs font-extrabold uppercase text-[#8f4657]">{{ categoryLabel(procedure.category) }}</p>
            <h3 class="mt-2 text-2xl font-extrabold text-plum">{{ procedure.name }}</h3>
            <p class="mt-1 text-[#6f6268]">{{ procedure.subtitle }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-md bg-[#f4eadc] px-3 py-1.5 text-xs font-extrabold text-[#5a3e22]">{{ procedure.price }}</span>
              <span class="rounded-md bg-[#f4eadc] px-3 py-1.5 text-xs font-extrabold text-[#5a3e22]">{{ procedure.duration }}</span>
            </div>
            <a class="mt-4 inline-flex font-extrabold text-[#8f4657]" :href="'#' + procedure.id">+ Detalhes</a>
          </div>
        </article>
      </div>

      <button class="carousel-control right-0 lg:right-6" type="button" aria-label="Proximo procedimento" @click="nextProcedure">&gt;</button>
    </div>

    <div class="mx-auto mt-6 grid max-w-3xl gap-3 text-center">
      <p class="text-sm font-extrabold uppercase text-[#8f4657]">{{ currentProcedure.name }}</p>
      <div class="flex justify-center gap-2" aria-label="Indicadores do carrossel">
        <button
          v-for="(procedure, index) in procedures"
          :key="procedure.id + '-dot'"
          class="carousel-dot"
          :class="{ 'is-active': index === procedureIndex }"
          type="button"
          :aria-label="`Ver ${procedure.name}`"
          @click="setProcedure(index)"
        ></button>
      </div>
    </div>

    <div class="mt-9 flex justify-center">
      <a class="btn-primary" href="#detalhes">Ver detalhes de todos os procedimentos</a>
    </div>
  </section>
</template>
