import Vue from 'vue'
import Router from 'vue-router'

// examples
import DashboardV1 from 'pages/examples/Dashboard.v1'
import DashboardV2 from 'pages/examples/Dashboard.v2'
import InfoBoxExample from 'pages/examples/InfoBoxExample'
import ChartExample from 'pages/examples/ChartExample'
import AlertExample from 'pages/examples/AlertExample'
import ModalExample from 'pages/examples/ModalExample'
import WidgetsExample from 'pages/examples/WidgetsExample'
import APIExample from 'pages/examples/APIExample'

// UI Element Groups
import General from 'pages/ui-elements/General'
import Icons from 'pages/ui-elements/Icons'
import Buttons from 'pages/ui-elements/Buttons'
import Sliders from 'pages/ui-elements/Sliders'
import Timeline from 'pages/ui-elements/Timeline'
import Modals from 'pages/ui-elements/Modals'

// forms
import GeneralElements from 'pages/forms/GeneralElements'
import AdvancedElements from 'pages/forms/AdvancedElements'

// login
import Login from 'pages/Login'
import ForgetPwd from 'pages/ForgetPwd'
import Home from 'Home'
import Hello from 'pages/Hello'
import Sample from 'pages/Sample'
import Err404 from 'pages/error/404'

// other
import Resources from 'pages/pro/role/Resources'

Vue.use(Router)

export default new Router({
  mode: 'hash', // mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: '/sample',
          name: 'Sample',
          component: Sample
        },
        {
          path: '/dashboard/v1',
          name: 'DashboardV1',
          component: DashboardV1
        },
        {
          path: '/dashboard/v2',
          name: 'DashboardV2',
          component: DashboardV2
        },
        {
          path: '/examples/infobox',
          name: 'InfoBoxExample',
          component: InfoBoxExample
        },
        {
          path: '/examples/chart',
          name: 'ChartExample',
          component: ChartExample
        },
        {
          path: '/examples/alert',
          name: 'AlertExample',
          component: AlertExample
        },
        {
          path: '/examples/modal',
          name: 'ModalExample',
          component: ModalExample
        },
        {
          path: '/examples/widgets',
          name: 'WidgetsExample',
          component: WidgetsExample
        },
        {
          path: '/examples/api-example',
          name: 'APIExample',
          component: APIExample
        },
        {
          path: '/ui-elements/general',
          name: 'General',
          component: General
        },
        {
          path: '/ui-elements/icons',
          name: 'Icons',
          component: Icons
        },
        {
          path: '/ui-elements/buttons',
          name: 'Buttons',
          component: Buttons
        },
        {
          path: '/ui-elements/sliders',
          name: 'Sliders',
          component: Sliders
        },
        {
          path: '/ui-elements/timeline',
          name: 'Timeline',
          component: Timeline
        },
        {
          path: '/ui-elements/modals',
          name: 'Modals',
          component: Modals
        },
        {
          path: '/forms/general-elements',
          name: 'GeneralElements',
          component: GeneralElements
        },
        {
          path: '/forms/advanced-elements',
          name: 'AdvancedElements',
          component: AdvancedElements
        },
        {
          path: '/pro/resources',
          name: 'Resources',
          component: Resources
        },
        {
          path: '/404',
          name: '404',
          component: Err404
        }
      ]
    },
    { path: '*', redirect: '/404' }
  ],
  linkActiveClass: 'active'
})
// 动态路由
// export const asyncRouterMap = []
