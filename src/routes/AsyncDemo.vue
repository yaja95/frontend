<template lang="pug">
  div
    p The below is the response to a GET request to #[code api/debug/echo].
    code(v-if="echo") {{ echo }}
    p(v-else) Loading...
</template>

<script>
export default {
  asyncComputed: {
    async echo () {
      let echo = await this.$http.get('debug/echo')
      return JSON.stringify(echo, null, 2)
    }
  }
}
</script>