/**
 * 所有外部接口配置路径
 */
const apiUrlConfig = () => {
  let __DEV__ = process.env.NODE_ENV === 'production'
  if (!__DEV__) {
    // 开发
    let apiHost = ''
    let apiRoot = `${apiHost}/manage/v1`
    return {
      login: `${apiRoot}/user/login` // 登录
    }
  } else {
    // 产品
    let apiHost = ''
    let apiRoot = `${apiHost}/manage/v1`
    return {
      login: `${apiRoot}/user/login` // 登录
    }
  }
}

export {
  apiUrlConfig
}
