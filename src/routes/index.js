import Vue from 'vue'
import Router from 'vue-router'

// import AsyncDemo from './AsyncDemo'
import home from './home'
import NotFound from './NotFound'
import StudentsPage from './StudentsPage'
import FacultyPage from './FacultyPage'
import Events from './Events'
import Awards from './Awards'
import StudentFellows from './StudentFellows'

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
      path: '/students/awards',
      component: Awards
    },
    {
      path: '/events/',
      component: Events
    },
    {
      path: '/faculty/',
      component: FacultyPage
    },
    {
      path: '/faculty/student_fellows',
      component: StudentFellows
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
