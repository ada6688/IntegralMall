<template>
  <div>
    <TopNavC for-child-msg='搜索结果'></TopNavC>
    <div class="main-second-wrap">
        <div class="search-main">
        <input type="text" class="search-box" v-model="inWord" placeholder="请输入商品名称">
        <button class="search-btn" @click="SearchAgain">搜索</button>
        </div>
        <div class="recommend-wrap1">
        <div>
          <div class="items-list" v-if="isGet=='no'">
            <div class="items-pro" v-for="goods in SearchData" v-bind:key="goods.pk" @click="jumpOrder(goods.pk)">
                <div class="item-img-wrap"  v-if="goods.app_img">
                    <img :src="site + goods.app_img.url" alt="">
                </div>
                <div class="item-img-wrap"  v-else>
                    <img :src="site + goods.pc_img.url" alt="">
                </div>
                <div class="item-pro-text">
                  <b>{{ goods.title }}</b>
                  <p>{{ goods.description }}</p>
                  <span>{{ goods.points }}积分</span>
                </div>
            </div>
          </div>
          <div v-else-if="isGet=='yes'">
              <p style="color:#FFFFFF">关于&nbsp;<span style="color:red">"{{ searchWord }}"</span>&nbsp;的搜索结果不存在</p>
          </div>
          <div v-else></div>
        </div>
      </div>
    </div>
    <!-- <Result></Result> -->
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopnavC'
import axios from 'axios'
import vuescroll from 'vuescroll'
// import Result from '@/components/page/result'

const site = window.site

export default {
  components: {
    TopNavC,
    vuescroll
  },
  data() {
      return {
        searchWord: window.search,
        SearchData: [],
        inWord: '',
        notice: '',
        isGet: ''
      }
  },
  methods: {
    goBack () {
      if (window.history.length <= 1) {
        this.$router.push({path: '/'})
        return false
      } else {
        this.$router.go(-1)
      }
    },
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
    SearchAgain () {
        axios.get(site + '/api/mulu/?format=json&search=' + this.inWord)
      .then(Response => {
        this.SearchData = Response.data.results;
        window.search = this.inWord
        this.searchWord = window.search
        this.isGet = this.SearchData.length == 0 ? 'yes' : 'no'
      })
      .catch(error => {
        console.log(error)
        // alert('商品加载错误，请联系在线客服！')
      })
     },
     jumpOrder (id) {
      window.orderid = id
      this.$router.push('/order')
      }
    },
created () {
    axios.get(site + '/api/mulu/?format=json&search=' + window.search)
      .then(Response => {
        this.SearchData = Response.data.results;
        this.isGet = this.SearchData.length == 0 ? 'yes' : 'no'
      })
      .catch(error => {
        console.log(error)
        // alert('商品加载错误，请联系在线客服！')
      })
  },
}
</script>
<style>
.search-main{
    margin:16.67pt 17pt 0 16.67pt;
    height: 36.67px;
}
.search-box{
    background: #2A2C35;
    color: #ffffff;
    position: absolute;
    left: 16.67px;
    width: 70%;
    height: 36.67px;
    border: none;
    padding-left: 10px;
}
input:focus{
    outline: none;
}
.search-btn{
    font-size: 15.33px;
    width: 15%;
    height: 36.67px;
    margin-left: 16.67px;
    position: absolute;
    right: 17px;
    text-align: center;
    background: #B58024;
    color: #FFFFFF;
    border: none;
    border-radius: 0%;
    font-family: "PingFangSC";
}

</style>
