<template>
  <div>
    <TopNavC></TopNavC>
    <div class="choujiang-page" :style="{backgroundImage: 'url(' + mainbg + ')'}">
      <div class="game-detail">
        <h4>活动详情：</h4>
        <p>应广大会员的强烈要求，宝马会特将十一活动【开宝箱、领奖金】设 置为日常优惠活动，任何会员只要每天投注额≥6000元，即可在次日 14:00后参与【开宝箱、领奖金】活动，宝箱中奖率为100%，最高单 笔奖金可达66666元。</p>
      </div>
      <div class="game-zhuanlun">
        <img :src="zhuanlun" alt />
        <div class="game-description">
          <span>您还有1次抽奖机会</span>
        </div>
        <div class="game-lottery">
          <div class="first">
            <img :src="lottery" alt />
          </div>
          <div class="second">
            <img :src="lottery" alt />
          </div>
          <div class="third">
            <img :src="lottery" alt />
          </div>
        </div>
        <div class="lottery-button">
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
    </div>
  </div>
</template>
<script>
// 引用组件
import TopNavC from '@/components/common/TopNavC'

export default {
  name: 'App',
  components: {
    TopNavC
  },
  data () {
    return {
      mainbg: require('../../assets/images/yh/background.png'),
      zhuanlun: require('../../assets/images/yh/抽奖转轮.png'),
      lottery: require('../../assets/images/yh/6.original.png'),
      lottery_button: require('../../assets/images/yh/cjan_dj@3x.png'),
      head: require('../../assets/images/yh/tx.png'),
      zhuanlunDiv: {
        backgroundImage:
          'url(' + require('../../assets/images/yh/抽奖转轮.png') + ')',
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
        slidesPerView: 2.3,
        spaceBetween: 1,
        loop: true,
        freeMode: true,
        autoplay: {
          delay: 1000
        }
      }
    }
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>每日抽奖</P>'
    }
  }
}
</script>
<style>
.choujiang-page {
  margin-top: 3rem;
  padding-bottom: 60px;
}
.lottery-rule {
  background-color: #f9c74a;
  margin: 17px 17px 0 17px;
  border-radius: 6px;
}
.lottery-rule p {
  color: #c9463a;
  font-size: 12px;
  text-align: left;
  margin: 0 10px 0 10px;
}
.lottery-rule .notice-title {
  text-align: left;
}
.el-icon-arrow-left {
  color: #ffffff;
}
.game-detail {
  padding: 17px 17px 17px 17px;
}
.game-detail h4 {
  margin-top: 0px;
  height: 14px;
  text-align: left;
  color: #ffffff;
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
  border-radius: 6px;
  text-align: left;
}
.notice-title {
  font-size: 14px;
  font-weight: 400;
  color: white;
  padding: 10px 10px 10px 10px;
}
.letter-div {
  background: rgba(255, 255, 255, 1);
  border-radius: 55px;
  height: 35px;
  /* opacity:0.5; */
}
.letter-div span {
  display: block;
  font-size: 0.1em;
  color: #a50717;
  margin-left: 3px;
}
.letter-div div:first-child {
  float: left;
  width: 20%;
  margin: 3px 3px 3px 3px;
}
.letter-div div:nth-child(2) {
  float: left;
  width: 70%;
}
.lottery-notice .swiper-container {
  height: 48px;
  margin-left: 5px;
}
</style>
