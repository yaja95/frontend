<template>
  <div>
    <v-layout row wrap>
      <v-flex sm12>
        <v-dialog v-model="dialog" persistent width="50%">
          <v-btn primary dark slot="activator" id="btn-activator" class="mx-3">Post an Experience</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Post an Experience</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field label="Name" required v-model="name"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Company Worked With" required v-model="companyName"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Date" required v-model="entryDate"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm12>
                    <v-text-field multi-line label="Entry" required v-model="entryContent"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="blue--text darken-1" flat>Post</v-btn>
              <v-btn class="blue--text darken-1" flat v-on:click="dialog = false">Cancel</v-btn>
            </v-card-actions>
         </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12 md8>
        <v-card class="mx-3">
          <v-toolbar class="primary" dark>
            <v-toolbar-title>Experiences</v-toolbar-title>
          </v-toolbar>
        </v-card>
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg
        >
            <v-flex xs12>
              <template v-for="(item, index) in experiences">
                <v-card color="white" class="black--text" :key="index">
                  <v-flex xs4>
                    <img v-img src={{ item.img }}>
                  </v-flex>
                <v-flex xs8>
                  <v-card-title>
                    <div class="headline">{{item.name}}</div>
                    <v-spacer></v-spacer>
                    <div class ="headline">{{item.entryDate}}</div>
                    <v-spacer></v-spacer>
                    <div class ="headline">{{item.companyName}}</div>
                  </v-card-title>
                  <v-card-text>
                    <div class>{{item.entryContent}}</div>
                  </v-card-text>
                  </v-flex>
                </v-card>
              </template>
            </v-flex>
        </v-container>
       </v-flex>
      <v-flex xs12 md4>
      <v-card class="mx-3">
        <v-toolbar class="primary" dark>
          <v-toolbar-title>Companies We've Worked With</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in companies">
            <v-list-tile ripple :key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < companies.length" :key="index"></v-divider>
          </template>
         </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>           
</template>

<style scoped>
#btn-activator {
  -align: right;
}
</style>


<script>
export default {
  data () {
    return {
      dialog: false,
      name: '',
      companyName: '',
      entryDate: '',
      entryContent: '',
      companies: [
        {
          name: 'IBM'
        },
        {
          name: 'Apple'
        }
      ],
      experiences: [
        {
          name: 'Bobby Tables',
          img: 'https://pbs.twimg.com/profile_images/740906145209016320/lKPlT_wq_400x400.jpg',
          companyName: 'IBM',
          entryDate: '11/19/2017',
          entryContent: 'This is a public service announcement testtestetjsfjoszlkofjlijszldjszldjlzsjfioisgdoAHFljs;ldkc;ljdzjfljszfgijlzsijdlkdl;j;'
        },
        {
          name: 'Name Namename',
          img: 'https://randomletterstotheworld.files.wordpress.com/2013/07/random-dude.jpg',
          companyName: 'Apple',
          entryDate: '11/18/2017',
          entryContent: 'This is only a test'
        }
      ]
    }
  }
}
</script>