import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login'
import Index from './pages/Index'
import UiElementsGeneral from './pages/uiElements/General'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'auth'
    },
    component: Login
  },
  {
    path: '/ui-elements/general',
    name: 'uiElementsGeneral',
    component: UiElementsGeneral
  }
]

export default new VueRouter({
  routes
})