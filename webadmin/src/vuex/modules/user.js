import * as types from '../mutation-types'

const state = {
  main: {
    name: 'Alexander',
    position: 'Web Developer',
    state: {
      color: '#3c763d',
      name: 'Online'
    },
    createdAt: new Date()
  },
  token: ''
}

const mutations = {
  [types.USER_TOKEN] (state, payload) {
    console.log('mutation', payload)
    state.token = payload
  }
}

export default {
  state,
  mutations
}
