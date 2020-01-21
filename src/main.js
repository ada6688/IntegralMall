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
import Axios from 'axios'


Vue.prototype.HOST = '/api'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Step).use(Steps)
Vue.use(Icon)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueScroller)

Vue.config.productionTip = false
window.token = localStorage.getItem('token')
window.orderid = 115
window.oldPath = '/'
window.requirePath = '/'
window.search = ''

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (token) { // 判断当前的token是否存在
      Axios({
        method: 'get',
        url: 'https://bmw1984.com/api/auth/test/?format=json',
        headers: {
          Authorization: 'Token ' + window.token
        }
      })
      .then(res => {
        next()
      }).catch(error =>{
        alert('登录信息已经过期，请重新登录')
        window.requirePath = to.fullPath
        next({
          path: '/login',
        })
      })
    } else {
      window.requirePath = to.fullPath
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

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

