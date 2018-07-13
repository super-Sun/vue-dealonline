import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/payFine/index'
import Jdsbh from '@/views/payFine/jdsbh'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      title: 'page1',
      component: Index
    },
    {
      path: '/next',
      name: 'jdsbh',
      title: 'page2',
      component: Jdsbh
    }
  ]
})
