<script setup>
import { ref } from "vue";
import { logoHalfLife } from "../assets";

const mobileOpen = ref(false);

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Tratamentos", href: "#procedimentos" },
  { label: "Produtos", href: "#detalhes" },
  { label: "Blog", href: "#depoimentos" },
  { label: "Contato", href: "#contato" }
];
</script>

<template>
  <header class="site-header">
    <a class="brand-lockup emerald-brand" href="#top" aria-label="Half Style Estética">
      <span class="emerald-brand-seal" aria-hidden="true">
        <img :src="logoHalfLife" alt="">
      </span>
      <span class="emerald-brand-copy">
        <strong>Half Style</strong>
        <small>Estética</small>
      </span>
      <span class="emerald-brand-underline" aria-hidden="true"></span>
    </a>

    <nav class="desktop-nav" aria-label="Navegação principal">
      <a v-for="(item, index) in navItems" :key="item.href" :class="{ active: index === 0 }" :href="item.href">
        {{ item.label }}
      </a>
    </nav>

    <a class="header-cta" href="https://wa.me/5500000000000?text=Ol%C3%A1,%20quero%20agendar%20minha%20consulta%20gr%C3%A1tis" target="_blank" rel="noreferrer">
      Agendar agora
      <span aria-hidden="true">→</span>
    </a>

    <button class="mobile-menu-button" type="button" aria-label="Abrir menu" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
      <span class="space-y-1.5">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  </header>

  <nav v-show="mobileOpen" class="mobile-nav" aria-label="Navegação mobile">
    <a v-for="item in navItems" :key="item.href" :href="item.href" @click="mobileOpen = false">
      {{ item.label }}
    </a>
  </nav>
</template>
