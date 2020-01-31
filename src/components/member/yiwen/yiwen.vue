<template>
  <div id="yiwenPage">
    <TopNavC></TopNavC>
    <div class="main-second-wrap">
      <div class="integral-question">
        <div class="integral-question-item-T">
          <span></span>
          <span>商城和积分的问题</span>
        </div>
        <div id="aq" class="integral-question-item">
          <ul>
            <li v-for="(item,index) in aqList" :key="item.index">
              <div class="integral-question-text" @click="showToggle(index,item)">
                <span id="sf">{{item.q}}</span>
                <i class="el-icon-arrow-right"></i>
              </div>
              <div class="integral-answer" v-show="item.isShow">
                <p>{{item.a}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
  import TopNavC from '@/components/common/TopnavC'
export default {
  
  components: {
    TopNavC
  },
  data () {
    return {
      aqList: [
        {
          isShow: false,
          q: '我是否需要注册参与宝马会的奖励积分计划',
          a: '宝马会的积分奖励无需特别申请，成为宝马会的会员后，将自动成为宝马会商城会员，所有有效投注都将按照400:1的比例计算成积分，并派发到您的积分账户。'
        },
        {
          isShow: false,
          q: '我的奖励积分是否会过期',
          a: '是的。宝马会的积分的有效期如下所示： 普通会员积分有效期为 6 个月，VIP会员的积分有效期为 12个月。任何未使用的过期积分将会被清除。因此，请在过期之前及时兑换您的积分，您可以点击"积分过期报表" 查询即将过期的积分。'
        }
      ]
    }
  },
  mounted: function () {
    this.change()
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
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>常见疑问</P>'
    },
    showToggle: function (ind, item) {
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.aqList.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        // console.log(item)
        if (i.isShow !== this.aqList[ind].isShow) {
          i.isShow = false
        }
      })
      // 取反(true或false)
      item.isShow = !item.isShow
      // console.log(item.q)
    }
  }
}

</script>
<style>

  #yiwenPage{
    height: 100vh;
  }
  #rule {
      margin-top: 3rem;
      height: 650px;
  }
  #ruleBottomLine{
      bottom: 0;
      text-align: center;
  
  }
  #ruleBox{
      text-align: justify;
  }

  #ruleBox i{
      margin: 0 1rem;
  }
  #rule .el-icon-arrow-right{
      margin-top: -4px;
  }
  #rule .el-collapse-item__header{
      background-color: #151515;
      border-bottom: 2px solid #2b2a2f;
      color: #fefeff;
  }
  #rule .el-collapse-item__content{
      background-color:#1b1b1b ;
      color: #fefeff;
  }
  #rule .el-tabs--border-card>.el-tabs__content{
      background-color:#1b1b1b ;
  }
  #rule .el-collapse{
      background-color: #1b1b1b;
      border-top:1px solid #151515
  }

  #ruleBox p{
      padding: 1rem;
  }
</style>
