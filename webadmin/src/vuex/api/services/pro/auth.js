import fetch from '../../../../lib/utils/fetch'

export default {
  /**
   * 获取所有资源列表
   */
  getAllResourcesList () {
    return fetch.get('/resources')
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 修改单个资源
   */
  addOneResources (request = {}) {
    return fetch.post('/resources', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 修改单个资源
   */
  updateOneResources (request = {}) {
    return fetch.put('/resources', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 删除单个资源
   */
  delOneResources (request = {}) {
    return fetch.delete('/resources/' + request.id)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
