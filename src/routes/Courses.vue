<template>
  <div>
  <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>CinC Courses</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
       <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="20"
      required
    ></v-text-field>
    <v-text-field
      label="Department"
      v-model="department"
      required
    ></v-text-field>
  </v-form>

    </v-flex>
  </v-layout>
  </div>
</template>
