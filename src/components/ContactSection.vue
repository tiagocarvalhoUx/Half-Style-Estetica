<script setup>
import { reactive, ref } from "vue";
import { procedures } from "../data/siteData";

const formMessage = ref("Sem envio de dados neste prototipo. Integre o formulario ao backend antes do deploy.");
const form = reactive({
  name: "",
  phone: "",
  procedure: "",
  time: "",
  privacy: false
});

function submitForm() {
  formMessage.value = "Solicitacao registrada neste prototipo. Integre o formulario ao backend para envio real.";
}
</script>

<template>
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
</template>
