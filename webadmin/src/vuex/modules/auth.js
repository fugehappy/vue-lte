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
    return services.pro.getAllResourcesList(payload)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  },

  /**
   * 修改单个资源的action
   */
  addOneResources ({commit}, payload) {
    return services.pro.addOneResources(payload)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  },

  /**
   * 修改单个资源的action
   */
  updateOneResources ({commit}, payload) {
    return services.pro.updateOneResources(payload)
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  },

  /**
   * 修改单个资源的action
   */
  delOneResources ({commit}, payload) {
    return services.pro.delOneResources(payload)
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
