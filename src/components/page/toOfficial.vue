<template>
    <div>
        <TopnavC for-child-msg='宝马会官方网址导航'></TopnavC>
        <div id="toOfficial-top-msg">
            <!-- <p>宝马会官方网址导航</p>   -->
        </div>
        <div id="toOfficial-url"
            v-for="(urlMessage,idex) in url"
        >
            <div class="toOfficial-url-div">
                <!--线路-->
                <div class="toOfficial-1">
                    <span>线路{{idex+1}}</span>
                    <!-- <span>延时</span> -->
                </div> 

                 <!--地址-->   
                 <div class="toOfficial-2">
                    <span>{{urlMessage}}</span>  
                    <!-- <span>复制</span> -->
                </div>

                <!--跳转-->
                <div class="toOfficial-3"><a :href='urlMessage'>立即前往</a></div>        
            </div>           
        </div>    
    </div>
</template>

<script>

import TopnavC from '@/components/common/TopnavC'
export default {
  components: {
    TopnavC
  },
  data () {
      return {
          url:[
              'https://bmw163.net',
              'https://bmw168.org',
              'https://bmw268.net',
              'https://bmw52.org',
              'https://bmw536.net',
              'https://bmw56.org',
              'https://bmw563.net',
              'https://bmw581.net',
              'https://bmw583.net',
              'https://bmw586.net',
              'https://bmw589.net',
              'https://bmw59.org',
              'https://bmw686.net',
              'https://bmw713.net',
              'https://bmw718.net',
              'https://bmw723.net',
              'https://bmw78.com',
              'https://bmw783.net',
              'https://bmw786.net',
              'https://bmw800.net'
            ]
      }
  }
}
</script>

<style scoped>
a{
    color: blanchedalmond;
    text-decoration:none
}
#toOfficial-top-msg{
  color: rgb(248, 244, 244); 
  margin-top:5.98vh
}

#toOfficial-url{
  color: rgb(248, 244, 244); 
}

.toOfficial-url-div{
  background-color: #2a2c35;
  margin: 0 auto;
  width: 98%;
  height: 2.5em;
  line-height: 2.5em;
  display: flex;
  border-bottom: #373b45 solid 2px;
}

.toOfficial-1{
  width: 20%;

}

.toOfficial-2{
  width: 65%;

}

.toOfficial-3{
  width: 22%;
}



</style>