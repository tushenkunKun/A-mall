import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to,from,next)=>{
  if(localStorage.isLogin==="true"||to.name==="Login"){
    next();
  }else{
    next({name:"Login"});
  }
})
export default router;
