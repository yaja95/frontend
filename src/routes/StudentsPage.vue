<template>
  <div>
    <v-card class="mx-3">
      <v-toolbar class="primary" dark>
        <v-toolbar-title>Events</v-toolbar-title>
         <v-spacer></v-spacer>
        <v-btn class='black--text' to="/events/">Calendar
          <v-icon right >date_range</v-icon>
        </v-btn>

      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in events">
          <v-list-tile ripple :key="index">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ new Date(item.time).toLocaleString()}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < events.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-card>
    <RouteCards :cards="cards"></RouteCards>
    <v-card class="mx-3">
      <v-toolbar class="primary" dark>
        <v-toolbar-title>Opportunities</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class='black--text' to="/students/projects/">Full List of Opportunities
          <v-icon right >list</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in opportunities">
          <v-list-tile ripple :key="index">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>Apply at: {{ item.applyAt }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < opportunities.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-card>
  </div>
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
      ],
      opportunities: [ // Example stub
        {
          title: 'Study Away',
          description: 'Study away in the land of your dreams! I really don\'t have anything clever to say... ' +
            'Lorem Ipsum dolor amet. Have some pseudo-latin to soothe your pet. This should be a AABB rhyme but I\'m lazy.',
          applyAt: 'Don\'t @ me'
        }
      ]
    }
  },
  components: { RouteCards },

  asyncComputed: {
    async events () {
      let events = await this.$http.get('events')
      return events.body
    }
  }
}
</script>