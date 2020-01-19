<template>
  <div>
    <TopNavC></TopNavC>
    <div class="choujiang-page main-second-wrap" :style="{backgroundImage: 'url(' + mainbg + ')'}">
      <div class="game-detail">
        <h4>活动详情：</h4>
        <p>应广大会员的强烈要求，宝马会特将十一活动【开宝箱、领奖金】设 置为日常优惠活动，任何会员只要每天投注额≥6000元，即可在次日 14:00后参与【开宝箱、领奖金】活动，宝箱中奖率为100%，最高单 笔奖金可达66666元。</p>
      </div>
      <div class="game-zhuanlun">
        <img :src="zhuanlun" alt />
        <div class="game-description">
          <span>您还有{{chance}}次抽奖机会</span>
        </div>

        <div class="num_box">
          <div class="tiger"></div>
          <div class="tiger"></div>
          <div class="tiger"></div>
        </div>

        <div class="lottery-button" @click="postChance">
          <img :src="lottery_button" alt />
        </div>
      </div>
      <div class="lottery-notice">
        <div class="notice-title">
          <span>中奖公告</span>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(msg, index) in letter" :key="index">
            <div class="letter-div">
              <div>
                <img :src="head" alt />
              </div>
              <div>
                <span>{{msg}}</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="lottery-rule">
        <div class="notice-title">
          <span>活动规则</span>
        </div>
        <div class="rule-detail">
          <p>1、每天所有会员总投注额的千分之一将会被纳入总奖池内，作为会员当日抽奖的奖励金额；</p>
          <p>2、任意会员每次抽奖的奖励金额均为随机，单笔奖金的最低金额为6元，最高金额为66666元，中奖率100%；</p>
          <p>3、会员前一天的投注额越高，则次日参与抽奖时，中得大奖的几率也会越高；</p>
          <p>4、该活动每天只能抽奖一次，每次换取抽奖机会的6000元投注额可在任意游戏内产生（彩票游戏除外）；</p>
          <p>5、奖金只需完成1倍流水即可提款，可投注任意游戏（彩票游戏除外）。</p>
        </div>
      </div>

      <!--抽奖信息显示-->

      <div id='moneyMessagesBox' class='moneyTF'>
        <div id="moneyMessages">
          <div id='messagesImg'>
            <img src="../../assets/images/yh/Overlay.png" alt="">
          </div>
          <p class="moneyMessage" id="moneyMessage1"><span id="moneySize"></span>元</p>
          <p class="moneyMessage" id="moneyMessage2"></p>
          <p class="moneyMessage" id="moneyMessage3">请在我的账户里查看</p>
          <div id='messagesImgBotton' @click='overlayClick'></div> 
        </div>    
      </div>
    </div>    
  </div>

</template>
<script>
// 引用组件
import TopNavC from '@/components/common/TopnavC'
import { Overlay } from 'vant'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    TopNavC,
  },
  data () {
    return {
      u:5,    //转动圈数  为了减少误差尽量不要超过6
      res: [],
      chance: null,
      money: null,
      mainbg: require('../../assets/images/yh/background.png'),
      zhuanlun: require('../../assets/images/yh/cj-bg.png'),
      lottery: require('../../assets/images/yh/6.original.png'),
      lottery_button: require('../../assets/images/yh/cjan_dj@3x.png'),
      head: require('../../assets/images/yh/tx.png'),
      zhuanlunDiv: {
        backgroundImage:
          'url(' + require('../../assets/images/yh/cj-bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      letter: [
        '宝马会xxx 已抽中红包1000元',
        '宝马会xxx 已抽中红包100元',
        '宝马会xxx 已抽中红包10元',
        '宝马会xxx 已抽中红包880元',
        '宝马会xxx 已抽中红包600元',
        '宝马会xxx 已抽中红包2000元',
        '宝马会xxx 已抽中红包3000元',
        '宝马会xxx 已抽中红包500元',
        '宝马会xxx 已抽中红包660元',
        '宝马会xxx 已抽中红包9900元'
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 1,
        loop: true,
        freeMode: true,
        autoplay: {
          delay: 2000
        }
      }
    }
  },
  mounted: function () {
    this.change()
    this.getChance()
    const oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    document.body.appendChild(oScript);
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>每日抽奖</P>'
    },


    getChance () {                  //请求查询抽奖机会  
      axios({
          method: 'get',
          url:'http://45.64.53.115:8000/api/lucky_everyday/lottery/?format=json',
          headers: {
            Authorization: 'Token 556f140a28d12eef26475833e735b52eec750154'
            // Authorization: 'Token ' + windows.token
          }
        }) 
        .then(Response => {
          this.chance = Response.data.chance
        })
        .catch(error => {
          console.log(error)
        })
    },

    postChance () {   //请求抽奖
      var ThisChance = this.chance 
      if(ThisChance == 0){
        alert('您的抽奖次数已用完或者未登录！')
        return false
      }
        axios({       //如果有抽奖机会就发送抽奖请求请求规则
          method: 'post',
          url:'http://45.64.53.115:8000/api/lucky_everyday/lottery/?format=json',
          data: {
            username: 'Thor',
            password: '4rfv5tgb...',    
          },
          headers: {
            Authorization: 'Token 556f140a28d12eef26475833e735b52eec750154'
          }
        })
        .then(Response => {
          this.res = Response.data.result   
          this.chance = this.chance - 1
          this.Lottery()    
        })
        .catch(error => {
          console.log(error)
        })
      }, 

    Lottery () {
      var thisU = this.u
      var num_arr = this.res
      var Overlay = this.overlayTF

      //每次抽奖前先重置backgroundPositionY为初始状态
      $(".tiger").css('backgroundPositionY', 0)

      // 抽奖时，禁用按钮  
      $(".lottery-button").addClass("disable")

      //为每个.tiger执行一次定时器  达到转动效果    
      $(".tiger").each(function(index){
            var _num = $(this)
            setTimeout(function(){    //根据index来执行,来达到时差效果
              _num.animate(               //animate实现动画效果
                {backgroundPositionY:    thisU*106.04 + 8.8*num_arr[index] + "%"   },    //控制转动的转速以及具体位置
                {
                  duration: 6000 ,  //转动的时间
                }
              )
          },index*300)  //时差  
        })

        //匹配中奖结果
      var num = [];
      function modi(str, index){
        switch(str[index]){
        case 0:
            num[index] = 0;
            break;  
          case 1:
            num[index] = 6;
            break;
          case 2:
            num[index] = 10;
            break;
          case 3:
            num[index] = 20;
            break;
          case 4:
            num[index] = 30;
            break;
          case 5:
            num[index] = 50;
            break;
          case 6:
            num[index] = 60;
            break;
          case 7:
            num[index] = 100;
            break;
          case 8:
            num[index] = 200;
            break;
          case 9:
            num[index] = 300;
            break;
          case 10:
            num[index] = 600;
            break;
          case 11:
            num[index] = 1000;
            break;
        }
        return num
      }

      modi(num_arr, 0);
      modi(num_arr, 1);
      modi(num_arr, 2);
      var money = num[0] + num[1] + num[2]     //中奖结果
      $("#moneySize").text(money)
      $("#moneyMessage2").text("恭喜您获得" + money + "元红包")  
           

      //同样设置一个定时器，在一次抽奖结束后解禁抽奖按钮,并弹出抽奖信息
      setTimeout(function(){      
        $(".lottery-button").removeClass("disable") 
        $("#moneyMessagesBox").removeClass('moneyTF')  
              },6666)  
    },

    //点击按钮隐藏
    overlayClick () {
     $("#moneyMessagesBox").addClass('moneyTF')
    }


      
  },
 

}
</script>
<style>
.choujiang-page {
  background-size: 100% 100%;
  padding-bottom: 60px
}
.lottery-rule {
  background-color: #f9c74a;
  margin: 17px 17px 0 17px;
  padding: 16px 10px;
  border-radius: 6px;
}
.lottery-rule p {
  color: #c9463a;
  font-size: 12px;
  text-align: left;
}
.lottery-rule {
  text-align: left;
}
.el-icon-arrow-left {
  color: #ffffff;
}
.game-detail {
  padding: 17px 17px 17px 17px;
}
.game-detail h4 {
  text-align: left;
  color: #ffffff;
  margin-bottom: 8px
}
.game-detail p {
  color: #fbe38b;
  font-size: 12px;
  text-align: left;
}
.game-zhuanlun {
  padding: 0 17px 0 17px;
  background-image: no-repeat;
  position: relative;
}
.game-zhuanlun img {
  width: 100%;
}
.game-description {
  clear: both;
  position: absolute;
  top: 12%;
  left: 0%;
  color: #c6393f;
  width: 100%;
  text-align: center;
  font-size: 14px;
}
.game-zhuanlun .first {
  position: absolute;
  top: 34%;
  width: 16%;
  left: 22%;
}
.game-zhuanlun .second {
  position: absolute;
  top: 34%;
  width: 16%;
  left: 41.5%;
}
.game-zhuanlun .third {
  position: absolute;
  top: 34%;
  width: 16%;
  left: 61%;
}
.lottery-button {
  position: absolute;
  top: 69%;
  left: 25%;
  width: 50%;
}
.lottery-button:active {
  position: absolute;
  top: 69.5%;
  left: 25.5%;
  width: 49.2%;
}
.lottery-notice {
  background-color: #f9c74a;
  margin: 0 17px 0 17px;
  padding: 10px 0 5px 10px;
  border-radius: 6px;
  text-align: left;
}
.notice-title {
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-bottom: 5px
}
.letter-div {
  background: rgba(255, 255, 255, .6);
  border-radius: 55px;
  height: 35px;
  /* opacity:0.5; */
}
.letter-div span {
  display: block;
  font-size: 0.1em;
  color: #a50717;
  margin-left: 3px;
  position: absolute;
  transform: translateY(7%);
}
@media screen and (min-width: 700px) {
  .letter-div span {
    transform: translateY(50%);
  }
}
.letter-div div:first-child {
  float: left;
  margin: 1px 3px 3px 3px;
}
.letter-div div:nth-child(2) {
  float: left;
  width: 70%;
  height: 100%;
  position: relative;
}
.lottery-notice .swiper-container {
  height: 48px;
}

.num_box {
    height: 25%;
    width: 61%;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 20%; 
    overflow: hidden;
}
.num_box .tiger {
    width: 32%;
    height: 100%;
    float: left;
  background: url('../../assets/images/yh/hB_LOGO@2x.png');
  background-repeat: repeat-y;
  background-size: cover;

}

/*禁用按钮*/
.disable {
	pointer-events: none;
}

/*弹出结果框样式*/
#moneyMessagesBox{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}



#moneyMessages{
  width: 100%;
  height: 100%;
}
#messagesImg{
  width: 100%;
  height: 100%;
}


#messagesImg img{
  width: 100%;
  height: 100%;
}

.moneyMessage{
  position:absolute;
  left: 28%;
  width: 44%;
  height: 10%;
}

#moneyMessage1{
  top: 34%;
  color: #b12204;
  font-weight: bold;
}

#moneyMessage1 span{
  font-size: 50px;
}


#moneyMessage2{
  top: 47%;
  color: #f9c687;
}

#moneyMessage3{
  top: 51%;
  color: #e8a048;
}

/*弹出层X按钮*/
#messagesImgBotton{
  position:absolute;
  left: 70%;
  top: 23%;
  width: 7%;
  height: 6%;
}

.moneyTF{
  display: none;
}
/*弹出层显示隐藏*/
</style>
