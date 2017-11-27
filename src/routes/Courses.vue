<template>
  <div>
    <v-parallax src="http://technozed.com/wp-content/uploads/2016/03/firewatch-wallpaper-12.jpg">
    <v-layout row justify-right>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">Create Suggestion</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Suggest a CinC Course</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Instructor's Name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Instructor's Department" required></v-text-field>
              </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              name="input-7-1"
              label="Course Description"
              multi-line
            required></v-text-field>
          </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
      <v-layout column class="mt-5">
      <v-flex xs12 sm6 offset-sm3>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Suggested CinC Courses</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.id"
            >
              <v-card>
                <v-card-media>
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline black--text"> {{ card.description }} </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions class="white">
                  <v-spacer></v-spacer>
                  <v-btn flat icon>
                    <v-icon>thumb_up</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout column class="mt-5">
      <v-flex xs12 sm6 offset-sm3>
        <v-spacer></v-spacer>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>CinC Courses</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.id"
            >
              <v-card>
                <v-card-media>
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline black--text"> {{ card.description }} </span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions class="white">
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 100 || 'Name must be less than 100 characters'
      ],
      department: ''
    }
  },
  asyncComputed: {
    async cards () {
      let cards = await this.$http.get('courses')
      cards.body.forEach(card => console.log(card))
      return cards.body
    }
  }
}
</script>
