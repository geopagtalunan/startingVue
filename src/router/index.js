import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Mark',
    name: 'Mark',
    component: () => import('../views/mark.vue')
  },
  {
    path: '/Tables',
    name: 'Tables',
    component: () => import('../views/Tables.vue')
  },
  {
    path: '/RoomsEstimation',
    name: 'Rooms Estimation',
    component: () => import('../views/RoomsEstimation.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
