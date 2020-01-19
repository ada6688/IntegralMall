<template>
  <div>
    <TopNavC for-child-msg='搜索页面'></TopNavC>
    <div class="main-second-wrap">
        <div class="search-main">
            <input type="text" class="search-box" v-model="inWord" placeholder="请输入商品名称">
            <button class="search-btn" @click="goSearchData">搜索</button>
        </div>        
        <div class="search-history">
            <p>最近搜索</p>
            <div class="last-words">
              <span v-for="lastWord in lastWords" :key="lastWord" @click="goLastSearch(lastWord)">{{ lastWord }}</span>                
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopnavC'
export default {
  components: {
    TopNavC    
  },
  data() {
      return {
          inWord: '',          
          lastWords: ['华为畅享', '华为', 'apple','mackbook pro', '手表', 'air max guile 运动鞋','运动鞋' ]
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
    goSearchData(){        
      window.search = this.inWord
      this.$router.push({
          name: 'search',
      })
    },
    goLastSearch(lastWord){
      window.search = this.inWord
      this.$router.push({
          name: 'search',
      })
    }
    
  }
}
</script>
<style scoped>
.search-main{
    margin:16.67pt 17pt 12.67pt 16.67pt;
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
    font-family: "PingFangSC"
}
.search-history{
    font-size: 14px;  
    margin:16.67pt 17pt 12.67pt 16.67pt;
    color:#999899;
}
.search-history p{
    text-align: left;
}
.last-words{    
    text-align: left;
    width: 90%;        
    display: flex;
    flex-wrap:wrap;
    /* -webkit-box-orient: vertical; */
    margin-top: 10px;


}
.last-words span{    
    background: #1A1D24;
    color: #666666;  
    padding: 6px;  
    margin-right: 10pt;
    margin-top: 10pt;
}
</style>