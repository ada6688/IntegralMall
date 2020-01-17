<template>
  <div>
    <TopNav></TopNav>
    <div class="main-wrap shouye-contain">
      <!-- banner -->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="banner-item">
            <img src="../../assets/images/banner/sy_NBA_banner@3x.png" alt />
          </div>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/chouJiang">
            <div class="banner-item">
              <img src="../../assets/images/banner/sy_cgcj_banner@3x.png" alt />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <div class="banner-item">
            <img src="../../assets/images/banner/banner2.png" alt />
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-scrollbar index-banner-circle" slot="scrollbar"></div> -->
      </swiper>
      <!-- 滚动公告 -->
      <Notice></Notice>
      <!-- 推荐分类栏 -->
      <div class="recommend-wrap1">
        <div>
          <div class="items-list">
            <div class="products-T">
              <p class="products-T-active">推荐</p>
              <p>数码</p>
              <p>奖金</p>
              <p>生活精品</p>
              <p>奢华品</p>
              <p>&bull;&bull;&bull;</p>
            </div>
            <div class="items-pro">
              <div class="item-img-wrap">
                <img src="../../assets/images/products/hw_p30@3x.png" alt="">
              </div>
              <div class="item-pro-text">
                <b>华为手表</b>
                <p>华为_mate P30手机64G双卡双待全面屏手机P30手机全面屏手机P30手机</p>
                <span>72000积分</span>
              </div>
            </div>
            <div class="items-pro">
              <div class="item-img-wrap">
                <img src="../../assets/images/products/dior_xs@3x.png" alt="">
              </div>
              <div class="item-pro-text">
                <b>Dior香水</b>
                <p>Dior香水Dior香水Dior香水</p>
                <span>72000积分</span>
              </div>
            </div>
            <div class="items-pro">
              <div class="item-img-wrap">
                <img src="../../assets/images/products/sn_ds@3x.png" alt="">
              </div>
              <div class="item-pro-text">
                <b>Sony电视</b>
                <p>Sony电视Sony电视Sony电视Sony电视Sony电视</p>
                <span>72000积分</span>
              </div>
            </div>
            <div class="items-pro">
              <div class="item-img-wrap">
                <img src="../../assets/images/products/bgl_ls_bb@3x.png" alt="">
              </div>
              <div class="item-pro-text">
                <b>Sony电视</b>
                <p>Sony电视Sony电视Sony电视Sony电视Sony电视</p>
                <span>72000积分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
// 引用组件
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'
import Notice from '@/components/page/Notice'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import vuescroll from 'vuescroll'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav,
    swiper,
    swiperSlide,
    Notice,
    vuescroll
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      },
      noData: false, // 判断是否数据全部加载完成 true为全部加载完
      recommend: [], // 推荐
      digital: [], // 数码
      bonus: [], // 奖金
      life: [], // 生活精品
      lifeshow: [],
      luxury: [] // 奢华品
    }
  },
  created () {
    // axios
    //   .get('http://45.64.53.115:8000/api/mulu/tuijian/?format=json')
    //   .then(Response => {
    //     this.recommend = Response.data.results
    //     console.log(Response.data.results)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     alert('商品加载错误，请联系在线客服！')
    //   })
    axios
      .get('http://45.64.53.115:8000/api/mulu/tuijian/?format=json')
      .then(Response => {
        this.recommend = Response.data
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios
      .get('http://45.64.53.115:8000/api/mulu/shuma/?format=json')
      .then(Response => {
        this.digital = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios
      .get('http://45.64.53.115:8000/api/mulu/jiangjin/?format=json')
      .then(Response => {
        this.bonus = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios
      .get('http://45.64.53.115:8000/api/mulu/shenghuo/?format=json')
      .then(Response => {
        this.life = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios
      .get('http://45.64.53.115:8000/api/mulu/shehua/?format=json')
      .then(Response => {
        this.luxury = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
  },
  methods: {
    refreshStart (done) {
      setTimeout(() => {
        done()
      }, 1500)
    },
    // 加载开始
    loadStart (done) {
      setTimeout(() => {
        done()
      }, 1500)
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    jumpOrder (id) {
      orderid = id
      this.$router.push('/order')
    }
  }
}
</script>
<style>
.swiper-container {
  height: 100%;
  margin-bottom: -4px;
}
/* .el-tabs__nav-wrap{
  width: 100%
} */
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #ffffff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  height: 39px;
}
.el-tabs__nav-wrap.is-scrollable {
  padding: 0 20px !important;
  box-sizing: border-box;
}
.shouye-contain .el-tabs--border-card > .el-tabs__content {
  padding: 15px 15px 0 15px;
}
.el-tabs__nav-prev,.el-tabs__nav-next {
  width: 20px;
  height: 40px;
  color: #ffffff;
  position: absolute;
  top: -3px
}
</style>
