// import library
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from './plugins/vuetify';
// import assets
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// import pages/components
import Login from '@/pages/Login'

Vue.config.productionTip = false

const Router = new VueRouter({
  routes: [
    {
      path: '/login', 
      components: Login,
      name: 'login'
    }
  ]
})

new Vue({
  Router,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
