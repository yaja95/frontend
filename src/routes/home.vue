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
          route: '/students/',
          title: 'Students',
          text: 'Meet computing students and learn about opportunities available to students through CinC'
        },
        {
          img: 'https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg',
          route: '/faculty/',
          title: 'Faculty',
          text: 'Meet the great faculty who make CinC possible'
        },
        {
          img: 'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg',
          route: '/courses/',
          title: 'Courses',
          text: 'Learn about the great computing courses already on offer, or give input on new courses'
        },
        {
          img: 'https://images.pexels.com/photos/630835/pexels-photo-630835.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          route: '/partners/',
          title: 'Partners',
          text: 'Learn about the partners who make the initiative possible, or become a partner'
        }
      ]
    }
  },
  components: { RouteCards }
}
</script>