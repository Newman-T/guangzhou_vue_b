// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 导入vue第三方包
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入与vue无关第三方包
import 'normalize.css'
import axios from 'axios'

// 导入自己写的模块
import router from './router'
// 根组件
import App from './App'
// 接口配置
import api from './js/api-config'

// 统一use启用vue插件
Vue.use(Vuex)
Vue.use(ElementUI)

// 统一添加配置
// 配置以后所有的请求都会自动使用这个域名
axios.defaults.baseURL='http://localhost:8899'
// 浏览器安全的机制,需要配置如果是跨域请求，浏览器是不会把本地的cookie信息携带提交请求，需要设置为true
axios.defaults.withCredentials = true

// 统一扩展Vue原型,加到原型方便组件使用
Vue.prototype.$http=axios
Vue.prototype.$api=api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
