import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/page/shouye'
import MainNav from '@/components/page/MainNav'
import Member from '@/components/page/Member'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/MainNav', component: MainNav},
    {path: '/', component: shouye},
    {path: '/shouye', component: shouye},
    {path: '/Youhui', component: Youhui},
    {path: '/Vip', component: Vip},
    {path: '/Member', component: Member}
  ]
})
