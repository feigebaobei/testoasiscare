import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import titleArea from '@/components/titleArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'index',
      component: index
    },
    {
      path: '/titleArea',
      name: '/titleArea',
      component: titleArea
    }
  ]
})
