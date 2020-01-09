<template>
  <div>
    <TopNav></TopNav>
    <div class="main-wrap shouye-contain">
      <!-- banner -->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="banner-item">
            <img src="../../assets/images/banner/banner2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner-item">
            <img src="../../assets/images/banner/banner2_2.png" alt="">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner-item">
            <img src="../../assets/images/banner/banner2_3.png" alt="">
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-scrollbar index-banner-circle" slot="scrollbar"></div> -->
      </swiper>
      <!-- 滚动公告 -->
      <Notice></Notice>
      <!-- 推荐分类栏 -->
      <div class="recommend-wrap">
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="推荐">
              <div v-for="goods in recommend" v-bind:key="goods.item" class="products-item">
                <div class="product-item-text">
                  <p>{{goods.title}}</p>
                  <span>{{goods.points}}积分</span>
                </div>
                <div class="product-item-img">
                  <img :src="'http://45.64.53.115:8000'+goods.img_url.url" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="数码">
              <div v-for="goods in digital" v-bind:key="goods.item" class="products-item">
                <div class="product-item-text">
                  <p>{{goods.title}}</p>
                  <span>{{goods.points}}积分</span>
                </div>
                <div class="product-item-img">
                  <img :src="'http://45.64.53.115:8000'+goods.img_url.url" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="奖金">
              <div v-for="goods in bonus" v-bind:key="goods.item" class="products-item">
                <div class="product-item-text">
                  <p>{{goods.title}}</p>
                  <span>{{goods.points}}积分</span>
                </div>
                <div class="product-item-img">
                  <img :src="'http://45.64.53.115:8000'+goods.img_url.url" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="生活精品">
              <div v-for="goods in life" v-bind:key="goods.item" class="products-item">
                <div class="product-item-text">
                  <p>{{goods.title}}</p>
                  <span>{{goods.points}}积分</span>
                </div>
                <div class="product-item-img">
                  <img :src="'http://45.64.53.115:8000'+goods.img_url.url" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="奢华品">
              <div v-for="goods in luxury" v-bind:key="goods.item" class="products-item">
                <div class="product-item-text">
                  <p>{{goods.title}}</p>
                  <span>{{goods.points}}积分</span>
                </div>
                <div class="product-item-img">
                  <img :src="'http://45.64.53.115:8000'+goods.img_url.url" alt="">
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
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
import {swiper, swiperSlide} from 'vue-awesome-swiper'
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
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true
      },
      noData: false, // 判断是否数据全部加载完成 true为全部加载完
      recommend: [], // 推荐
      digital: [], // 数码
      bonus: [], // 奖金
      life: [], // 生活精品
      luxury: [] // 奢华品
    }
  },
  created () {
    axios.get('http://45.64.53.115:8000/api/mulu/tuijian/?format=json')
      .then(Response => {
        this.recommend = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios.get('http://45.64.53.115:8000/api/mulu/shuma/?format=json')
      .then(Response => {
        this.digital = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios.get('http://45.64.53.115:8000/api/mulu/jiangjin/?format=json')
      .then(Response => {
        this.bonus = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios.get('http://45.64.53.115:8000/api/mulu/shenghuo/?format=json')
      .then(Response => {
        this.life = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
    axios.get('http://45.64.53.115:8000/api/mulu/shehua/?format=json')
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
    }
  }
}
</script>
<style>
.swiper-container{
  height: 100%;
  margin-bottom: -4px;
}
/* .el-tabs__nav-wrap{
  width: 100%
} */
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 39px;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px !important;
  box-sizing: border-box;
}
.shouye-contain .el-tabs--border-card>.el-tabs__content {
  padding: 15px 15px 0 15px;
}
.el-tabs__nav-prev{
  width: 20px;
  top: -5px;
}
.el-tabs__nav-next{
  width: 20px;
  height: 40px;
  position: absolute;
  top: -2px;
  right: 2px;
}
.el-icon-arrow-right{
  height: 40px;
  line-height: 40px;
  position: relative;
  right: 0;
  margin: 0
}
</style>
