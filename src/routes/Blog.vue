<template v-for="post in posts" :key="post.title">
 <div id="app">
  <v-app light><v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">New Blog Post</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">New Blog Post</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field label="Title" required :v-model="title"></v-text-field>
              </v-flex>
          <v-flex xs12 sm6 md12>
            <v-text-field
              name="input-7-1"
              label="Content"
              multi-line
              required
              :v-model="contents"
            ></v-text-field>
          </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="primary darken-1" flat @click.native="saveNewBlog">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      <v-content>
        <v-container>
          <v-layout xs12 md5>
            <v-flex row wrap align-left>
              <div v-for="post in posts" :key="post.title">
                <v-card class="my-3" hover>
                  <v-card-media
                    class="black--text"
                    height="100px"
                  >
                    <v-container fill-height fluid align-left>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">{{ post.title }}</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-text>
                    {{ post.contents }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn icon class="light-blue--text">
                      <v-icon medium>fa-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                      <v-icon medium>fa-facebook</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        contents: '',
        dialog: false,
        valid: false,
        Title: '',
        content: [
          (v) => !!v || 'Title is required',
          (v) => v.length <= 268 || 'Name must be less than 268 characters'
        ]
      }
    },
    asyncComputed: {
      async posts () {
        let posts = await this.$http.get('blog')
        return posts.body
      }
    },
    methods: {
      async saveNewBlog () {
        let blog = {
          title: this.title,
          contents: this.contents
        }
        let response = await this.$http.put('blog', blog)
        console.log(response)
      }
    }
  }
</script>
