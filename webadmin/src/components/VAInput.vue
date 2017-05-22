<template>

  <div v-if="isHorizontal"
    class="form-group"
  >

    <label :for="vaId" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <input
        :type="type"
        :class="[formControl, getSize]"
        :id="vaId"
        :placeholder="placeholder"
        :value="currentValue"
        v-bind="$props"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur">
      </input>
    </div>

  </div>
  <input v-else
         :type="type"
         :class="[formControl, getSize]"
         :id="vaId"
         :placeholder="placeholder"
         :value="currentValue"
         v-bind="$props"
         ref="input"
         @input="handleInput"
         @focus="handleFocus"
         @blur="handleBlur">
  </input>


</template>

<script>
export default {
  name: 'va-input',
  data () {
    return {
      currentValue: this.value
    }
  },
  props: {
    vaId: String,
    title: String,
    value: [String, Number],
    placeholder: String,
    size: String,
    readonly: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    maxlength: Number,
    minlength: Number,
    max: {},
    min: {},
    step: {},
    isFormControl: {
      type: Boolean,
      default: true
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSize () {
      if (!this.size) {
        return ''
      }

      return 'input-' + this.size
    },
    formControl () {
      return this.isFormControl ? 'form-control' : ''
    }
  },
  created () {

  },
  methods: {
    handleInput () {
      const value = event.target.value
      this.$emit('input', value)
    },
    handleFocus () {
      this.$emit('focus', event)
    },
    handleBlur () {
      this.$emit('blur', event)
    }
  }
}
</script>
