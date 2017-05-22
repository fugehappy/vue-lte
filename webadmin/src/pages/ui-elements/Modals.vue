<template>
  <div>
    Modals Page
    <va-input
      placeholder="username"
      type="text"
      v-model="username"
      @input="handleInput">
    </va-input>
    <va-select :options="selectList" v-model="selectValue" @change="handleSelect"></va-select>
    <button @click="handleSubmit">click</button>
  </div>
</template>

<script>
import VAInput from '../../components/VAInput'
import VASelect from '../../components/VASelect'
export default {
  name: 'Modals',
  data () {
    return {
      username: 'admin',
      selectList: ['wang', 'lee', 'team', 'game'],
      selectValue: ''
    }
  },
  components: {
    'va-input': VAInput,
    'va-select': VASelect
  },
  created () {

  },
  methods: {
    handleSubmit () {
      console.log('handleSubmit', this.username)
    },
    handleInput () {
      console.log('handleInput', this.username)
    },
    handleFocus () {
      console.log('handleFocus', this.username)
    },
    handleSelect () {
      console.log('select', this.selectValue)
    }
  }
}
</script>
