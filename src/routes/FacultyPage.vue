<template>
  <RouteCards :cards="cards"></RouteCards>
</template>

<script>
import RouteCards from '@/components/RouteCards'

export default {
  data () {
    return {
      cards: [
        {
          img: 'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg',
          route: '/faculty/student_fellows',
          title: 'Student Fellows',
          text: 'Learn what is expected of a student fellow and how to become one'
        },
        {
          img: 'https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg',
          route: '/faculty/teaching_fellows',
          title: 'Teaching Fellows',
          text: 'Learn how to become an instructor within the Computing in the Community initiative'
        },
        {
          img: 'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg',
          route: '/faculty/courses/',
          title: 'Courses',
          text: 'Learn about opportunities to teach a Computing in the Community course'
        },
        {
          img: 'https://images.pexels.com/photos/630835/pexels-photo-630835.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          route: '/faculty/projects',
          title: 'Projects',
          text: 'Suggest, collaborate on, or learn about projects'
        }
      ]
    }
  },
  components: { RouteCards }
}
</script>