import axios from 'axios'
import store from '../../vuex/store'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9728/',
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  return response
}, error => {
  console.log('err' + error) // for debug
  return Promise.reject(error)
})

export default service
