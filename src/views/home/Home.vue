<script setup>
import { ref } from "vue";

const message = ref("Você clicou no botão!");

function handleClick() {
  alert(message.value);
}
</script>
<template>
  <div class="flex flex-col items-center mt-16">
    <h1 class="text-3xl font-bold text-green-500">Bem-vindo à Home!</h1>
    <p class="mt-4 text-gray-700">
      Esta é a página inicial do seu projeto Vue 3.
    </p>
    <button
      @click="handleClick"
      class="mt-6 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      Clique aqui
    </button>
  </div>
</template>
