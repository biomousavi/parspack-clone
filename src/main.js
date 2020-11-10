import Vue from 'vue';
import App from './App.vue';
import inVP from './plugins/inVP';
import router from './router'


Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$inVP", {value: inVP});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
