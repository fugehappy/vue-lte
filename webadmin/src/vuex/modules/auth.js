import { services } from '../api'
// mutation-types
const GETALLRESOURCESLIST = 'GETALLRESOURCESLIST' // 所有资源
const state = {
  resourcesList: ''
}

const getters = {
  allResourcesList: state => state.resourcesList
}

const mutations = {
  /**
   * 获取所有资源的mutations
   */
  [GETALLRESOURCESLIST] (state, payload) {
    state.resourcesList = JSON.stringify(payload)
  }
}

const actions = {
  /**
   * 获取所有资源列表的action
   */
  getAllResourcesList ({commit}, payload) {
    return services.auth.getAllResourcesList()
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  }
}

export default {
  getters,
  state,
  mutations,
  actions
}
