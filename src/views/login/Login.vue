<script setup lang="ts">
import { ref } from "vue";
import { PhUser, PhLock, PhEyeClosed, PhEye } from "@phosphor-icons/vue";
import { useRouter } from "vue-router";
const router = useRouter();
const form = ref({
  username: "",
  password: "",
});
const year = new Date().getFullYear();
const showPassword = ref(false);
const isLoading = ref(false);
const isValid = ref(false);

const handleLogin = async () => {
  isLoading.value = true;
    try {
    await new Promise(() => setTimeout(() => router.push({path: "/"}), 1200));
  } catch (error: any) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

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
      <div class="w-full max-w-md">
        <div class="flex flex-col items-center mb-8">
          <h1 class="font-bold text-4xl">Acessar sua conta</h1>
          <p class="text-gray-400 text-center mt-2">
            O acesso é restrito a servidores autorizados.
          </p>
        </div>

        <VForm @submit.prevent="handleLogin" v-model="isValid">
          <VTextField
            v-model="form.username"
            label="Nome do usuário"
            type="text"
            variant="outlined"
            class="mb-4"
          >
            <template #prepend-inner>
              <PhUser class="w-5 h-5 text-gray-500" />
            </template>
          </VTextField>

          <VTextField
            v-model="form.password"
            label="Senha"
            :type="showPassword ? 'text' : 'password'"
            variant="outlined"
            class="mb-6"
          >
            <template #prepend-inner>
              <PhLock class="w-5 h-5 text-gray-500" />
            </template>
            <template #append-inner>
              <VBtn
                @click="showPassword = !showPassword"
                icon
                variant="text"
                size="small"
                class="text-gray-500"
              >
                <PhEyeClosed v-if="!showPassword" class="w-5 h-5" />
                <PhEye v-else class="w-5 h-5" />
              </VBtn>
            </template>
          </VTextField>

          <VBtn
            @click="handleLogin"
            @keydown.enter="handleLogin"
            :loading="isLoading"
            type="submit"
            color="primary"
            class="w-full rounded-lg font-medium hover:bg-primary transition"
            :disabled="(!form.password || !form.username) || isLoading"
            size="large"
          >
          Entrar
          </VBtn>
          <span class="flex flex-col w-full align-center mt-2 gap-2">
              <p class="text-sm">Esqueceu sua senha? <router-link to="/" class="text-blue">Clique aqui</router-link></p>
              <p class="text-sm">Não tem uma conta? <router-link to="/" class="text-blue">Crie uma</router-link></p>
          </span>
        </VForm>
      </div>
    </div>
  </div>
</template>
