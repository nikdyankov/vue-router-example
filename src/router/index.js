import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kiten",
    name: "kiten",
    component: () =>
      import(/* webpackChunkName: "kiten" */ "../views/Kiten.vue"),
  },
  {
    path: "/nessebar",
    name: "nessebar",
    component: () =>
      import(/* webpackChunkName: "nesebar" */ "../views/Nessebar.vue"),
  },
  {
    path: "/sozopol",
    name: "sozopol",
    component: () =>
      import(/* webpackChunkName: "sozopol" */ "../views/Sozopol.vue"),
  },
  {
    path: "/sunny-beach",
    name: "sunnyBeach",
    component: () =>
      import(/* webpackChunkName: "sunnyBeach" */ "../views/SunnyBeach.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
