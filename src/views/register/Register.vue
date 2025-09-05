<script setup lang="ts">
import { ref, computed } from "vue";
import {
  PhUser,
  PhLock,
  PhEyeClosed,
  PhEye,
  PhEnvelope,
  PhPhone,
  PhMapPin,
  PhCalendar,
  PhCaretRight,
} from "@phosphor-icons/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  birthDate: "",
  password: "",
});

const year = new Date().getFullYear();
const showPassword = ref(false);
const isLoading = ref(false);
const isValid = ref(false); 

const required = (v: string) => !!v || "Obrigatório";
const emailRule = (v: string) => /.+@.+\..+/.test(v) || "E-mail inválido";

const isFormComplete = computed(() => {
  return Object.values(form.value).every(
    (v) => v && v.toString().trim() !== ""
  );
});

const handleRequestAccess = async () => {
  if (!isFormComplete.value) return;
  isLoading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    router.push({ path: "/requested-account" });
  } catch (error) {
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
      <div class="w-full max-w-4xl">
        <div class="flex flex-col items-center mb-8">
          <h1 class="font-bold text-4xl text-center">Cadastrar conta</h1>
        </div>
        <VForm @submit.prevent="handleRequestAccess" v-model="isValid">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <VTextField
              v-model="form.fullName"
              label="Nome completo"
              type="text"
              variant="outlined"
              :rules="[required]"
            >
              <template #prepend-inner>
                <PhUser class="w-5 h-5 text-gray-500" />
              </template>
            </VTextField>

            <VTextField
              v-model="form.email"
              label="E-mail"
              type="email"
              variant="outlined"
              :rules="[required, emailRule]"
            >
              <template #prepend-inner>
                <PhEnvelope class="w-5 h-5 text-gray-500" />
              </template>
            </VTextField>

            <VTextField
              v-model="form.phone"
              label="Telefone"
              type="tel"
              variant="outlined"
              :rules="[required]"
            >
              <template #prepend-inner>
                <PhPhone class="w-5 h-5 text-gray-500" />
              </template>
            </VTextField>

            <VTextField
              v-model="form.address"
              label="Endereço"
              type="text"
              variant="outlined"
              :rules="[required]"
            >
              <template #prepend-inner>
                <PhMapPin class="w-5 h-5 text-gray-500" />
              </template>
            </VTextField>

            <VDateInput
              v-model="form.birthDate"
              label="Data de nascimento"
              variant="outlined"
              :rules="[required]"
              class="md:col-span-1"
            >
              <template #prepend-inner>
                <PhCalendar class="w-5 h-5 text-gray-500" />
              </template>
            </VDateInput>

            <VTextField
              v-model="form.password"
              label="Senha"
              :type="showPassword ? 'text' : 'password'"
              variant="outlined"
              :rules="[required]"
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
          </div>
        </VForm>
        <div class="w-full justify-center">
            <VBtn
              @click="handleRequestAccess"
              @keydown.enter="handleRequestAccess"
              type="submit"
              :loading="isLoading"
              color="primary"
              class="w-full rounded-lg font-medium hover:bg-primary transition"
              :disabled="!isFormComplete || isLoading"
              size="large"
            >
              Solicitar acesso
              <PhCaretRight size="22" />
            </VBtn>
        </div>
    </div>
</div>
</div>
</template>
