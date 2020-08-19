// import library
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// import assets
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// import components
import Default from './layouts/Default.vue'
import Auth from './layouts/Auth.vue'

Vue.component('default-layout', Default)
Vue.component('auth-layout', Auth)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
