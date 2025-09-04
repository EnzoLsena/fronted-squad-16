<script setup lang="ts">
const year = new Date().getFullYear();
import { PhCaretRight } from '@phosphor-icons/vue';
</script>
<template>
  <div class="min-h-screen bg-white flex w-[100%]">
    <div
      class="flex flex-col h-auto justify-center p-8 w-[34%] bg-[linear-gradient(180deg,var(--color-primary)_0%,var(--color-secondary)_23.44%,var(--color-terciary)_100%)]"
    >
      <div class="w-full flex justify-center h-[97%] align-center">
        <img
          src="/src/assets/images/logo.svg"
          alt="Login illustration"
          class="w-[70%] h-auto"
        />
      </div>
      <div class="flex w-full justify-center h-[3%] align-bottom">
        <p class="text-gray-400 text-center mt-2 text-md">
          Dashboard @ Central de Custos - {{ year }}
        </p>
      </div>
    </div>
    <div
      class="flex-1 flex items-center justify-center px-8 lg:px-16 bg-white w-[66%]"
    >
      <div class="w-full max-w-xl">
        <div class="flex flex-col items-center mb-8">
          <h1 class="font-bold text-4xl">Sua solicitação foi enviada</h1>
          <p class="text-gray-400 text-center mt-2">
            Caso seja aprovada, você receberá as instruções de login via e-mail.
          </p>
        </div>
        <VBtn
          to="/login"
          type="submit"
          color="primary"
          class="w-full rounded-lg font-medium hover:bg-primary transition"
          size="large"
        >
        Voltar ao ínicio
        <PhCaretRight size="22" />
        </VBtn>
      </div>
    </div>
  </div>
</template>
