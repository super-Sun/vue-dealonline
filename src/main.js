// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {LoadingPlugin} from 'vux'
// 引入插件
import Toast from '@components/common/toast'
// 使用插件
Vue.use(Toast)

Vue.config.productionTip = false
Vue.use(LoadingPlugin)
Vue.use(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
