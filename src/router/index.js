import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login/Login.vue"),
    // 表示访问Login页面 前 执行
    beforeEnter: (to, from, next) => {
      if (localStorage.isLogin === "true") {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register/Register.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.isLogin === "true") {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path:'/shop/:id',
    name:'Shop',
    component:()=>import("../views/shop/Shop.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (localStorage.isLogin === "true" || to.name === "Login"||to.name==="Register") {
    next();
  } else {
    next({ name: "Login" });
  }
});
export default router;
