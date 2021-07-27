import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import authLogic from "../utils/authLogic";

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
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/product/:id",
    name: "proguctPage",
    component: () => import("../views/ProductPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = authLogic.getCookie();
  if (to.name === "User" && (!token || token === "undefined"))
    next({ name: "Login" });
  if (to.name === "Login" && token && token !== "undefined")
    next({ name: "User" });
  else next();
});

export default router;
