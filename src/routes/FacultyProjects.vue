<template>
  <div>
    <section>
      <v-parallax src='/static/purp.jpg' height="350">
        <v-layout column align-center justify-center class="white--text">
          <!--<img src="assets/vuetify.png" alt="Vuetify.js">-->
          <h1 class=" white--text darken mb-2 display-3">CinC Faculty Projects and Scholars</h1>
          <h4 class=" white--text headline mb-3 text-xs-center">See our CincC Faculty conducted projects and CinC Faculty Scholars below!</h4>

          <!--<v-btn
                                class="blue lighten-2 mt-5"
                                dark
                                large
                                href="/pre-made-themes"
                              >
                                Get Started
                              </v-btn>-->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container fluid>
        <v-layout row class="pr-4">
          <!--<v-flex xs12 sm6 lg3  >
                          <v-spacer></v-spacer>
                      <v-card  flat tile>
                          <v-card-media src="/static/Me.jpg" height = "465px">
                          </v-card-media>
                      </v-card>
                      
                      </v-flex>-->

          <v-flex xs12 sm6>
            <v-spacer></v-spacer>
            <v-card raised hover class="mt-5">
              <v-toolbar class=" mt-5 purple darken-4">

                <v-toolbar-title class="white--text">Faculty Projects

                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-select label="Search Projects" v-model="a1" v-bind:items="categories" prepend-icon="search" multiple  autocomplete hint="Select one or more tags to filter the list" dark>

                </v-select>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <v-btn color="blue" class="white--text" slot="activator" fab small @click.native="dialog = true">
                    <v-icon>add</v-icon>
                  </v-btn>
                  <span>Click to add a Project!</span>
                </v-tooltip>

              </v-toolbar>
              <v-list subheader two-line>

                <v-list-tile v-for="item in items" v-bind:key="item.title" @click="">

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-bind="item.text" v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon v-bind:color="item.active ? 'primary' : 'grey'">CINC</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <!--<v-divider></v-divider>
                          <v-list subheader>
                            <v-subheader>Previous chats</v-subheader>
                            <v-list-tile v-for="item in items2" v-bind:key="item.title" @click="">
                              
                              <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-list>-->
            </v-card>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex xs12 sm6 class="pl-4">
            <v-spacer></v-spacer>
            <v-card raised hover class="mt-5">
              <v-toolbar class=" mt-5 purple darken-4">

                <v-toolbar-title class="white--text">Faculty Scholars

                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-select label="Search Faculty" v-model="a1" prepend-icon="search" autocomplete hint="Select one or more tags to filter the list" dark>

                </v-select>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <v-btn color="blue" class="white--text" slot="activator" fab small @click.native="dialog2 = true">
                    <v-icon>add</v-icon>
                  </v-btn>
                  <span>Click to add yourself as a Scholar!</span>
                </v-tooltip>
              </v-toolbar>
              <v-list subheader two-line>

                <v-list-tile avatar v-for="item in items2" v-bind:key="item.title" @click="">
                  <v-list-tile-avatar>
                    <img v-bind:src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-bind="item.text" v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon v-bind:color="item.active ? 'primary' : 'grey'">CINC</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <!--<v-divider></v-divider>
                          <v-list subheader>
                            <v-subheader>Previous chats</v-subheader>
                            <v-list-tile v-for="item in items2" v-bind:key="item.title" @click="">
                              
                              <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-list>-->
            </v-card>
          </v-flex>
          <!--<v-flex xs12 sm6 lg3 >
                      <v-card flat tile>
                          <v-card-media src="/static/Me.jpg" height = "465px">
                          </v-card-media>
                      </v-card>
                      
                      </v-flex>-->
        </v-layout>
      </v-container>

      <v-layout row wrap justify-left>
        <v-dialog v-model="dialog" persistent max-width="500px">

          <v-card>
            <v-card-title>
              <span class="headline">New Project</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm12 md12>
                    <v-text-field label="Project Title" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12 md12>
                    <v-text-field label="Description" required hint="Describe the main details of the project"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Name" required hint="Enter your name"></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                    <v-select label="Department" required :items="['Computer Science', 'Biology', 'Mathematics', 'Political Science']"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select label="Year(s) Offered" multiple autocomplete chips :items="['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']"></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <div>
                <small>*indicates required field</small>
              </div>
              <small color="white--text">-All submitted projects require Administrator approval</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" flat @click.native="dialog = false">Cancel</v-btn>
              <v-btn color="success" flat @click.native="dialog = false">Submit</v-btn>

            </v-card-actions>

          </v-card>
        </v-dialog>
      </v-layout>

      <v-layout row justify-right>
        <v-dialog v-model="dialog2" persistent max-width="500px">

          <v-card>
            <v-card-title>
              <span class="headline">New Scholar</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm12 md12>
                    <v-text-field label="Scholar Name" required></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6>
                    <v-select label="Department" required :items="['Computer Science', 'Biology', 'Mathematics', 'Political Science']"></v-select>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select label="Year(s) Teaching" autocomplete :items="['1', '2','3','4','5','6','7','8','9','10']"></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <div>
                <small>*indicates required field</small>
              </div>
              <small color="white--text">-All submitted projects require Administrator approval</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
               <v-btn color="error" flat @click.native="dialog2 = false">Cancel</v-btn>
              <v-btn color="success" flat @click.native="dialog2 = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

    </section>

    <section>
      <v-parallax src='/static/purp.jpg' height="300">
        <v-layout column align-center justify-center class="white--text">
          <!--<img src="assets/vuetify.png" alt="Vuetify.js">-->

          <!--<v-btn
                                class="blue lighten-2 mt-5"
                                dark
                                large
                                href="/pre-made-themes"
                              >
                                Get Started
                              </v-btn>-->
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Opportunity One will go here from DB?", text: 'Summer' },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?", text: 'Fall' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?", text: 'Spring' },
        { active: true, title: 'Opporunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?", text: 'Winter' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'></span> - Description of Opportunity Two will go here from DB?" }
      ],
      a1: [],
      items2: [
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' },
        { active: true, avatar: '/static/Me.jpg', title: 'Ajay Williams', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Scholar  will go here from DB?", text: 'Summer' }
      ],
      categories: [
        { text: 'Summer' },
        { text: 'Fall' },
        { text: 'Spring' },
        { text: 'Internship' },
        { text: 'On-Campus' },
        { text: 'Off-Campus(local)' },
        { text: 'Off-Campus(non-local)' },
        { text: 'Paid' },
        { text: 'Unpaid' },
        { text: 'Course Credit' },
        { text: 'Study Away' }
      ],
      dialog: false,
      dialog2: false
    }
  },
  methods: {

    // ///////Method to filter the various events by the selector values\\\\\\\\\\\\\\\\\\\\\\\
    add () {
      var green
      green = this.dialog
      return green
    }
  }
}
</script>


