// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import secondcomponent from './components/secondcomponent.vue'
import VueResource from '_vue-resource@1.5.1@vue-resource'
import Axios from '_axios@0.19.0@axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Axios)
Vue.use(iView)
/* eslint-disable no-new */
// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
