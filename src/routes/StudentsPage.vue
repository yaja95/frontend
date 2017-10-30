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
          img: 'https://www.exceptionnotfound.net/content/images/2015/04/the-coder.jpg',
          route: '/students/projects/',
          title: 'Projects',
          text: 'Learn about projects CinC students are able to apply for'
        },
        {
          img: 'https://www.bls.gov/ooh/images/15202.jpg',
          route: '/students/experiences',
          title: 'Experiences',
          text: 'Read about real CinC students experiences '
        },
        {
          img: 'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg',
          route: '/students/courses',
          title: 'Courses',
          text: 'Learn about the great computing courses already on offer, or give input on new courses'
        },
        {
          img: 'https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/overview_page/Awards%20Image.jpg?itok=zEFw_Eni',
          route: '/students/awards',
          title: 'Awards',
          text: 'See the awards our students and department have given and received!'
        }
      ]
    }
  },
  components: { RouteCards }
}
</script>