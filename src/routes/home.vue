<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card>
        <v-card-media
          class="white--text"
          height="256px"
          src="http://icons.iconarchive.com/icons/icons8/android/256/Users-Student-icon.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Students<br></span>
                <span id="student_text" class="red--text">Meet computing students and learn about opportunities available to students through CinC</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-media
          class="white--text"
          height="256px"
          src="http://icons.iconarchive.com/icons/icons8/android/256/Users-Student-icon.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Faculty<br></span>
                <span id="faculty_text" class="red--text">Meet the great faculty who make CinC possible</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-media
          class="white--text"
          height="256px"
          src="http://icons.iconarchive.com/icons/icons8/android/256/Users-Student-icon.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Courses<br></span>
                <span id="courses_text" class="red--text">Learn about the great computing courses already on offer, or give input on new courses</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
    <v-flex xs12 md6>
      <v-card>
        <v-card-media
          class="white--text"
          height="256px"
          src="http://icons.iconarchive.com/icons/icons8/android/256/Users-Student-icon.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Partners<br></span>
                <span id="partners_text" class="red--text">Learn about the partners who make the initiative possible, or become a partner</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
    }
  }
</script>