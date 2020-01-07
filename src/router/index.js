import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Social from '../views/Social.vue'
import Study from '../views/Study.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/social',
    name: 'social',
    component: Social
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   let config = {};
//   console.log(12121)
//   // if (!Vue.$bus.ready && to.path !== '/' && !to.meta.noload) {
//   //   config = {
//   //     path: '/',
//   //     replace: true
//   //   };
//   // }
//   next(config);
// });

export default router
