<template>
  <div>
    <TopNav></TopNav>
    <div class="main-wrap VIP-contain">
      <!-- VIP专区描述 -->
      <div class="VIP-T">
        <img src="../../assets/images/VIP/VIP-T@3x.png" alt="">
      </div>
      <!-- 各等级福利表 -->
      <div class="level-welfare-wrap">
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="" v-for="items in leverSign" :key="items.item">
              <span slot="label"><img class="VipTop-level-sign" :src="items.img" alt=""> <p class="VipTop-level-text">{{items.level}}</p></span>
              <div class="vip-level-wrap">
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/hg.png" alt="">
                    </div>
                    <p>晋级礼金{{items.jjlj}}</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/dg.png" alt="">
                    </div>
                    <p>生日礼金{{items.srlj}}</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/QQ.png" alt="">
                    </div>
                    <p>{{items.kf}}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/jb.png" alt="">
                    </div>
                    <p>每月免费筹码{{items.mfcm}}</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/sc.png" alt="">
                    </div>
                    <p>积分商城折扣{{items.jfsc}}</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/yhk.png" alt="">
                    </div>
                    <p>单日的提款额度{{items.tked}}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/qd.png" alt="">
                    </div>
                    <p>VIP救援金{{items.jyj}}</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/yhbq.png" alt="">
                    </div>
                    <p>{{items.csyh}}</p>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
      <!-- VIP晋级要求 -->
      <div class="level-require-wrap">
        <p class="Vip-level-T">VIP晋级要求</p>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="level"
            label="会员等级"
            width="100%">
            <!-- <template scope="scope">
              <img v-for="item in scope.row.pictures" :key="item" :src="item" width="40" height="40" class="head_pic"/>
            </template> -->
          </el-table-column>
          <el-table-column
            prop="detail"
            label="晋级条件">
          </el-table-column>
        </el-table>
        <p class="Vip-level-tips">注意事项：1、晋级条件二选一；2、维持当前等级，需完成当月最高流水的10%。</p>
      </div>
      <!-- 晋级规则 -->
      <div class="level-rules-wrap">
        <span>VIP晋级规则</span>
        <p>1、每个月1号前系统自动审核进行升级，系统会以晋级条件中的 1、2 择一来进行升级。</p>
        <p>2、1 号 0:00至最后一天 23:59:59 截止（美东时间）。</p>
        <p>3、玩家达到条件后可以登陆宝马会娱乐城官网的“联系7x24在线客服”进行申请。为避免套利和非正常投注的玩家,投注额为申请条件之一，其次需要经过相关部门综合审核后，给予晋级并派发晋级礼金。（每月3号申领）</p>
        <p>4、维持当前等级需要上月的流水达到当前等级晋级流水的10%，否则系统会在下一个月一号自动降低一级。每个等级晋级礼只能享受一次。</p>
        <p>5、VIP至尊会员等级以上 月结亏损20万以上，即可获得相应等级的VIP救援金，最高88888 1倍流水。（每月5号申领）</p>
        <p>6、每月免费筹码需当月3号之后的任意一天单笔存款200元，一倍流水即可提款。若当月份未进行存款视同放弃，不做补发。</p>
        <p>7、所有VIP会员享受的优惠按照系统自动晋级时的等级为准来派发，若有相关活动疑问请及时联系专属客服服务。</p>
        <p>8、因为需要审核数据，每月4号以后可以申请VIP生日礼金。节假日顺延。</p>
        <p>9、宝马会娱乐拥有最终解释权和裁决权！</p>
      </div>
    </div>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from '@/components/common/Bottomnav'
import TopNav from '@/components/common/Topnav'

export default {
  name: 'App',
  components: {
    BottomNav,
    TopNav
  },
  data () {
    return {
      tableData: [{
        level: '黄金会员',
        img: 'static/vip/hj@3x.png',
        detail: '1、单月(全部平台)总投注额50w' + '\n' + '2、单月(全部老虎机)平台总投注额20w'
      }, {
        level: '铂金会员',
        img: '/static/vip/bj@3x.png',
        detail: '1、单月(全部平台)总投注额200w' + '\n' + '2、单月(全部老虎机)平台总投注额120w'
      }, {
        level: '钻石会员',
        img: '/static/vip/zs@3x.png',
        detail: '1、单月(全部平台)总投注额500w' + '\n' + '2、单月(全部老虎机)平台总投注额300w'
      }, {
        level: '至尊会员',
        img: '/static/vip/zz@3x.png',
        detail: '1、单月(全部平台)总投注额800w' + '\n' + '2、单月(全部老虎机)平台总投注额500w'
      }, {
        level: '王者会员',
        img: '/static/vip/wz@3x.png',
        detail: '1、单月(全部平台)总投注额1000w' + '\n' + '2、单月(全部老虎机)平台总投注额600w'
      }, {
        level: '特邀会员',
        img: '/static/vip/ty@3x.png',
        detail: '1、平台邀请' + '\n' + '2、客户经理推荐'
      }],
      leverSign: [
        {
          level: '普通',
          img: 'static/vip/pt@3x.png',
          jjlj: '暂无',
          srlj: '暂无',
          kf: '在线客服',
          mfcm: '暂无',
          jfsc: '暂无',
          tked: '限免三次',
          jyj: '暂无',
          csyh: '存款送15%,最高888,需15倍流水'
        },
        {
          level: '黄金',
          img: 'static/vip/hj@3x.png',
          jjlj: '58元',
          srlj: '58元',
          kf: 'QQ客服',
          mfcm: '18元',
          jfsc: '9.8折',
          tked: '限免三次',
          jyj: '暂无',
          csyh: '存款送15%,最高2888,需18倍流水'
        },
        {
          level: '铂金',
          img: 'static/vip/bj@3x.png',
          jjlj: '188元',
          srlj: '188元',
          kf: 'VIP专员',
          mfcm: '88元',
          jfsc: '9.5折',
          tked: '限免三次',
          jyj: '暂无',
          csyh: '存款送16%,最高2888,需18倍流水'
        },
        {
          level: '钻石',
          img: 'static/vip/zs@3x.png',
          jjlj: '588元',
          srlj: '588元',
          kf: 'VIP专员',
          mfcm: '188元',
          jfsc: '9.2折',
          tked: '限免三次',
          jyj: '暂无',
          csyh: '存款送17%，最高2888，需18倍流水'
        },
        {
          level: '至尊',
          img: 'static/vip/zz@3x.png',
          jjlj: '888元',
          srlj: '888元',
          kf: 'VIP专员',
          mfcm: '388元',
          jfsc: '8.8折',
          tked: '请联系客服获取',
          jyj: '0.5%，最高金额33333',
          csyh: '存款送18%,最高2888,需18倍流水'
        },
        {
          level: '王者',
          img: 'static/vip/wz@3x.png',
          jjlj: '1888元',
          srlj: '1888元',
          kf: '客户经理',
          mfcm: '888元',
          jfsc: '8.5折',
          tked: '请联系客服获取',
          jyj: '0.8%，最高金额66666',
          csyh: '存款送19%,最高2888,需18倍流水'
        },
        {
          level: '特邀',
          img: 'static/vip/ty@3x.png',
          jjlj: '2888元',
          srlj: '2888元',
          kf: '客户经理',
          mfcm: '1288元',
          jfsc: '8.2折',
          tked: '请联系客服获取',
          jyj: '1%，最高金额88888',
          csyh: '存款送20%,最高2888,需18倍流水'
        }
      ]
    }
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      // console.log(22213425)
      document.getElementById('top-nav-logo').innerHTML = '<p>VIP专区</p>'
    }
  }
}
</script>
<style>
.VIP-contain .el-table .cell {
  white-space: pre-line;
  font-size: .5em
}
.VIP-contain .el-table--border{
  border: 0 !important
}
.VIP-contain li{
  background-color: transparent !important;
  border: none !important;
}
.VIP-contain .el-table td, .el-table th.is-leaf{
  border-bottom: 1px solid #343947 !important
}
.VIP-contain .el-table td,.VIP-contain .el-table th.is-leaf,.VIP-contain .el-table--border,.VIP-contain .el-table--group{
  border-color: #343947;
  background: #292C35 !important;
  color: #cccccc
}
.VIP-contain .el-table td, .VIP-contain .el-table th{
  height: 58px;
  padding: 0
}
.VIP-contain .el-table th{
  font-weight: normal;
  text-align: center;
  color: #ffffff !important;
}
.VIP-contain .el-table td:first-child{
  text-align: center;
  padding-left: 0.8rem;
}
.VIP-contain .el-table::before{
  background: transparent
}
.VIP-contain .el-table--enable-row-hover .el-table__body tr:hover>td{
  background: #292C35
}
.VIP-contain .el-table--border tr:first-child td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/hj@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-table--border tr:nth-child(2) td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/bj@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-table--border tr:nth-child(3) td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/zs@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-table--border tr:nth-child(4) td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/zz@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-table--border tr:nth-child(5) td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/wz@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-table--border tr:nth-child(6) td:first-child .cell{
  padding-left: 20px;
  background: url(/static/vip/ty@3x.png) no-repeat;
  background-size: 16px 22px;
}
.VIP-contain .el-tabs__nav{
  width: 100%
}
.VIP-contain .el-tabs--border-card>.el-tabs__header .el-tabs__item{
  font-size: .8rem;
}
.VIP-contain .el-tabs--border-card>.el-tabs__header{
  padding: 10px 3.65% 0;
}
.VIP-contain .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.VIP-contain .el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px;
  box-sizing: border-box;
}
.VIP-contain .el-tabs--border-card{
  box-shadow: 0 0 0 0 rgb(0, 0, 0, 0);
  background: transparent
}
.VIP-contain .el-tabs--border-card .el-tabs__item{
  padding: 2px 4.1% 0 !important;
  height: 62px;
  vertical-align: bottom;
}
@media screen and (max-width: 360px) {
  .VIP-contain .el-tabs--border-card .el-tabs__item{
  padding: 2px 3.3% 0 !important;
  height: 62px;
  vertical-align: bottom;
  }
}
.VIP-contain .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 62px;
}
.VIP-contain .el-table--border::after, .el-table--group::after, .el-table::before{
  display: none;
  background:transparent;
}
</style>
