<template>
  <div>
    <v-card class="mb-5" elevation="1">
      <v-card-title class="text-h5">Dashboard</v-card-title>
      <v-card-text>
        <p class="text-body-1">
          Esta é a página do Dashboard. Aqui você pode exibir métricas, gráficos
          e outros dados importantes.
        </p>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col cols="12" md="6" lg="3">
        <v-card elevation="1" color="primary">
          <v-card-text>
            <div class="text-h4 mb-2">89</div>
            <div class="text-subtitle-2">Usuários</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card elevation="1" color="success">
          <v-card-text>
            <div class="text-h4 mb-2">15</div>
            <div class="text-subtitle-2">Projetos</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card elevation="1" color="warning">
          <v-card-text>
            <div class="text-h4 mb-2">237</div>
            <div class="text-subtitle-2">Tarefas</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="3">
        <v-card elevation="1" color="error">
          <v-card-text>
            <div class="text-h4 mb-2">5</div>
            <div class="text-subtitle-2">Alertas</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
// Lógica do dashboard aqui
</script>
