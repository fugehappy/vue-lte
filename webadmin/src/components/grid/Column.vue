<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'column',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
