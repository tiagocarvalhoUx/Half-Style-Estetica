<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import logoHalfLife from "./image/logo/logo-Halfe-Life.png";
import halfStyleFinal from "./image/half_style_final.png";
import microbladingImage from "./image/01_microblading_400x300.png";
import preenchimentoImage from "./image/02_preenchimento_400x300.png";
import limpezaFacialImage from "./image/03_limpeza_facial_400x300.png";
import dermoabrasaoImage from "./image/04_dermoabrasao_400x300.png";
import fototerapiaImage from "./image/05_fototerapia_400x300.png";
import vaporImage from "./image/06_limpeza_a_vapor_400x300.png";
import massagemImage from "./image/07_massagem_facial_400x300.png";
import mascaraImage from "./image/08_mascara_premium_400x300.png";
import laserImage from "./image/09_depilacao_laser_400x300.png";

const procedures = [
  {
    id: "microblading",
    category: "invasivos",
    name: "Microblading",
    subtitle: "Design de sobrancelhas",
    price: "R$ 300-500",
    result: "2-4 semanas",
    duration: "2h",
    image: "Antes/depois frontal com delineamento perfeito.",
    imageSrc: microbladingImage,
    imageAlt: "Resultado visual de microblading para design de sobrancelhas.",
    detail: "Pigmentacao fio a fio para desenho mais definido e natural das sobrancelhas, apos avaliacao do formato do rosto e tom de pele."
  },
  {
    id: "preenchimento",
    category: "invasivos",
    name: "Preenchimento",
    subtitle: "Acido hialuronico",
    price: "R$ 600-1.200",
    result: "Imediato",
    duration: "30-45min",
    image: "Antes/depois frontal e perfil com proporcao natural.",
    imageSrc: preenchimentoImage,
    imageAlt: "Resultado visual de preenchimento com acido hialuronico.",
    detail: "Procedimento para volume e definicao com acido hialuronico, sempre conforme avaliacao individual e indicacao profissional."
  },
  {
    id: "laser",
    category: "invasivos",
    name: "Depilacao laser",
    subtitle: "Resultado progressivo",
    price: "R$ 200-400",
    result: "3-4 semanas",
    duration: "60min",
    image: "Antes/depois da area corporal, pele uniforme e sem pelos.",
    imageSrc: laserImage,
    imageAlt: "Resultado visual de depilacao a laser.",
    detail: "Plano em sessoes para reducao progressiva de pelos, com intervalos medios de 4 a 6 semanas e orientacao de cuidados."
  },
  {
    id: "limpeza-facial",
    category: "nao-invasivos",
    name: "Limpeza facial",
    subtitle: "Profissional",
    price: "R$ 150-250",
    result: "Imediato",
    duration: "60min",
    image: "Antes/depois do rosto com pele limpa e luminosa.",
    imageSrc: limpezaFacialImage,
    imageAlt: "Resultado visual de limpeza facial profissional.",
    detail: "Higienizacao, extracao quando indicada e finalizacao adequada ao tipo de pele para sensacao de frescor e luminosidade."
  },
  {
    id: "dermoabrasao",
    category: "nao-invasivos",
    name: "Dermoabrasao",
    subtitle: "Renovacao de pele",
    price: "R$ 300-500",
    result: "1-2 semanas",
    duration: "90min",
    image: "Antes/depois da area tratada com textura melhorada.",
    imageSrc: dermoabrasaoImage,
    imageAlt: "Resultado visual de dermoabrasao e renovacao de pele.",
    detail: "Tecnica de renovacao superficial para melhorar textura, aparencia de manchas e sinais leves, respeitando a sensibilidade da pele."
  },
  {
    id: "fototerapia",
    category: "nao-invasivos",
    name: "Fototerapia LED/IPL",
    subtitle: "Rejuvenescimento",
    price: "R$ 250-450",
    result: "2-4 semanas",
    duration: "45min",
    image: "Antes/depois da face completa com uniformidade de tom.",
    imageSrc: fototerapiaImage,
    imageAlt: "Resultado visual de fototerapia LED/IPL.",
    detail: "Protocolo com luz para apoio ao vico, uniformidade e melhora gradual da aparencia da pele, conforme indicacao."
  },
  {
    id: "vapor",
    category: "nao-invasivos",
    name: "Limpeza a vapor",
    subtitle: "Profunda",
    price: "R$ 120-180",
    result: "Imediato",
    duration: "30min",
    image: "Detalhe de poros e pele com aspecto fresco.",
    imageSrc: vaporImage,
    imageAlt: "Resultado visual de limpeza a vapor profunda.",
    detail: "Abertura de poros com vapor e limpeza profunda para preparar a pele e favorecer a remocao de impurezas."
  },
  {
    id: "massagem",
    category: "wellness",
    name: "Massagem facial",
    subtitle: "Relaxamento",
    price: "R$ 100-150",
    result: "Imediato",
    duration: "45min",
    image: "Durante o atendimento, expressao relaxada e tecnica visivel.",
    imageSrc: massagemImage,
    imageAlt: "Atendimento de massagem facial relaxante.",
    detail: "Massagem para relaxamento, circulacao e sensacao de revitalizacao facial, com movimentos adequados ao conforto da cliente."
  },
  {
    id: "mascara",
    category: "wellness",
    name: "Mascara premium",
    subtitle: "Hidratacao intensa",
    price: "R$ 80-120",
    result: "Imediato",
    duration: "20min",
    image: "Antes/depois com pele hidratada, macia e luminosa.",
    imageSrc: mascaraImage,
    imageAlt: "Resultado visual de mascara premium hidratante.",
    detail: "Mascara de hidratacao intensa para suporte a maciez e luminosidade da pele, indicada como complemento de cuidados faciais."
  }
];

const testimonials = [
  {
    text: "O microblading ficou delicado e muito natural. Gostei da explicacao antes do procedimento e do cuidado no acabamento.",
    author: "Marina S. | SP"
  },
  {
    text: "Fiz limpeza facial e sai com a pele muito mais fresca. Atendimento organizado, ambiente confortavel e orientacoes claras.",
    author: "Juliana P. | RJ"
  },
  {
    text: "A depilacao laser entrou na minha rotina com acompanhamento certinho. O plano de sessoes foi explicado sem promessa exagerada.",
    author: "Beatriz M. | MG"
  }
];

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Preços", href: "#preços" },
  { label: "Contato", href: "#contato" }
];

const categories = [
  { id: "invasivos", label: "Invasivos" },
  { id: "nao-invasivos", label: "Nao invasivos" },
  { id: "wellness", label: "Wellness" }
];

const trustItems = ["Avaliacao individual", "Protocolos seguros", "Resultados realistas"];
const metrics = [
  { value: "9", label: "procedimentos premium" },
  { value: "4+", label: "canais de contato" },
  { value: "100%", label: "avaliacao antes do plano" }
];
const offers = [
  {
    title: "Formas de pagamento",
    text: "A vista em dinheiro ou PIX com 10% de desconto, debito sem juros, credito em ate 3x sem juros e parcelamento em ate 6x mediante analise."
  },
  {
    title: "Pacotes especiais",
    text: "Pacote Premium com 15% off, Pacote Noiva com 20% off, Pacote Corporal com 12% off e primeira consulta gratuita."
  },
  {
    title: "Promocoes vigentes",
    text: "Novas clientes com 20% no primeiro procedimento, indicacao com R$ 50 para voce e amiga, aniversario com 15% e Combo Facial por R$ 380."
  }
];

const activeCategory = ref("invasivos");
const openDetails = ref(["microblading"]);
const testimonialIndex = ref(0);
const procedureIndex = ref(0);
const mobileOpen = ref(false);
const dragStartX = ref(null);
const formMessage = ref("Sem envio de dados neste prototipo. Integre o formulario ao backend antes do deploy.");
const form = reactive({
  name: "",
  phone: "",
  procedure: "",
  time: "",
  privacy: false
});

const filteredProcedures = computed(() => procedures.filter((procedure) => procedure.category === activeCategory.value));
const currentTestimonial = computed(() => testimonials[testimonialIndex.value]);
const currentProcedure = computed(() => procedures[procedureIndex.value]);

function toggleDetail(id) {
  if (openDetails.value.includes(id)) {
    openDetails.value = openDetails.value.filter((item) => item !== id);
    return;
  }
  openDetails.value = [...openDetails.value, id];
}

function nextTestimonial() {
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length;
}

function prevTestimonial() {
  testimonialIndex.value = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length;
}

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

  if (offset > length / 2) {
    offset -= length;
  }

  if (offset < -length / 2) {
    offset += length;
  }

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

function submitForm() {
  formMessage.value = "Solicitacao registrada neste prototipo. Integre o formulario ao backend para envio real.";
}

onMounted(() => {
  window.setInterval(nextTestimonial, 5000);
  window.setInterval(nextProcedure, 4200);
});
</script>

<template>
  <div>
    <header class="sticky top-0 z-30 flex min-h-[104px] items-center gap-6 border-b border-gold/20 bg-ivory/92 px-4 py-3 backdrop-blur-xl lg:px-14">
      <a class="brand-lockup" href="#top" aria-label="Half Style Estetica">
        <span class="brand-mark">
          <img :src="logoHalfLife" alt="Half Style Estetica">
        </span>
        <span class="brand-copy">
          <strong>Half Style</strong>
          <small>Estetica Avancada</small>
        </span>
      </a>

      <nav class="hidden flex-1 justify-center gap-7 font-semibold text-[#5b5056] lg:flex" aria-label="Navegacao principal">
        <a class="transition hover:text-[#8f4657]" href="#sobre">Sobre</a>
        <a class="transition hover:text-[#8f4657]" href="#procedimentos">Procedimentos</a>
        <a class="transition hover:text-[#8f4657]" href="#precos">Preços</a>
        <a class="transition hover:text-[#8f4657]" href="#contato">Contato</a>
      </nav>

      <a class="hidden rounded-lg border border-gold/40 bg-plum px-5 py-3 text-sm font-extrabold text-[#fff9ef] transition hover:bg-[#21111d] lg:inline-flex" href="https://wa.me/5500000000000?text=Ola,%20quero%20agendar%20minha%20consulta%20gratis" target="_blank" rel="noreferrer">Agendar</a>

      <button class="ml-auto grid h-11 w-11 place-items-center rounded-lg border border-[#e8ddd7] bg-ivory lg:hidden" type="button" aria-label="Abrir menu" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
        <span class="space-y-1.5">
          <span class="block h-0.5 w-5 bg-[#251f24]"></span>
          <span class="block h-0.5 w-5 bg-[#251f24]"></span>
          <span class="block h-0.5 w-5 bg-[#251f24]"></span>
        </span>
      </button>
    </header>

    <nav v-show="mobileOpen" class="fixed left-4 right-4 top-[104px] z-20 grid gap-2 rounded-lg border border-[#e8ddd7] bg-ivory p-4 font-bold shadow-luxe lg:hidden" aria-label="Navegacao mobile">
      <a v-for="item in navItems" :key="item.href" class="rounded-md px-3 py-2 hover:bg-porcelain" :href="item.href" @click="mobileOpen = false">{{ item.label }}</a>
    </nav>

    <main id="top">
      <section class="hero-bg grid min-h-[calc(100vh-72px)] items-center gap-8 px-5 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-20 lg:py-16">
        <div class="hero-media hero-visual order-first min-h-[340px] overflow-hidden rounded-lg border border-gold/25 shadow-luxe lg:order-last lg:min-h-[min(68vh,620px)]">
          <img class="hero-brand-image" :src="halfStyleFinal" alt="Identidade visual premium da Half Style Estetica">
          <div class="hero-image-shade"></div>
        </div>

        <div class="max-w-3xl">
          <h1 class="font-display text-[clamp(3rem,8vw,7rem)] leading-[.92] text-plum">Half Style Estetica</h1>
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
                <p class="text-xs font-extrabold uppercase text-[#8f4657]">{{ categories.find((category) => category.id === procedure.category)?.label }}</p>
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

      <section class="bg-gradient-to-b from-[#f7f1eb] to-[#efe4d9] px-5 py-20 lg:px-20 lg:py-28" id="precos">
        <div class="mx-auto mb-9 max-w-4xl text-center">
          <p class="eyebrow">Tabela de precos 2026</p>
          <h2 class="section-title">Valores transparentes para orientar seu planejamento.</h2>
        </div>

        <div class="mx-auto max-w-5xl overflow-x-auto rounded-lg border border-[#e8ddd7] bg-ivory">
          <table class="w-full min-w-[700px] border-collapse">
            <thead>
              <tr class="bg-[#f1e4d1] text-left text-xs uppercase text-plum">
                <th class="border-b border-[#e8ddd7] p-4">Procedimento</th>
                <th class="border-b border-[#e8ddd7] p-4">Investimento</th>
                <th class="border-b border-[#e8ddd7] p-4">Duracao</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="procedure in procedures" :key="procedure.id" class="border-b border-[#e8ddd7] last:border-0">
                <td class="p-4 font-bold">{{ procedure.name }} <small class="font-semibold text-[#6f6268]">{{ procedure.subtitle }}</small></td>
                <td class="p-4">{{ procedure.price }}</td>
                <td class="p-4">{{ procedure.duration }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mx-auto mt-5 grid max-w-5xl gap-4 lg:grid-cols-3">
          <article v-for="offer in offers" :key="offer.title" class="luxe-panel p-5">
            <h3 class="text-lg font-extrabold text-plum">{{ offer.title }}</h3>
            <p class="mt-2 text-[#6f6268]">{{ offer.text }}</p>
          </article>
        </div>

        <div class="mt-9 flex justify-center">
          <a class="btn-primary" href="#contato">Consultar valor exato</a>
        </div>
      </section>

      <section class="grid gap-9 bg-ivory px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-20 lg:py-28" id="contato">
        <div>
          <p class="eyebrow">Fale conosco</p>
          <h2 class="section-title">Agende sua avaliacao e receba uma recomendacao personalizada.</h2>
          <p class="mt-5 max-w-3xl text-[#6f6268]">Resultados podem variar por pessoa. Consulte um profissional antes de iniciar qualquer procedimento estetico.</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a class="rounded-lg border border-[#e8ddd7] bg-[#f8efe7] px-4 py-3 font-extrabold" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="rounded-lg border border-[#e8ddd7] bg-[#f8efe7] px-4 py-3 font-extrabold" href="tel:+5500000000000">Ligar</a>
            <a class="rounded-lg border border-[#e8ddd7] bg-[#f8efe7] px-4 py-3 font-extrabold" href="mailto:contato@halfstyle.com.br">Email</a>
          </div>
        </div>

        <form class="luxe-panel grid gap-4 p-6" action="#" method="post" @submit.prevent="submitForm">
          <label class="grid gap-2 text-sm font-extrabold text-[#4f4249]">
            Nome completo
            <input v-model="form.name" class="form-field" name="nome" type="text" autocomplete="name" required>
          </label>
          <label class="grid gap-2 text-sm font-extrabold text-[#4f4249]">
            WhatsApp
            <input v-model="form.phone" class="form-field" name="whatsapp" type="tel" autocomplete="tel" required>
          </label>
          <label class="grid gap-2 text-sm font-extrabold text-[#4f4249]">
            Procedimento de interesse
            <select v-model="form.procedure" class="form-field" name="procedimento" required>
              <option value="">Selecione</option>
              <option v-for="procedure in procedures" :key="procedure.id" :value="procedure.id">{{ procedure.name }}</option>
            </select>
          </label>
          <label class="grid gap-2 text-sm font-extrabold text-[#4f4249]">
            Melhor horario
            <input v-model="form.time" class="form-field" name="horario" type="text" placeholder="Ex.: manha, tarde ou sabado">
          </label>
          <label class="grid grid-cols-[20px_1fr] items-start gap-2 font-semibold">
            <input v-model="form.privacy" class="mt-1 min-h-5" type="checkbox" required>
            <span>Li e aceito a politica de privacidade e autorizo contato para agendamento.</span>
          </label>
          <button class="btn-primary" type="submit">Agendar agora</button>
          <p class="text-sm text-[#6f6268]">{{ formMessage }}</p>
        </form>
      </section>
    </main>

    <footer class="footer px-5 py-12 lg:px-20 lg:py-16">
      <div class="footer-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr_0.7fr]">
        <div class="footer-brand">
          <a class="footer-logo" href="#top" aria-label="Half Style Estetica">
            <img :src="logoHalfLife" alt="Half Style Estetica">
          </a>
          <div>
            <h2>Half Style Estetica</h2>
            <p>Atendimento estetico premium com avaliacao profissional, protocolos seguros e orientacao clara antes de cada procedimento.</p>
          </div>
        </div>

        <div class="footer-cta">
          <p>Pronta para iniciar seu plano de cuidado?</p>
          <a class="footer-primary" href="#contato">Agendar avaliacao</a>
          <div class="footer-contact">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="tel:+5500000000000">Telefone</a>
            <a href="mailto:contato@halfstyle.com.br">Email</a>
          </div>
        </div>

        <nav class="footer-nav" aria-label="Links do rodape">
          <strong>Navegacao</strong>
          <a href="#procedimentos">Procedimentos</a>
          <a href="#precos">Precos</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Privacidade</a>
          <a href="#termos">Termos</a>
        </nav>
      </div>

      <div class="footer-bottom mx-auto mt-10 grid max-w-7xl gap-3 border-t border-white/10 pt-6 lg:grid-cols-[1fr_auto]">
        <p id="termos">Resultados podem variar por pessoa. Conteudo informativo, nao substitui avaliacao individual.</p>
      </div>
    </footer>
  </div>
</template>
