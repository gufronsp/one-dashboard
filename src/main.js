// import library
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
// import assets
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// import pages/components
import Login from '@/pages/Login'
import Index from '@/pages/Index'

Vue.config.productionTip = false

const Router = new VueRouter({
  routes: [
    {
      path: '/login', 
      components: Login,
      name: 'login'
    },
    {
      path: '/index',
      components: Index,
      name: 'index'
    }
  ]
})

new Vue({
  Router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
