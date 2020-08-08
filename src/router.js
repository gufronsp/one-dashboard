import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login'
import Index from './pages/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  }
]

export default new VueRouter({
  routes
})