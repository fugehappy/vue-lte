import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    commit(types.FETCH_PRODUCT, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const loginByEmail = ({ commit }, payload) => {
  return services.user.loginByEmail(payload)
    .then((response) => {
      commit(types.USER_TOKEN, response.request.response.token)
      return response
    })
    .catch((error) => {
      return error
    })
}
