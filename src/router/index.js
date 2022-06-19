import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../components/TheHome.vue";
import TheUser from "../components/TheUser.vue";
import UpdateUser from "../components/UpdateUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: TheHome,
      name: "Home",
    },
    {
      path: "/user",
      component: TheUser,
      name: "User",
    },
    {
      path: "/update/:id",
      component: UpdateUser,
      name: "updateUser",
      props: true
    },
  ],
});

export default router;
