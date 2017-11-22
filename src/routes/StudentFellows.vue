<template>
  <v-layout row justify-center>
    <h1>Apply for a student fellow today!</h1>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Last name" hint="example of helper text only on focus"
                  required
                  ></v-text-field>
              </v-flex>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Please enter a brief description of your fellowship" type="description"
                  hint = "Hint: Save your work in another word processor before typing it here."
                  required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Department"
                  required
                  :items="['Accounting', 'Anthropology', 'Art', 'Asian Studies','Biology','Business and Accounting',
                  'Classics','Chemistry','Communication Studies','Computer Science','Earth and Environmental Sciences',
                  'Economics','Education','English','Health Sciences','History','Mathematics','Modern Languages and Literatures',
                  'Music','Physics','Politics and International Affairs','Philosophy','Psychology','Religion','Sociology','Theater Arts']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Length of fellowship"
                  required
                  :items="['1 < Month', '1-3 Months', '3-6 Months', '6-9 Months', '9-12 Months']"
                ></v-select>
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
</template>