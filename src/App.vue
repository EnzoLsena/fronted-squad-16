<script setup lang="ts">
import {
  PhHouse,
  PhGraduationCap,
  PhPackage,
  PhClockCounterClockwise,
  PhUserGear,
  PhSignOut,
  PhGear,
} from "@phosphor-icons/vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isLoginPage = computed(() => route.path === "/login");

const isActiveRoute = (routePath: string) => {
  return route.path === routePath;
};
</script>
<template>
  <div v-if="isLoginPage" class="h-screen">
    <router-view />
  </div>
  <VLayout v-else class="rounded-md border">
    <VNavigationDrawer
      class="bg-[linear-gradient(180deg,var(--color-primary)_0%,var(--color-secondary)_23.44%,var(--color-terciary)_100%)] text-white"
      permanent
    >
      <div class="w-full flex justify-start align-center h-[8rem] p-5">
        <img src="../src/assets/images/logo.svg" alt="" class="w-50 h-40" />
      </div>
      <VList nav>
        <div
          :class="{ 'nav-border-active': isActiveRoute('/') }"
          class="nav-border-container"
        >
          <VListItem
            to="/"
            :class="{ 'nav-item-active': isActiveRoute('/') }"
            class="nav-item"
          >
            <span
              class="flex align-center gap-3"
              :class="{ 'text-active': isActiveRoute('/') }"
            >
              <PhHouse
                size="22"
                :class="{ 'icon-active': isActiveRoute('/') }"
              />
              <VListItemTitle :class="{ 'title-active': isActiveRoute('/') }">
                Principal
              </VListItemTitle>
            </span>
          </VListItem>
        </div>
        <div
          :class="{ 'nav-border-active': isActiveRoute('/logs') }"
          class="nav-border-container"
        >
          <VListItem
            to="/logs"
            :class="{ 'nav-item-active': isActiveRoute('/logs') }"
            class="nav-item"
          >
            <span
              class="flex align-center gap-3"
              :class="{ 'text-active': isActiveRoute('/logs') }"
            >
              <PhGraduationCap
                size="22"
                :class="{ 'icon-active': isActiveRoute('/logs') }"
              />
              <VListItemTitle
                :class="{ 'title-active': isActiveRoute('/logs') }"
              >
                Instituições
              </VListItemTitle>
            </span>
          </VListItem>
        </div>
        <div
          :class="{ 'nav-border-active': isActiveRoute('/alerts') }"
          class="nav-border-container"
        >
          <VListItem
            to="/alerts"
            :class="{ 'nav-item-active': isActiveRoute('/alerts') }"
            class="nav-item"
          >
            <span
              class="flex align-center gap-3"
              :class="{ 'text-active': isActiveRoute('/alerts') }"
            >
              <PhClockCounterClockwise
                size="22"
                :class="{ 'icon-active': isActiveRoute('/alerts') }"
              />
              <VListItemTitle
                :class="{ 'title-active': isActiveRoute('/alerts') }"
              >
                Auditoria
              </VListItemTitle>
            </span>
          </VListItem>
        </div>
        <div
          :class="{ 'nav-border-active': isActiveRoute('/roles-alerts') }"
          class="nav-border-container"
        >
          <VListItem
            to="/roles-alerts"
            :class="{ 'nav-item-active': isActiveRoute('/roles-alerts') }"
            class="nav-item"
          >
            <span
              class="flex align-center gap-3"
              :class="{ 'text-active': isActiveRoute('/roles-alerts') }"
            >
              <PhPackage
                size="22"
                :class="{ 'icon-active': isActiveRoute('/roles-alerts') }"
              />
              <VListItemTitle
                :class="{ 'title-active': isActiveRoute('/roles-alerts') }"
              >
                Combos
              </VListItemTitle>
            </span>
          </VListItem>
        </div>
        <div
          :class="{ 'nav-border-active': isActiveRoute('/permissions') }"
          class="nav-border-container"
        >
          <VListItem
            to="/permissions"
            :class="{ 'nav-item-active': isActiveRoute('/permissions') }"
            class="nav-item"
          >
            <span
              class="flex align-center gap-3"
              :class="{ 'text-active': isActiveRoute('/permissions') }"
            >
              <PhUserGear
                size="22"
                :class="{ 'icon-active': isActiveRoute('/permissions') }"
              />
              <VListItemTitle
                :class="{ 'title-active': isActiveRoute('/permissions') }"
              >
                Gerenciar Perfis
              </VListItemTitle>
            </span>
          </VListItem>
        </div>
      </VList>
      <template v-slot:append>
        <div class="p-2 flex align-center justify-center ">
          <span class="flex flex-col align-start ">
            <VBtn to="/login" variant="plain">
              <PhGear  size="22" />
              Configuração
            </VBtn>
            <VBtn to="/login" variant="plain" color="orange">
              <PhSignOut size="22" />
              Sair
            </VBtn>
          </span>
        </div>
      </template>
    </VNavigationDrawer>

    <VAppBar elevation="1">
      <div class="flex justify-end w-full">
        <VList>
          <VListItem>
            <p>Professor</p>
            <template #append>
              <VAvatar>
                <VImg
                  alt="John"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                ></VImg>
              </VAvatar>
            </template>
          </VListItem>
        </VList>
      </div>
    </VAppBar>

    <VMain class="flex justify-center h-screen">
      <VContainer>
        <router-view />
      </VContainer>
    </VMain>
  </VLayout>
</template>

<style>
.nav-border-container {
  position: relative;
  margin: 2px 0;
}

.nav-border-active {
  border-left: 4px solid #ffffff;
  border-radius: 1px;
}

.nav-item {
  margin: 0;
}

.nav-item-active {
  background-color: rgba(170, 174, 193, 0.1) !important;
}

.text-active {
  color: #ffffff !important;
}

.title-active {
  color: #ffffff !important;
}

.icon-active {
  color: #ffffff !important;
}

.nav-item:hover:not(.nav-item-active) {
  background-color: rgba(31, 55, 153, 0.05) !important;
}
</style>
