import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    commit(types.FETCH_PRODUCT, response.data)
  })
  .catch((error) => {
    console.error('@@@', error)
  })
}

export const loginByEmail = ({ commit }, payload) => {
  // API request
  return services.user.loginByEmail(payload)
    .then((response) => {
    })
}
