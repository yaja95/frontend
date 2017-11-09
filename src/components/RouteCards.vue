<template lang="pug">
  v-layout(row wrap)
    v-flex(v-for="(card, idx) in cards" :key="idx" xs12 md6 pb-3 pt-3 pl-3 pr-3)
      v-card(:to="card.route" dark="dark")
        v-card-media(:height="cardHeight" :src="card.img")
          v-container(fill-height fluid): v-flex(xs12).white--text.darken-background
            .headline.text-xs-center {{ card.title }}
            .subheading.text-xs-center {{ card.text }}
</template>

<style lang="stylus" scoped>
.darken-background
  background: rgba(0, 0, 0, 0.4)
</style>


<script>
export default {
  props: {
    cards: {
      type: Array,
      validator (value) {
        if (value.length % 2 !== 0) return false
        return value.every(card => card.img && card.route && card.title && card.text)
      }
    },
    cardHeight: {
      type: Number,
      default: 300
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
