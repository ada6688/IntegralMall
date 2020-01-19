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

Vue.use(Router)

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
    {
      path: '/order',
      component: Order,
      meta: {
        index: 2,
        requireAuth: true
      }
    },
    {
      path: '/Member',
      component: Member,
      meta: {
        index: 2,
        requireAuth: true
      }
    },
    {
      path: '/mingxi',
      component: Mingxi,
      meta: {
        index: 2,
        requireAuth: true
      }
    },
    {
      path: '/duihuan',
      component: Duihuan,
      meta: {
        index: 2,
        requireAuth: true
      }
    },
    {
      path: '/guanyu',
      component: Guanyu,
    },
    {
      path: '/yiwen',
      component: Yiwen,
    },
    {
      path: '/guize',
      component: Guize,
    },
    {
      path: '/chouJiang',
      component: ChouJiang,
      meta: {
        index: 2,
        requireAuth: true
      }
    }
  ]
})
