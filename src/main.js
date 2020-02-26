import Vue from 'vue'
import App from './App.vue'
import Add from "./components/Add";
import Home from "./components/MemesList";
import Edit from "./components/Edit";
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/memes/add", component: Add },
  { path: "/memes/edit/:id", component: Edit }
];

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
