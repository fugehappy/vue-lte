import axios from 'axios'

export default {
  getAll () {
    return axios.get('http://localhost:9728/products')
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  getOne (request = {}) {
    return axios.get('http://localhost:9728/products', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
