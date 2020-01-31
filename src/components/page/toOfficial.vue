<template>
  <div id="addBox">
    <TopnavC for-child-msg='宝马会官方网址导航'></TopnavC>
    <div id="toOfficial-top-msg">
        <!-- <p>宝马会官方网址导航</p>   -->
    </div>
    <div id="toOfficial-url"
      v-for="(urlMessage,index) in url"
      :key="index">
        <div class="toOfficial-url-div">
          <!--线路-->
          <div class="toOfficial-1">
            <span>线路{{index+1}}</span>
            <!-- <span>延时</span> -->
          </div>
            <!--地址-->
            <div class="toOfficial-2">
              <span>{{urlMessage}}</span>
              <!-- <span>复制</span> -->
          </div>
          <!--跳转-->
          <div class="toOfficial-3">
            <a :href="url[index]">立即前往</a>
          </div>
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
      Newdate: null,
      pingtime: 1,
      url: [
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
    } // data结束
  }
}
</script>

<style scoped>
#addBox {
  height: 100%;
  padding: 1em 0;
}
a {
  color: blanchedalmond;
  text-decoration:none
}

#toOfficial-top-msg {
  color: rgb(248, 244, 244); 
  margin-top:5.98vh;
  background-color: #161415;
}

#toOfficial-url{
  color: rgb(248, 244, 244); 
  margin-top: 1em;
}

.toOfficial-url-div {
  background-color: #292C35;
  margin: 0 auto;
  width: 98%;
  height: 3em;
  line-height: 3em;
  display: flex;
}

.toOfficial-1 {
  width: 20%;
  background-color: #B48125
}

.toOfficial-2 {
  width: 65%;
  color: #5D6279;
}

.toOfficial-3 {
  width: 22%;
}

</style>
