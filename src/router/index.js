import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hobby',
    name: 'Hobby',
    component: () => import('../views/Hobby.vue')
  },
  {
    path: '/today',
    name: 'Today',
    component: () => import('../views/Today.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue')
  },
  {
    path: '/:category/:id',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
