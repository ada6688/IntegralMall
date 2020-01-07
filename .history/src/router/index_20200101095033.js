import Vue from 'vue'
import Router from 'vue-router'
import MainNav from '@/components/common/MainNav'
import TopNav from '@/components/common/Topnav'
import shouye from '@/components/page/shouye'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Mainnav', component: MainNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {path: '/shouye', component: shouye},
    {path: '/Youhui', component: Youhui},
    {path: '/Vip', component: Vip},
    {path: '/Member', component: Member}
  ]
})
