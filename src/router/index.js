// 导入Vue
import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入登陆组件
import Login from '@/components/login/Login'

// 安装路由插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})
