<template>
  <select class="form-control" :disabled="isDisabled" :multiple="isMultiple" @change="handleChange">
    <option style="color: #333;font-weight: 700">-choose-</option>
    <option v-for="item in options" :value="item">
      {{ item }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'va-select',
  props: {
    options: {
      type: Array,
      default: []
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  created () {

  },
  methods: {
    handleChange () {
      const value = event.target.value
      this.$emit('change', value)
    }
  }
}
</script>
