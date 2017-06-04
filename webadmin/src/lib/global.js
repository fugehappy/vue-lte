/* 全局注册组件 */
import Vue from 'vue'
import Row from '../grid/Row'
import Column from '../grid/Column'
import Multiselect from 'vue-multiselect'
Vue.component('row', Row)
Vue.component('column', Column)
Vue.component('multiselect', Multiselect)
