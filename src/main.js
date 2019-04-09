// 这是Vue实现的后台管理系统
// 导入Vue
import Vue from 'vue'
// 导入App根组件，所有内容，都在App组件中展示
import App from './App'
// 导入路由组件
import router from './router'

//  使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
