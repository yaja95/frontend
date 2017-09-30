<template lang="pug">
  v-app(toolbar footer)
    v-navigation-drawer(persistent v-model="drawer" clipped)
      v-list(v-for="page in pages" :key="page.path")
        v-list-tile(:to="page.path" exact)
          v-list-tile-action: v-icon {{ page.icon }}
          v-list-tile-content: v-list-tile-title {{ page.title }}
    v-toolbar(fixed)
      v-toolbar-side-icon(@click="toggleDrawer")
      v-toolbar-title fu-dream-team-frontend
    main
      v-container(fluid)
        v-fade-transition(mode="out-in")
          router-view
    v-footer
</template>

<script>
export default {
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  data () {
    return {
      // I'd like to do this with this.$vuetify.breakpoint but I can't get it to work on page load
      drawer: window.innerWidth > 960,
      pages: [
        { path: '/', icon: 'home', title: 'Home' }
      ]
    }
  }
}
</script>
