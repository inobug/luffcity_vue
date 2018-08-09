import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import Shoppingcar from '@/components/Shoppingcar'

Vue.use(Router)

// export default new Router({
var routeArray= [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/course',
      name: '课程',
      component: Course
    },
    {
      path: '/shoppingcar',
      name: '我的购物车',
      component: Shoppingcar
    }
  ]
 // 生成路由实例
var routerObj = new Router({
  mode: 'history',
  routes: routeArray
})
// 将路由实例向外抛出
export default routerObj
