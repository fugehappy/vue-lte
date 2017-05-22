<template lang="html">
  <div class="">
    <h1>Hello</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.fetchProduct()
  },
  methods: {
    ...mapActions([
      'fetchProduct'
    ])
  }
}
</script>

<style lang="css">
</style>
