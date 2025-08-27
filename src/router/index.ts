import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // Lazy-loading para melhor performance
      component: () => import("@/views/Dashboard.vue"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("@/views/Users.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("@/views/Settings.vue"),
    },
  ],
});

export default router;
