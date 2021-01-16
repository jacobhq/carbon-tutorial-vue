import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue/src/index';
import { createProvider } from './vue-apollo';
import wb from './registerServiceWorker';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.prototype.$workbox = wb;
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    onboarding: true,
    step: 0
  },
  mutations: {
    next (state) {
      state.step++
    }
  }
})

new Vue({
  router,
  apolloProvider: createProvider(),
  store: store,
  render: h => h(App)
}).$mount('#app');
