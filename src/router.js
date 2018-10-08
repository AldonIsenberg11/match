import Vue from 'vue'
import Router from 'vue-router'
import Home from './client/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/match',
      name: 'match',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "match" */ './client/views/Match.vue')
    },
    {
      path: '/matchUnderway',
      name: 'matchUnderway',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "matchUnderway" */ './client/views/MatchUnderway.vue')
    }
  ]
})
