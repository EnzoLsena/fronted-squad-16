<template>
  <div>
    <v-card elevation="1">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-h5">Usuários</span>
        <v-btn color="green" prepend-icon="mdi-plus"> Adicionar Usuário </v-btn>
      </v-card-title>

      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <v-chip :color="user.active ? 'success' : 'error'" size="small">
                  {{ user.active ? "Ativo" : "Inativo" }}
                </v-chip>
              </td>
              <td>
                <div class="d-flex gap-2">
                  <v-btn
                    icon="mdi-pencil"
                    variant="text"
                    color="primary"
                    density="compact"
                  ></v-btn>
                  <v-btn
                    icon="mdi-delete"
                    variant="text"
                    color="error"
                    density="compact"
                  ></v-btn>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Dados de exemplo para a tabela de usuários
const users = ref([
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    active: true,
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    active: true,
  },
  {
    id: 3,
    name: "Pedro Alves",
    email: "pedro@email.com",
    active: false,
  },
  {
    id: 4,
    name: "Ana Ferreira",
    email: "ana@email.com",
    active: true,
  },
]);
</script>
