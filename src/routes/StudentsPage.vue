<template>
  <div>
  <RouteCards :cards="cards" class="mb-2"></RouteCards>
    <v-layout row>
      <v-flex xs12 md6>
        <v-card>
          <v-spacer></v-spacer>
          <v-toolbar class="primary" dark>
            <v-toolbar-title> Events</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile avatar ripple :key="index">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card>
          <v-spacer></v-spacer>
          <v-toolbar class="primary" dark>
            <v-toolbar-title> Opportunities</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-tile avatar ripple :key="index">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
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
      ]
    }
  },
  components: { RouteCards }
}
</script>