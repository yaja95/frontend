<template>
  <div>
    <section>
      <v-parallax src='/static/purp.jpg' height="350">
        <v-layout column align-center justify-center class="white--text">
          <!--<img src="assets/vuetify.png" alt="Vuetify.js">-->
          <h1 class=" white--text darken mb-2 display-3">Project Opportunites</h1>
          <p class=" white--text headline mb-3 text-xs-center">Find a list of all available Project Opportunities below!</p>
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
        <v-layout column wrap>

<!-- Creates the pop-up dialog for suggesting a new project to add-->
      <div>
      <v-layout row justify-center>
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

    <!-- Creates the toolbar above the grid list of opportunities-->
            <v-flex xl12>
              
            <v-toolbar width="200px" color="primary">

                <v-toolbar-title class="white--text">Faculty Projects

                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-select label="Filter Projects" v-model="a1" v-bind:items="categories" prepend-icon="search" multiple  autocomplete hint="Select one or more tags to filter the list" dark>

                </v-select>
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <v-btn color="blue" class="white--text" slot="activator" fab small @click.native="dialog = true">
                    <v-icon>add</v-icon>
                  </v-btn>
                  <span>Click to add a Project!</span>
                </v-tooltip>

              </v-toolbar>

             <!-- Creates the list of opportunities-->

              <v-card raised hover class="my-3">

                <v-list subheader two-line>
                  <template  v-for="(item,index) in items">

                  <v-list-tile v-bind:key="item.title" @click="">

                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-bind="item.text" v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon v-bind:color="item.active ? 'purple darken-4' : 'grey'">CINC</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-divider v-if="index + 1 < items.length" :key="item.title"></v-divider>
                  </template>
                </v-list>
               
              </v-card>
            </v-flex>
          </div>
        </v-layout>
      </v-container>
    </section>

    <!-- Creates the bottom parallax section-->
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
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'></span>  Description of Opportunity One will go here from DB?", text: 'Summer' },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?", text: 'Fall' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?", text: 'Spring' },
        { active: true, title: 'Opporunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?", text: 'Winter' },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" },
        { active: true, title: 'Opportunity One', subtitle: "<span class='grey--text text--darken-3'>Summer</span> - Description of Opportunity One will go here from DB?" },
        { active: true, title: 'Opportunity Two', subtitle: "<span class='grey--text text--darken-3'>Fall</span> - Description of Opportunity Two will go here from DB?" }
      ],
      a1: false,
      menu: false,
      items2: [
        { title: 'Travis Howard' }
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
        { text: 'Offers Course Credit' },
        { text: 'Study Away' }
      ],
      dialog: false
    }
  },
  methods: {

    toggle (index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
    // ///////Method to filter the various events by the selector values\\\\\\\\\\\\\\\\\\\\\\\
  }
}
</script>


