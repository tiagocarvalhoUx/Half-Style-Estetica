<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import {
  emeraldTreatmentAdvanced,
  emeraldTreatmentBody,
  emeraldTreatmentFacial,
  emeraldTreatmentHomecare
} from "../assets";

const treatmentCards = [
  {
    title: "Faciais",
    text: "Pele saudável, luminosa e revitalizada.",
    image: emeraldTreatmentFacial,
    alt: "Tratamento facial relaxante com pele luminosa.",
    href: "#limpeza-facial"
  },
  {
    title: "Corporais",
    text: "Modelagem, firmeza e bem-estar.",
    image: emeraldTreatmentBody,
    alt: "Tratamento corporal estético.",
    href: "#laser"
  },
  {
    title: "Avançados",
    text: "Tecnologia e inovação para resultados visíveis.",
    image: emeraldTreatmentAdvanced,
    alt: "Tecnologia estética aplicada ao rosto.",
    href: "#fototerapia"
  },
  {
    title: "Home Care",
    text: "Cuidados diários que prolongam resultados.",
    image: emeraldTreatmentHomecare,
    alt: "Produtos de cuidado facial premium.",
    href: "#mascara"
  }
];

const activeIndex = ref(0);
const dragStartX = ref(null);
let autoplayId;

const activeTreatment = computed(() => treatmentCards[activeIndex.value]);

function nextTreatment() {
  activeIndex.value = (activeIndex.value + 1) % treatmentCards.length;
}

function prevTreatment() {
  activeIndex.value = (activeIndex.value - 1 + treatmentCards.length) % treatmentCards.length;
}

function setTreatment(index) {
  activeIndex.value = index;
}

function getOffset(index) {
  const length = treatmentCards.length;
  let offset = index - activeIndex.value;

  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;

  return offset;
}

function cardStyle(index) {
  const offset = getOffset(index);
  const abs = Math.abs(offset);
  const visible = abs <= 2;
  const x = offset * 42;
  const rotate = offset * -11;
  const scale = 1 - abs * 0.08;
  const y = abs * 20;

  return {
    transform: `translateX(${x}%) translateY(${y}px) translateZ(${-abs * 120}px) rotateY(${rotate}deg) scale(${scale})`,
    opacity: visible ? 1 - abs * 0.2 : 0,
    zIndex: 40 - abs,
    pointerEvents: visible ? "auto" : "none"
  };
}

function startDrag(event) {
  dragStartX.value = event.touches ? event.touches[0].clientX : event.clientX;
}

function endDrag(event) {
  if (dragStartX.value === null) return;

  const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
  const delta = endX - dragStartX.value;

  if (Math.abs(delta) > 42) {
    delta < 0 ? nextTreatment() : prevTreatment();
  }

  dragStartX.value = null;
}

onMounted(() => {
  autoplayId = window.setInterval(nextTreatment, 3600);
});

onUnmounted(() => {
  window.clearInterval(autoplayId);
});
</script>

<template>
  <section class="treatments-panel" id="procedimentos">
    <div class="treatments-inner">
      <div class="treatments-copy">
        <p class="section-kicker">Nossos tratamentos</p>
        <h2>Cuidado que transforma.</h2>
      </div>

      <div class="treatment-grid">
        <article v-for="card in treatmentCards" :key="card.title" class="treatment-card">
          <img :src="card.image" :alt="card.alt" loading="lazy">
          <div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
            <a :href="card.href">
              Saiba mais
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>

      <div
        class="treatment-carousel-3d"
        role="region"
        aria-label="Carrossel de tratamentos"
        @mousedown="startDrag"
        @mouseup="endDrag"
        @mouseleave="dragStartX = null"
        @touchstart.passive="startDrag"
        @touchend="endDrag"
      >
        <button class="treatment-control treatment-control-left" type="button" aria-label="Tratamento anterior" @click="prevTreatment">‹</button>

        <div class="treatment-stage">
          <article
            v-for="(card, index) in treatmentCards"
            :key="card.title"
            class="treatment-card treatment-card-3d"
            :class="{ 'is-active': index === activeIndex }"
            :style="cardStyle(index)"
            @click="setTreatment(index)"
          >
            <img :src="card.image" :alt="card.alt" loading="lazy">
            <div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
              <a :href="card.href">
                Saiba mais
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>

        <button class="treatment-control treatment-control-right" type="button" aria-label="Próximo tratamento" @click="nextTreatment">›</button>
      </div>

      <div class="treatment-carousel-meta" aria-label="Indicadores do carrossel">
        <p>{{ activeTreatment.title }}</p>
        <div>
          <button
            v-for="(card, index) in treatmentCards"
            :key="card.title + '-dot'"
            class="carousel-dot"
            :class="{ 'is-active': index === activeIndex }"
            type="button"
            :aria-label="`Ver ${card.title}`"
            @click="setTreatment(index)"
          ></button>
        </div>
      </div>

      <a class="view-all-link" href="#detalhes">
        Ver todos os tratamentos
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
</template>
