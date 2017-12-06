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
                <div class ="headline">{{new Date(item.time).toLocaleDateString()}}</div>
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
      }
    },
    asyncComputed: {
      async calendar () {
        let calendar = await this.$http.get('events')
        return calendar.body
      }
    }
  }
</script>
