import Vue from 'vue'
import Router from 'vue-router'
//import Router from './hash-router.vue'

import Home from './views/Home.vue' 
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
//  base: process.env.PUBLIC_URL,
  routes: [

    {
      path: '/fly/:id',
      name: 'home_with_id',
      component: Home
    },
 

    {
      path: '/',
      name: 'home',
      component: Home
    },

   
 
 
    {
      path: '/*',
      component: NotFound
    },
  ]
})
