import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

Vue.config.productionTip = false
Framework7.use(Framework7Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
