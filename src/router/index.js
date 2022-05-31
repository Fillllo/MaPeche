import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import store from '../store/store.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/carte',
    name: 'carte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CarteView.vue'),
    beforeEnter: async (to, from, next) => {
      const isLoggedIn = store.state.status

      if (isLoggedIn !== 'loggedin') {
        return next('/login')
      }

      next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
