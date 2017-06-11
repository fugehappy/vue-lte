import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    commit(types.FETCH_PRODUCT, response.data)
    return response.data
  })
  .catch((error) => {
    console.error(error)
    return error
  })
}

export const loginByEmail = ({ commit }, payload) => {
  return services.user.loginByEmail(payload)
    .then((response) => {
      // 将token写入sessionStorage或者Cookies中
      sessionStorage && sessionStorage.setItem('token', response.data.token)
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
