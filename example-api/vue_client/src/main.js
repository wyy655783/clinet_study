import Vue from 'vue';
//import App from './App.vue'
//import exp from './views/Exp1View.vue'
import exp2 from './views/AxiosExpView.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(exp2),
}).$mount('#app');
