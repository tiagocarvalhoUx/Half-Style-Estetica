<script setup>
import { offers, procedures } from "../data/siteData";
</script>

<template>
  <section class="pricing-section px-5 py-20 lg:px-20 lg:py-28" id="precos">
    <div class="mx-auto mb-9 max-w-4xl text-center">
      <p class="eyebrow">Tabela de preços 2026</p>
      <h2 class="section-title">Valores transparentes para orientar seu planejamento.</h2>
    </div>

    <div class="pricing-table mx-auto max-w-5xl overflow-x-auto">
      <table class="w-full min-w-[700px] border-collapse">
        <thead>
          <tr>
            <th>Procedimento</th>
            <th>Investimento</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="procedure in procedures" :key="procedure.id">
            <td>{{ procedure.name }} <small>{{ procedure.subtitle }}</small></td>
            <td>{{ procedure.price }}</td>
            <td>{{ procedure.duration }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mx-auto mt-5 grid max-w-5xl gap-4 lg:grid-cols-3">
      <article v-for="offer in offers" :key="offer.title" class="luxe-panel p-5">
        <h3 class="text-lg font-extrabold">{{ offer.title }}</h3>
        <p class="mt-2">{{ offer.text }}</p>
      </article>
    </div>

    <div class="mt-9 flex justify-center">
      <a class="btn-primary" href="#contato">Consultar valor exato</a>
    </div>
  </section>
</template>
