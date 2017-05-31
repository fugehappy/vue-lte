import axios from 'axios'

export default {
  getAll () {
    return axios.get('http://localhost:3000/products')
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  getOne (request = {}) {
    return axios.get('http://localhost:3000/products', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
