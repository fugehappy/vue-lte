/**
 * 这个定义的是普通函数
 */
import Vue from 'vue'
import router from '../router.js'

/**
 * 状态码处理
 * @param res 返回的结果
 * @param fn 成功中执行的回调
 */
export const statusHandle = (res, fn) => {
  let vm = Vue.prototype
  if (!res) {
    vm.$message({
      message: '后台数据没有返回结果',
      type: 'error'
    })
    return
  }
  if (res.status) {
    switch (res.status) {
      case 500:
        vm.$message({
          message: '服务器或网络错误',
          type: 'error'
        })
        break
      case 401:
        vm.$message({
          message: '无权限',
          type: 'error'
        })
        break
      case 40317:
        vm.$message({
          message: '登录超时',
          type: 'error'
        })
        // 登录超时返回到登录页面
        router.push({ path: '/login' })
        break
      case 404:
        vm.$message({
          message: '资源未找到',
          type: 'error'
        })
        break
      case 200:
        // 响应成功
        typeof fn === 'function' && fn()
        break
      default:
        // 其他错误
        if (res.data) {
          let err = res.data.message
          if (err) {
            vm.$message({
              message: err,
              type: 'error'
            })
          } else {
            vm.$message({
              message: '未知错误',
              type: 'error'
            })
          }
        } else {
          vm.$message({
            message: '未知错误',
            type: 'error'
          })
        }
    }
  } else {
    console.error('后台数据返回格式有误')
  }
}
