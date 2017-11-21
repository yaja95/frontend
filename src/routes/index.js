import Vue from 'vue'
import Router from 'vue-router'

// import AsyncDemo from './AsyncDemo'
import home from './home'
import NotFound from './NotFound'
import StudentsPage from './StudentsPage'
import FacultyPage from './FacultyPage'
import Courses from './Courses'

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
      path: '/faculty/',
      component: FacultyPage
    },
    {
      path: '/faculty/courses/',
      component: Courses
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
