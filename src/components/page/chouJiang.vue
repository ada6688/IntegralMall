<template>
    <div>
        <TopNav></TopNav>
        <span>抽奖测试页面</span>
    </div>
</template>
<script>
// 引用组件
import TopNav from '@/components/common/Topnav'

export default {
    name: 'App',
    components: {
        TopNav,
    },

    data() {
        return {

        }
    },
    mounted: function () {
        this.change()
    },
    methods: {
        change () {
        // console.log(22213425)
        document.getElementById('top-nav-logo').innerHTML = '<p>每日抽奖</p>'
        }
    }
}
</script>
<style>

</style>