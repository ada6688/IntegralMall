import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Youhui from '@/components/page/Youhui'
import Vip from '@/components/page/Vip'
import login from '@/components/page/login'
import Member from '@/components/member/Member'
import Mingxi from '@/components/member/mingxi/mingxi'
import Duihuan from '@/components/member/duihuan/duihuan'
import Guanyu from '@/components/member/guanyu/guanyu'
import Yiwen from '@/components/member/yiwen/yiwen'
import Guize from '@/components/member/guize/guize'
import Order from '@/components/page/order'
import ChouJiang from '@/components/page/chouJiang'
import demo from '@/components/page/DEMO'
import { Step, Steps, Icon } from 'vant'
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.use(Router)
Vue.use(Step).use(Steps)
Vue.use(Icon)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {path: '/shouye', component: shouye},
    {path: '/Youhui', component: Youhui},
    {path: '/Vip', component: Vip},
    {path: '/login', component: login},
    {path: '/order', component: Order},
    {path: '/demo', name: 'login', component: demo},
    {
      path: '/Member',
      component: Member,
      meta: {
        index: 2,
        title: '<p>个人中心</p>',
        requireAuth: true
      }
    },
    {
      path: '/mingxi',
      component: Mingxi,
      meta: {index: 2, title: '<p>积分明细</p>'}
    },
    {
      path: '/duihuan',
      component: Duihuan,
      meta: {index: 2, title: '<p>兑换记录</p>'}
    },
    {
      path: '/guanyu',
      component: Guanyu,
      meta: {index: 2, title: '<p>关于积分</p>'}
    },
    {
      path: '/yiwen',
      component: Yiwen,
      meta: {index: 2, title: '<p>常见疑问</p>'}
    },
    {
      path: '/guize',
      component: Guize,
      meta: {index: 2, title: '<p>规则与条款</p>'}
    },
    {
      path: '/chouJiang',
      component: ChouJiang
    }
  ]
})
