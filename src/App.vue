<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="drawer" persistent disable-route-watcher)
      v-list(dense)
        v-list-tile(to="/" exact)
          v-list-tile-action: v-icon home
          v-list-tile-content: v-list-tile-title Home
        v-list-tile(to="/blog/")
          v-list-tile-action: v-icon book
          v-list-tile-content: v-list-tile-title Blog
        v-list-tile(to="/events/")
          v-list-tile-action: v-icon date_range
          v-list-tile-content: v-list-tile-tile Events
        v-list-group(v-for="(group, idx) in groups", v-model="group.active" :key="idx")
          v-list-tile(slot="item" :to="group.to" @click.stop="")
            v-list-tile-action: v-icon {{ group.icon }}
            v-list-tile-content: v-list-tile-title {{ group.title }}
            v-list-tile-action: v-icon keyboard_arrow_down
          v-list-tile(v-for="(path, idx) in group.paths" :key="idx" :to="path.to")
            v-list-tile-content: v-list-tile-title {{ path.title }}
            v-list-tile-action: v-icon {{ path.icon }}
    v-toolbar(app dark dense).primary
      v-toolbar-side-icon(@click.stop="toggleDrawer")
      router-link(tag="v-toolbar-title" to="/") Furman Computing in Comunity
      v-spacer
      template(v-if="!(user === undefined)")
        v-btn(v-if="!user" :href="loginUrl").accent Log In
        v-menu(v-else offset-y)
          v-btn(slot="activator").accent {{ user.displayName }} #[v-icon keyboard_arrow_down]
          v-list(dense)
            v-list-tile(:href="logoutUrl" style="{font-weight: 500}"): v-list-tile-content: v-list-tile-title Log Out
    main 
      v-content: v-container(fluid)
        v-fade-transition(mode="out-in")
          router-view
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      groups: [
        {
          to: '/students/',
          icon: 'school',
          title: 'Students',
          paths: [
            { to: '/students/projects/', title: 'Projects', icon: 'list' },
            { to: '/students/experiences/', title: 'Experiences', icon: 'map' },
            { to: '/students/courses/', title: 'Courses', icon: 'assignment' },
            { to: '/students/awards/', title: 'Awards', icon: 'star_border' }
          ]
        },
        {
          to: '/faculty/',
          icon: 'fa-file-text',
          title: 'Faculty',
          paths: [
            { to: '/faculty/student_fellows/', title: 'Student Fellows', icon: 'portrait' },
            { to: '/faculty/teaching_fellows/', title: 'Teaching Fellows', icon: 'contacts' },
            { to: '/faculty/courses/', title: 'Courses', icon: 'assignment' },
            { to: '/faculty/projects/', title: 'Projects', icon: 'list' }
          ]
        }
        // { to: '/courses/', icon: 'assessment', title: 'Courses' },
        // { to: '/partners/', icon: 'people', title: 'Partners' }
      ]
    }
  },
  computed: {
    loginUrl () {
      return `${this.$http.options.root}login?return=${this.path}`
    },
    logoutUrl () {
      return `${this.$http.options.root}logout?return=${this.path}`
    },
    path () {
      return encodeURIComponent(window.location.href)
    }
  },
  asyncComputed: {
    user: {
      async get () {
        try {
          let user = await this.$http.get('users/me')
          return user.body
        } catch (e) {
          console.error('Failed to get current user')
          console.error(e)
        }
      },
      default: undefined
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  created () {
    this.$router.afterEach((to, from) => {
      this.groups.forEach(group => {
        group.active = to.path.startsWith(group.to)
      })
    })
    this.groups.forEach(group => {
      group.active = this.$route.path.startsWith(group.to)
    })
  }
}
</script>

