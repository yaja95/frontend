<template>
  <div>
  <v-spacer></v-spacer>
    <v-toolbar class = primary>
      <v-toolbar-title class="white--text">Events Listing</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <template v-for="(item, index) in calendar">
            <v-card color="white" class="black--text" :key="index">
              <v-card-title>
                <div class="headline">{{item.title}}</div>
                <v-spacer></v-spacer>
                <div class ="headline">{{item.date.toLocaleDateString()}}</div>
              </v-card-title>
              <v-card-text>
                <div class>{{item.description}}</div>
              </v-card-text>
            </v-card>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        calendar: [ // Example stub
          {
            title: 'Study Away',
            description: 'Study away in the land of your dreams! I really don\'t have anything clever to say... ' +
            'Lorem Ipsum dolor amet. Have some pseudo-latin to soothe your pet. This should be a AABB rhyme but I\'m lazy.',
            date: new Date(2018, 7, 22)
          },
          {
            title: 'Another Event',
            description: 'Here\'s another event.',
            date: new Date(2017, 11, 5)
          }
        ]
      }
    }
  }
</script>
