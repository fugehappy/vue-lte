export default {
  loginByEmail (request = {}) {
    // 模拟后台请求响应
    return new Promise((resolve, reject) => {
      if (request.email === 'admin@sina.com') {
        let value = {
          request: {
            readyState: 4,
            response: {
              message: 'ok',
              token: 'eyYip2qNN-4W7frqZmxuhuNysjTRqr0eMVzl6A5XsdL0qQzlg==='
            },
            responseURL: '',
            statusText: 'ok',
            status: 200
          }
        }
        resolve(value)
      } else {
        let value = {
          request: {
            readyState: 4,
            response: {
              message: '参数错误'
            },
            responseURL: '',
            statusText: 'Bad Request',
            status: 400
          }
        }
        reject(value)
      }
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }
}
