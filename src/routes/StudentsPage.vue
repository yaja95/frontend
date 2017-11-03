<template>
  <div>
  <RouteCards :cards="cards" class="mb-1"></RouteCards>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-toolbar class="primary" dark>
            <v-toolbar-title>Events</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in events">
              <v-list-tile ripple :key="index">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.date.toLocaleDateString()}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index + 1 < events.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-toolbar class="primary" dark>
            <v-toolbar-title>Opportunities</v-toolbar-title>
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
      </v-flex>
    </v-layout>
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
      events: [ // Example stub
        {
          title: 'CCSCSE Programming Competition',
          description: 'A competition to solve a number of programming puzzles in a limited amount of time. ' +
            'Furman won last year, so let\'s do it again! And so on this can be an arbitrary amount of text....',
          date: new Date(2017, 11, 3)
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
  components: { RouteCards }
}
</script>