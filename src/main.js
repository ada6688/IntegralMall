// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/common.css'
import '../src/assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Step, Steps, Icon } from 'vant'
import VueScroller from 'vue-scroller'
// import VueTouch from 'vue-touch'
// import 'vue-touch/dist/vue-touch.js'

Vue.prototype.HOST = '/api'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Step).use(Steps)
Vue.use(Icon)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueScroller)

Vue.config.productionTip = false
window.token = ''
window.orderid = 0
window.requirePath = '/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (token) { // 判断当前的token是否存在
      next()
    } else {
      window.requirePath = to.fullPath
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }
})
