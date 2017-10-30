import Vue from 'vue'
import Router from 'vue-router'

import AsyncDemo from './AsyncDemo'
import NotFound from './NotFound'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: AsyncDemo
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
