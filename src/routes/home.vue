<template>
  <div>
  <RouteCards :cards="cards" class="mb-1"></RouteCards>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card>
          <v-toolbar class="primary" dark>
            <v-toolbar-title>Blog</v-toolbar-title>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in blogposts">
              <v-list-tile ripple :key="index">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.date.toLocaleDateString()}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.description }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index + 1 < blogposts.length" :key="index"></v-divider>
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
      ],
      blogposts: [ // Example stub
        {
          title: 'Still working',
          description: 'This is a test message for the work in progresss. Hopefully this is sufficient and works well enough to please everyone',
          date: new Date(2017, 10, 6)
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