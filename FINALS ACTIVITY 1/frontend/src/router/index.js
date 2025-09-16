import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Student from "../views/Student.vue";
import Admin from "../views/Admin.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/studentPage", component: Student },
  { path: "/adminPage", component: Admin }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
