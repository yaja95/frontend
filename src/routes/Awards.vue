<template>
  <div>
    <v-toolbar class = primary>
      <v-toolbar-title class="white--text">Student Awards</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <template v-for="(item, index) in awards">
            <v-card color="white" class="black--text" :key="index">
              <v-card-title primary-title>
                <div class="headline">{{item.name}}</div>
                <v-spacer></v-spacer>
                <div class = headline>{{(new Date(item.date)).toLocaleDateString()}}</div>
              </v-card-title>
              <v-card-text>
                <div>{{item.description}}</div>
                <div class = headline>Won by: {{item.winner}}</div>
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
  asyncComputed: {
    async awards () {
      let awards = await this.$http.get('awards')
      return awards.body
    }
  }
}
</script>