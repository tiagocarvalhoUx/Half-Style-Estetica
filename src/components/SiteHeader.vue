<script setup>
import { ref } from "vue";
import { logoHalfLife } from "../assets";
import { navItems } from "../data/siteData";

const mobileOpen = ref(false);
</script>

<template>
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
      <a v-for="item in navItems" :key="item.href" class="transition hover:text-[#8f4657]" :href="item.href">
        {{ item.label }}
      </a>
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
    <a v-for="item in navItems" :key="item.href" class="rounded-md px-3 py-2 hover:bg-porcelain" :href="item.href" @click="mobileOpen = false">
      {{ item.label }}
    </a>
  </nav>
</template>
