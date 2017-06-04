// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

import EventBus from './lib/eventBus.js'
import axios from 'axios'

// http request 拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  let token = sessionStorage && sessionStorage.getItem('token')
  if (token) {
    // 如果token存在。说明已经登录了
    if (to.path === '/') {
      next({ path: '/hello' })
    } else {
      next()
    }
  } else {
    // token不存在
    if (whiteList.indexOf(to.path) !== -1) {
      //  在免登录白名单，直接进入
      next()
    } else {
      // 否则全部重定向到登录页
      next({ path: '/login' })
    }
  }
})

/* eslint-disable no-new */
/* router, store */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
