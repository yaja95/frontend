import Vue from 'vue'
import Router from 'vue-router'

// import AsyncDemo from './AsyncDemo'
import home from './home'
import NotFound from './NotFound'
import StudentsPage from './StudentsPage'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/students/',
      component: StudentsPage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
