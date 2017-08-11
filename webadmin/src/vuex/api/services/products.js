import fetch from '../../../lib/utils/fetch'

export default {
  getAll (request = {
  }) {
    return fetch.get('/products', { params: request })
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  getOne (request = {}) {
    return fetch.get('/products', { params: request })
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
