

<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <h1>Our Partners</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ante tortor. Phasellus ac posuere sapien. Mauris arcu sapien, fermentum quis semper non,
            consectetur eget lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Nam faucibus at enim sit amet viverra. Suspendisse potenti. Integer.</p>
      <v-card v-for="item in items" :key="item.title" hover>
        <v-card-media
          src="/static/farmhouse.png"
          height="300px"
          class="mt-3"
        >
        </v-card-media>
        <v-card-title primary-title >
          <div>
            <div class="headline" v-html="item.title"></div>
            <span class="grey--text">Silver Level Partner</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          Click the arrow to Read More!
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'  }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ante tortor. Phasellus ac posuere sapien. Mauris arcu sapien, fermentum quis semper non,
            consectetur eget lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Nam faucibus at enim sit amet viverra. Suspendisse potenti. Integer.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        items: [
          {title: 'FarmHouse Tacos'},
          {title: 'FarmHouse Tacos'},
          {title: 'FarmHouse Tacos'},
          {title: 'FarmHouse Tacos'}
        ]
      }
    }
  }
</script>