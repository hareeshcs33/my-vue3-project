import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/profile/:name',
    name: 'profile',
    component: () => import('../views/Profile-view.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../components/LogIn.vue')
  },
  {
    path: '/user-details',
    name: 'UserDetails',
    component: () => import('../components/UserDetails.vue')
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: () => import('../components/AddUser.vue')
  },
  {
    path: '/update-user/:id',
    name: 'UpdateUser',
    component: () => import('../components/UpdateUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
