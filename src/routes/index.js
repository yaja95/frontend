import Vue from 'vue'
import Router from 'vue-router'

import AsyncDemo from './AsyncDemo'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: AsyncDemo
    }
  ]
})
