import { createApp } from "vue";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./style/base.scss";

createApp(App).use(store).use(router).use(ElementUI).mount("#app");
