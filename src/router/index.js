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
    path: "/electronics",
    name: "Electronics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Electronics.vue"),
  },
  {
    path: "/jewelery",
    name: "Jewelery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Jewelery.vue"),
  },
  {
    path: "/mens",
    name: "Mens",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mens.vue"),
  },
  {
    path: "/womens",
    name: "Womens",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Womens.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import(/* webpackChunkName: "about" */ "../views/Buy.vue"),
  },
  {
    path: "/serch",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Favorites.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
