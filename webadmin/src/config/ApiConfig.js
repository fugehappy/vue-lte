/**
 *
 * �����ⲿ�ӿ�����·��
 */
const apiUrlConfig = () => {
  let __DEV__ = process.env.NODE_ENV === 'production'
  if (!__DEV__) {
    // ����
    let apiHost = ''
    let apiRoot = `${apiHost}/manage/v1`
    let apiPlatformRoot = `${apiHost}/platform/v1`
    let apiStorageRoot = `${apiHost}/storage/v1`
    return {

    }
  } else {
    // ��Ʒ
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