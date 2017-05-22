/**
 *
 * 所有外部接口配置路径
 */
const apiUrlConfig = () => {
  let __DEV__ = process.env.NODE_ENV === 'production'
  if (!__DEV__) {
    // 开发
    let apiHost = ''
    let apiRoot = `${apiHost}/manage/v1`
    let apiPlatformRoot = `${apiHost}/platform/v1`
    let apiStorageRoot = `${apiHost}/storage/v1`
    return {

    }
  } else {
    // 产品
    let apiHost = ''
    let apiRoot = `${apiHost}/manage/v1`
    let apiPlatformRoot = `${apiHost}/platform/v1`
    let apiStorageRoot = `${apiHost}/storage/v1`
    return {
    
    }
  }
}

export {
  apiUrlConfig
}