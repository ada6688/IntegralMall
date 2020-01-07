import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'
import jifen from '@/components/page/jifen'
import { Step, Steps, Icon } from 'vant'

Vue.use(Router)
Vue.use(Step).use(Steps)
Vue.use(Icon)
Vue.component('header-item', {
  props: ['message', 'backUrl'],
  template: `<div class="top-nav">
    <div id="top-nav-left" class="top-nav-left"  @click="goBack()">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div id="top-logo-change" class="top-nav-logo">
      <p>{{message}}</p>
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <img src="../../assets/images/topnav/kf.png" alt="客服">
    </div>
  </div>`
}),
export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {
      path: '/shouye',
      component: shouye
    },
    {
      path: '/Youhui',
      component: Youhui
    },
    {
      path: '/Vip',
      component: Vip
    },
    {
      path: '/Member',
      component: Member
      // children: [
      //   {path: 'jifen', component: jifen}
      // ]
    },
    {
      path: '/jifen',
      component: jifen
    }
  ]
})

