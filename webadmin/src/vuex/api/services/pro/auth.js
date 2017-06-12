import axios from 'axios'

export default {
  /**
   * 获取所有角色列表
   */
  getAllRoleList (request = {
  }) {
    // return Promise.resolve({data: data})
    // let url = apiUrlConfig().apiRoot + '/api/roles'
    return axios.get('/api/roles', {params: request})
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 获取所有资源列表
   */
  getAllResourcesList (request = {
  }) {
    return axios.get('/api/resources?page_size=0', request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 更新一个角色的资源表
   */
  updateOneRoleList (request = {
  }) {
    // action发过来的数据进行处理
    let permissionsArr = []
    for (let i = 0; i < request.data.length; i++) {
      permissionsArr.push({
        key: request.data[i].key,
        available_operations: []
      })
    }
    for (let j = 0; j < permissionsArr.length; j++) {
      for (let k = 0; k < request.data.length; k++) {
        if (permissionsArr[j].key === request.data[k].key) {
          if (request.data[k].checkGroup[0]) {
            permissionsArr[j].available_operations.push('c')
          }
          if (request.data[k].checkGroup[1]) {
            permissionsArr[j].available_operations.push('r')
          }
          if (request.data[k].checkGroup[2]) {
            permissionsArr[j].available_operations.push('u')
          }
          if (request.data[k].checkGroup[3]) {
            permissionsArr[j].available_operations.push('d')
          }
        }
      }
    }
    for (let j = 0; j < permissionsArr.length; j++) {
      if (permissionsArr[j].available_operations.length) {
        permissionsArr[j].available_operations = permissionsArr[j].available_operations.join(' ')
      } else {
        permissionsArr[j].available_operations = ''
      }
    }
    let param = {
      name: request.name,
      permissions: permissionsArr
    }

    return axios.put('/api/roles/' + request.id, param)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 新增单个角色
   */
  addOneRole (request = {
  }) {
    let permissionsArr = []
    for (let i = 0; i < request.data.length; i++) {
      permissionsArr.push({
        key: request.data[i].key,
        available_operations: []
      })
    }
    for (let j = 0; j < permissionsArr.length; j++) {
      for (let k = 0; k < request.data.length; k++) {
        if (permissionsArr[j].key === request.data[k].key) {
          if (request.data[k].checkGroup[0]) {
            permissionsArr[j].available_operations.push('c')
          }
          if (request.data[k].checkGroup[1]) {
            permissionsArr[j].available_operations.push('r')
          }
          if (request.data[k].checkGroup[2]) {
            permissionsArr[j].available_operations.push('u')
          }
          if (request.data[k].checkGroup[3]) {
            permissionsArr[j].available_operations.push('d')
          }
        }
      }
    }
    for (let j = 0; j < permissionsArr.length; j++) {
      if (permissionsArr[j].available_operations.length) {
        permissionsArr[j].available_operations = permissionsArr[j].available_operations.join(' ')
      } else {
        permissionsArr[j].available_operations = ''
      }
    }
    let param = {
      name: request.name,
      permissions: permissionsArr
    }

    return axios.post('/api/roles/', param)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 修改单个角色名称
   */
  updateOneRoleName (request = {
  }) {
    return axios.put('/api/roles/' + request.id, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  },

  /**
   * 删除单个角色
   */
  deleteOneRole (request = {
  }) {
    return axios.delete('/api/roles/' + request.id, request)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error))
  }
}
