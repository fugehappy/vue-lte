<template lang="html">
  <div class="">
    <h1>Hello</h1>
    <multiselect
      v-model="selected"
      :options="options">
    </multiselect>
  </div>
</template>
<script>
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
</script>
<style lang="css">
</style>
