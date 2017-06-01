export default {
  loginByEmail (request = {}) {
    return new Promise((resolve, reject) => {
      if (request) {
        let response = {
          status: 200,
          data: {
            msg: 'ok',
            token: 'wdhfhsdfiushdfuisdhf43495468djksad'
          }
        }
        resolve()
      } else {
        let error = {
          status: 400,
          data: {
            msg: '参数错误'
          }
        }
        reject(error)
      }
    })
  }
}
