export default {
  loginByEmail (request = {}) {
    // 模拟后台请求响应
    return new Promise((resolve, reject) => {
      const userArr = [
        'admin@sina.com',
        'test@sina.com'
      ]
      if (userArr.indexOf(request.email) > -1) {
        let value = {
          response: {
            readyState: 4,
            data: {
              message: 'ok',
              token: 'eyYip2qNN-4W7frqZmxuhuNysjTRqr0eMVzl6A5XsdL0qQzlg==='
            },
            responseURL: '',
            statusText: 'ok',
            status: 200
          }
        }
        resolve(value.response)
      } else {
        let value = {
          response: {
            data: {
              message: '不存在此用户'
            },
            responseURL: '',
            statusText: 'Bad Request',
            status: 400
          }
        }
        reject(value.response)
      }
    })
    .then((response) => Promise.resolve(response))
    .catch((error) => Promise.reject(error))
  }
}
