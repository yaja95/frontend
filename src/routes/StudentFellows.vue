<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Department"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>
    <v-checkbox
      label="By clicking this box, you consent to having your application reviewed by those in charge"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Accounting',
        'Anthropology',
        'Art',
        'Asian Studies',
        'Biology',
        'Business and Accounting',
        'Classics',
        'Chemistry',
        'Communication Studies',
        'Computer Science',
        'Earth and Environmental Sciences',
        'Economics',
        'Education',
        'English',
        'Health Sciences',
        'History',
        'Mathematics',
        'Modern Languages and Literatures',
        'Music',
        'Physics',
        'Politics and International Affairs',
        'Philosophy',
        'Psychology',
        'Religion',
        'Sociology',
        'Theater Arts'
      ],

      checkbox: false
    }),
    methods: {
    }
  }
</script>