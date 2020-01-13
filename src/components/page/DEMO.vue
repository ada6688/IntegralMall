<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list" :key="item.pk">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      demo: [],
      list: []
    }
  },
  created () {
    axios
      .get('http://45.64.53.115:8000/api/mulu/shenghuo/?format=json')
      .then(Response => {
        this.list = Response.data.results
      })
      .catch(error => {
        console.log(error)
        alert('商品加载错误，请联系在线客服！')
      })
  },
  methods: {
    getmore (url) {
      // console.log(url)
      axios.get(url)
        .then(Response => {
          // console.log(Response)
          if (Response.data.detail === '无效页面') {
            return false
          } else {
            this.demo = Response.data.results
            // console.log(this.demo)
          }
        })
    },
    loadMore (url = 'http://45.64.53.115:8000/api/mulu/shenghuo/?format=json') {
      this.loading = true
      console.log(this.demo)
      setTimeout(() => {
        // let last = this.list.length - 1
        // for (let i = 1; i <= 7; i++) {
        //   console.log(last)
        //   this.list.push(this.demo[last + i])
        // }
        if (this.list.length % 10 === 0) {
          let page = this.list.length / 10
          page = page + 1
          this.getmore(url + '&page=' + page)
          console.log('demo::' + this.demo)
          if (this.demo) {
            this.demo.forEach(function (item, index) {
              // console.log('list::::' + this.list)
              this.list.push(item)
            })
            this.loading = false
          } else {
            this.loading = true
          }
        }
      }, 2500)
    }
  }
}
</script>
<style>
#app{
  background: transparent !important
}
li{
  height: 50px;
  color: black;
  background-color: white;
  border-bottom: 1px solid red
}
</style>
