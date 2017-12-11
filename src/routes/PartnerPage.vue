<template>
<v-container fluid>
 
    <v-parallax src='/static/purp.jpg' height="350" >
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class=" white--text darken mb-2 display-3">CinC Community Partners</h1>
        <p class=" white--text headline mb-3 text-xs-center"><em>Come compute with us!</em></p>

      </v-layout>
    </v-parallax>
  

  <v-layout row>
    <v-flex xs12 sm6 lg3  >
         <v-card fixed color="cyan darken-2" class="white--text ma-3 ">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">FarmHouse Tacos</div>
                    <div>We feed the People</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="/static/farmhouse.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        
        </v-flex>
        
        <v-spacer></v-spacer>

    <v-flex xs12 sm6 >
      <v-card>
      <v-toolbar class="primary my-3" dark>
        <v-toolbar-title>Upcoming Events</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class='black--text' to="/events/">Calendar
          <v-icon right >date_range</v-icon>
        </v-btn>
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

    <v-toolbar class="my-3 primary">
    <v-btn class='black--text' @click.native="dialog = true">Post a Job or Internship
          <v-icon right >add_circle_outline</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class='black--text' @click.native="dialog2 = true">Apply to obtain an Intern
          <v-icon right >create</v-icon>
        </v-btn>
    </v-toolbar>
      <h1 class="primary--text">Our Partners</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ante tortor. Phasellus ac posuere sapien. Mauris arcu sapien, fermentum quis semper non,
            consectetur eget lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Nam faucibus at enim sit amet viverra. Suspendisse potenti. Integer.</p>
      <v-card class="my-3" v-for="item in items" :key="item.title" hover>
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
    <v-flex xs12 sm6 lg3  >
        <v-card fixed color="cyan darken-2" class="white--text ma-3">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">FarmHouse Tacos</div>
                    <div>We feed the People</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="/static/farmhouse.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        
        </v-flex>
  </v-layout>
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

   <v-parallax src='/static/purp.jpg' height="350" >
      <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <h1 class=" white--text darken mb-2 display-3">CinC Community Partners</h1>
      </v-layout>
    </v-parallax>
</v-container>

</template>

<script>
  export default {
    data () {
      return {
        show: false,
        items: [
          {title: 'FarmHouse Tacos'},
          {title: 'FarmHouse Tacos'},
          {title: 'FarmHouse Tacos'}
        ],
        opportunities: [ // Example stub
          {
            title: 'Study Away',
            description: 'Study away in the land of your dreams! I really don\'t have anything clever to say... ' +
            'Lorem Ipsum dolor amet. Have some pseudo-latin to soothe your pet. This should be a AABB rhyme but I\'m lazy.',
            applyAt: 'Don\'t @ me'
          }
        ],
        dialog: false,
        dialog2: false
      }
    }
  }
</script>