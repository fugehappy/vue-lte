/* 全局注册组件 */
import Vue from 'vue'
import Row from '../components/grid/Row'
import Column from '../components/grid/Column'
import Multiselect from 'vue-multiselect'
Vue.component('row', Row)
Vue.component('column', Column)
Vue.component('multiselect', Multiselect)
