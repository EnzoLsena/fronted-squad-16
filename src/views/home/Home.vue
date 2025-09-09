<script setup>
import { ref } from "vue";

const message = ref("Você clicou no botão!");

function handleClick() {
  alert(message.value);
}
</script>
<template>
  <div class="flex flex-col items-center mt-16">
    
  </div>
</template>
