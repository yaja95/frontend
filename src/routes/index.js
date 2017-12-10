import Vue from 'vue'
import Router from 'vue-router'

// import AsyncDemo from './AsyncDemo'
import home from './home'
import NotFound from './NotFound'
import StudentsPage from './StudentsPage'
import FacultyPage from './FacultyPage'
import Courses from './Courses'
import Events from './Events'
import Projects from './StudentProjects'
import Awards from './Awards'
import StudentFellows from './StudentFellows'
import ExperiencesPage from './ExperiencesPage'
import Project from './FacultyProjects'
import TeachingFellows from './TeachingFellows'

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

      path: '/faculty/projects/',
      component: Project
    },
    {
      path: '/faculty/courses/',
      component: Courses
    },
    {
      path: '/students/courses/',
      component: Courses
    },
    {
      path: '/faculty/student_fellows/',
      component: StudentFellows
    },
    {
      path: '/faculty/teaching_fellows/',
      component: TeachingFellows
    },
    {
      path: '/students/projects/',
      component: Projects
    },
    {
      path: '/students/experiences',
      component: ExperiencesPage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
