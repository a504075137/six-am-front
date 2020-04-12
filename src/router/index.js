import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from '../views/HomeRecommend.vue'
import Mine from '../views/Mine.vue'
import Social from '../views/Social.vue'
import SocialSearch from '../views/SocialSearch'
import Study from '../views/Study.vue'
import Course from '../views/Course'
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
    path: '/home/recommend',
    name: 'recommend',
    component: Recommend
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
    path: '/social/search',
    name: 'search',
    component: SocialSearch
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/StudyItem',
    name: 'StudyItem',
    component: () => import(/* webpackChunkName: "study" */ '../views/StudyItem')
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/MineItem',
    name: 'MineItem',
    component: () => import(/* webpackChunkName: "about" */ '../views/MineItem.vue')
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
