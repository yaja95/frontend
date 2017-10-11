<template lang="pug">
  v-app(toolbar)
    v-toolbar(app dark dense).primary
      router-link(to="/" tag="v-toolbar-title") Furman Computing in Comunity
      v-spacer
      router-link(to="/students")
        v-btn.accent Students #[v-icon.ml-2 school]
      router-link(to="/faculty")
        v-btn.accent Faculty #[v-icon.ml-2 fa-file-text]
      router-link(to="/courses")
        v-btn.accent Courses #[v-icon.ml-2 assessment]
      router-link(to="/partners")
        v-btn.accent Partners #[v-icon.ml-2 people]
    main
      v-container(fluid)
        v-fade-transition(mode="out-in")
          router-view
</template>
