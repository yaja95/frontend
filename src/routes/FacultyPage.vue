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
        <v-toolbar-title>Upcoming Opportunities</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class='black--text' to="/faculty/projects/">Full List of Opportunities
          <v-icon right >list</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(item, index) in opportunities">
          <v-list-tile ripple :key="index">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ new Date(item.time).toLocaleString()}}</v-list-tile-sub-title>
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
      ],
      opportunities: [ // Example stub
        {
          title: 'Hack Night ',
          description: 'Hack in the land of your dreams! I really don\'t have anything clever to say... ',
          date: new Date(2017, 10, 6)
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