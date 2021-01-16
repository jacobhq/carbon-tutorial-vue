import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue/src/index';
import { createProvider } from './vue-apollo';
import wb from './registerServiceWorker';

Vue.prototype.$workbox = wb;
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
