<template>
  <div>
      <v-container fluid>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card>
          <v-toolbar class="primary" dark>
            <v-toolbar-title>Events</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="black--text">Calendar
            <v-icon light right>date_range</v-icon>
            </v-btn>
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
      </v-container>
  <RouteCards :cards="cards" class="mb-1"></RouteCards>
    <v-layout row wrap></v-layout>
    
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
          route: '/students/sfellows/',
          title: 'Student Fellows',
          text: 'Learn what is expected of a student fellow and how to apply for a fellowship'
        },
        {
          img: 'https://www.bls.gov/ooh/images/15202.jpg',
          route: '/students/experiences',
          title: 'Teaching Fellows',
          text: 'Learn how to become an instructor within the Computing in the Community initiative'
        },
        {
          img: 'https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg',
          route: '/students/courses',
          title: 'Courses',
          text: 'See the list of computer courses currently offered, able to be offered, and student-suggested courses'
        },
        {
          img: 'https://www.aiche.org/sites/default/files/styles/aiche_content/public/images/overview_page/Awards%20Image.jpg?itok=zEFw_Eni',
          route: '/students/awards',
          title: 'Projects and Scholars',
          text: 'See the projects and honors that our faculty have demonstrated and garnered!'
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