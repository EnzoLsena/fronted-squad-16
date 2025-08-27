<template>
  <div>
    <v-card elevation="1">
      <v-card-title class="text-h5">Configurações</v-card-title>

      <v-card-text>
        <v-tabs v-model="activeTab">
          <v-tab value="general">Geral</v-tab>
          <v-tab value="profile">Perfil</v-tab>
          <v-tab value="notifications">Notificações</v-tab>
          <v-tab value="security">Segurança</v-tab>
        </v-tabs>

        <v-window v-model="activeTab" class="mt-5">
          <!-- Aba Geral -->
          <v-window-item value="general">
            <v-form>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    label="Idioma"
                    :items="['Português (Brasil)', 'English', 'Español']"
                    variant="outlined"
                  ></v-select>
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    label="Tema"
                    :items="['Claro', 'Escuro', 'Sistema']"
                    variant="outlined"
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-switch
                    label="Habilitar modo de alto contraste"
                    color="green"
                  ></v-switch>
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>

          <!-- Aba Perfil -->
          <v-window-item value="profile">
            <v-form>
              <v-row>
                <v-col cols="12" class="text-center mb-5">
                  <v-avatar size="100" color="green">
                    <v-icon size="64">mdi-account</v-icon>
                  </v-avatar>
                  <div class="mt-2">
                    <v-btn size="small" color="primary">Alterar foto</v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Nome" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Sobrenome"
                    variant="outlined"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Email"
                    variant="outlined"
                    type="email"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>

          <!-- Outras abas -->
          <v-window-item value="notifications">
            <p>Configurações de notificações aqui</p>
          </v-window-item>

          <v-window-item value="security">
            <p>Configurações de segurança aqui</p>
          </v-window-item>
        </v-window>

        <div class="d-flex justify-end mt-5">
          <v-btn color="grey-lighten-2" class="me-3">Cancelar</v-btn>
          <v-btn color="green">Salvar alterações</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref("general");
</script>
