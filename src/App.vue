<template lang="pug">
  v-app
    v-navigation-drawer(app v-model="drawer" persistent enable-resize-watcher)
      v-list(dense)
        v-list-tile(to="/" exact @click="closeGroups")
          v-list-tile-action: v-icon home
          v-list-tile-content: v-list-tile-title Home
        //- TODO: cancel click when already open?
        v-list-group(v-for="(group, idx) in groups", v-model="group.active" :key="idx")
          v-list-tile(slot="item" :to="group.to")
            v-list-tile-action: v-icon {{ group.icon }}
            v-list-tile-content: v-list-tile-title {{ group.title }}
            v-list-tile-action: v-icon keyboard_arrow_down
          v-list-tile(v-for="(path, idx) in group.paths" :key="idx" :to="path.to")
            v-list-tile-content: v-list-tile-title {{ path.title }}
            v-list-tile-action: v-icon {{ path.icon }}
    v-toolbar(app dark dense).primary
      v-toolbar-side-icon(@click.stop="toggleDrawer")
      router-link(tag="v-toolbar-title" to="/") Furman Computing in Comunity
    main
      v-content: v-container(fluid)
        v-fade-transition(mode="out-in")
          router-view
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      groups: [
        {
          to: '/students/',
          icon: 'school',
          title: 'Students',
          active: this.$route.path.startsWith('/students/'),
          paths: [
            { to: '/students/projects/', title: 'Projects', icon: "list" },
            { to: '/students/experiences/', title: 'Experiences', icon: "map" },
            { to: '/students/courses/', title: 'Courses', icon: "assignment" },
            { to: '/students/awards/', title: 'Awards', icon: "star_border" }
          ]
        },
        {
          to: '/faculty/',
          icon: 'fa-file-text',
          title: 'Faculty',
          active: this.$route.path.startsWith('/faculty/'),
          paths: [
            { to: '/faculty/student_fellows/', title: 'Student Fellows' },
            { to: '/faculty/teaching_fellows/', title: 'Teaching Fellows' },
            { to: '/faculty/courses/', title: 'Courses' },
            { to: '/faculty/projects/', title: 'Projects' }
          ]
        }
        // { to: '/courses/', icon: 'assessment', title: 'Courses' },
        // { to: '/partners/', icon: 'people', title: 'Partners' }
      ]
    }
  },
  methods: {
    closeGroups () {
      this.groups.forEach(group => {
        group.active = false
      })
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>

