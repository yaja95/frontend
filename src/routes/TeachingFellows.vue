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
    <v-flex xs12>
      <input id="file" type="file" name="file"/>
    </v-flex>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>
  import UploadButton from '@/components/UploadButton'

  export default {
    components: {
      UploadButton
    },
    data: () => ({
      file: null,
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
      fileSelectedFunc (file) {
        console.log(file)
        this.file = file
      },
      async submit () {
        const filename = await this.uploadFile()
        if (filename) {
          // do remaining bits
        }
      },
      async uploadFile () {
        const file = document.getElementById('file').files[0]
        if (!file) return null
        let data = new FormData()
        data.append('file', file)
        const path = await this.$http.post('upload', data)
        return path.body
      }
    }
  }
</script>