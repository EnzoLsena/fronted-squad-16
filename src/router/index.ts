import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/home/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/login/Login.vue"),
    },
    {
      path: "/combo",
      name: "Combo",
      component: () => import("@/views/combo/Combo.vue"),
    },
    {
      path: "/audit",
      name: "Audit",
      component: () => import("@/views/audit/Audit.vue"),
    },
    {
      path: "/institution",
      name: "Institution",
      component: () => import("@/views/institution/Institution.vue"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("@/views/settings/Settings.vue"),
    },
  ],
});

export default router;
