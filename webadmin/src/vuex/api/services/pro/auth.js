import fetch from '../../../../lib/utils/fetch'

export default {
  /**
   * 获取所有资源列表
   */
  getAllResourcesList () {
    return fetch.get('/resources')
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
