import Vue from 'vue';
import App from './App.vue';
import inVP from './plugins/inVP';
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';

// // import style
import 'swiper/swiper-bundle.min.css';

import {Swiper, EffectFade, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([EffectFade, Autoplay]);
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$Swiper", {value: Swiper});
Object.defineProperty(Vue.prototype, "$inVP", {value: inVP});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
