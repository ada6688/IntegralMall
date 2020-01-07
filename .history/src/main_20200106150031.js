// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/common.css'
import '../src/assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import {Cell, CellGroup, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs, Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar} from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import BScroll from 'better-scroll'

// Vue.use(BScroll)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  let str1 = '<p>个人中心</p>'
  let str2 = '<p>积分明细</p>'
  if (to.meta.title) {
    document.getElementById('top-logo-change').innerHTML = to.meta.title
    if (to.meta.title === str1) {
      document.getElementById('top-nav-left').innerHTML = '<img src="/static/topnav/cd.png" alt="菜单">'
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/kf.png" alt="客服">'
    } else if (to.meta.title === str2) {
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/kf.png" alt="客服">'
      document.getElementById('top-nav-left').innerHTML = '<i class="el-icon-arrow-left"></i>'
    } else {
      document.getElementById('top-nav-right').innerHTML = '<img src="/static/topnav/ss.png" alt="搜索">'
    }
    // document.title = to.meta.title
  }
  next()
})
