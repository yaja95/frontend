import Vue from 'vue'
import Router from 'vue-router'

// import AsyncDemo from './AsyncDemo'
import home from './home'
import NotFound from './NotFound'
import StudentsPage from './StudentsPage'
import FacultyPage from './FacultyPage'
import Events from './Events'
import Projects from './StudentProjects'

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
      path: '/events/',
      component: Events
    },
    {
      path: '/faculty/',
      component: FacultyPage
    },
    {
      path: '/students/projects/',
      component: Projects
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
