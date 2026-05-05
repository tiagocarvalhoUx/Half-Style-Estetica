<script setup>
import { offers, procedures } from "../data/siteData";
</script>

<template>
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
</template>
