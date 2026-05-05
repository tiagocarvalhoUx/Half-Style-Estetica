<script setup>
import { logoHalfLife } from "../assets";
</script>

<template>
  <footer class="footer px-5 py-12 lg:px-20 lg:py-16">
    <div class="footer-inner mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr_0.7fr]">
      <div class="footer-brand">
        <a class="footer-logo" href="#top" aria-label="Half Style Estética">
          <img :src="logoHalfLife" alt="Half Style Estética">
        </a>
        <div>
          <h2 class="brand-title footer-title">Half Style Estética</h2>
          <p>Atendimento estético premium com avaliação profissional, protocolos seguros e orientação clara antes de cada procedimento.</p>
        </div>
      </div>

      <div class="footer-cta">
        <p>Pronta para iniciar seu plano de cuidado?</p>
        <a class="footer-primary" href="#contato">Agendar avaliação</a>
        <div class="footer-contact">
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="tel:+5500000000000">Telefone</a>
          <a href="mailto:contato@halfstyle.com.br">Email</a>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Links do rodapé">
        <strong>Navegação</strong>
        <a href="#procedimentos">Procedimentos</a>
        <a href="#precos">Preços</a>
        <a href="#contato">Contato</a>
        <a href="#privacidade">Privacidade</a>
        <a href="#termos">Termos</a>
      </nav>
    </div>

    <div class="footer-bottom mx-auto mt-10 grid max-w-7xl gap-3 border-t border-white/10 pt-6 lg:grid-cols-[1fr_auto]">
      <p id="termos">Resultados podem variar por pessoa. Conteúdo informativo, não substitui avaliação individual.</p>
    </div>
  </footer>
</template>
