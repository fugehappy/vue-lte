/**
 * plugin
 * https://vuefe.cn/v2/guide/plugins.html
 * Vue.use('插件名')或者挂载到Vue.prototype上
 */
import { MessageBox } from 'element-ui'
import router from '../router.js'

export default{
  install (Vue, options) {
    Vue.prototype.$promptReload = function () {
      MessageBox.confirm('加载失败，点击确认重新加载', '提示', {
        confirmButtonText: '确定',
        type: 'error'
      }).then(() => {
        // 确定后刷新当前页面
        router.go(router.currentRoute)
      })
    }
  }
}
