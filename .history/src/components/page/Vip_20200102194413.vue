<template>
  <div>
    <TopnavC></TopnavC>
    <div class="main-wrap VIP-contain">
      <div>
        <img src="../../assets/images/VIP/VIP-T.png" alt="">
      </div>
      <div class="level-welfare-wrap">
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="普通">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/pt.png" alt=""> <p class="VipTop-level-text">普通</p></span>
              <div class="vip-level-wrap">
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/hg.png" alt="">
                    </div>
                    <p>晋级礼金暂无</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/dg.png" alt="">
                    </div>
                    <p>生日礼金暂无</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/QQ.png" alt="">
                    </div>
                    <p>QQ客服</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/jb.png" alt="">
                    </div>
                    <p>每月免费筹码暂无</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/sc.png" alt="">
                    </div>
                    <p>积分商城折扣暂无</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/yhk.png" alt="">
                    </div>
                    <p>单日提款额度<br>限免3次</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/qd.png" alt="">
                    </div>
                    <p>VIP救援金暂无</p>
                  </li>
                  <li>
                    <div>
                      <img src="../../assets/images/VIP/yhbq.png" alt="">
                    </div>
                    <p>存款15%<br>最高需15倍流水</p>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="黄金">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/hj.png" alt=""> <p class="VipTop-level-text">黄金</p></span>
            </el-tab-pane>
            <el-tab-pane label="铂金">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/bj.png" alt=""> <p class="VipTop-level-text">铂金</p></span>
            </el-tab-pane>
            <el-tab-pane label="钻石">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/zs.png" alt=""> <p class="VipTop-level-text">钻石</p></span>
            </el-tab-pane>
            <el-tab-pane label="至尊">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/zz.png" alt=""> <p class="VipTop-level-text">至尊</p></span>
            </el-tab-pane>
            <el-tab-pane label="王者">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/wz.png" alt=""> <p class="VipTop-level-text">王者</p></span>
            </el-tab-pane>
            <el-tab-pane label="特邀">
              <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/ty.png" alt=""> <p class="VipTop-level-text">特邀</p></span>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
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
    </div>
    <Bottomnav></Bottomnav>
  </div>
</template>
<script>
import TopnavC from '@/components/common/Topnav-c'
import Bottomnav from '@/components/common/Bottomnav'

export default {
  name: 'App',
  components: {
    TopnavC,
    Bottomnav
  },
  data () {
    return {
      tableData: [{
        level: '黄金会员',
        detail: '1、单月(全部平台)总投注额50w' + '\n' + '2、单月(全部老虎机)平台总投注额20w'
      }, {
        level: '铂金会员',
        detail: '1、单月(全部平台)总投注额200w' + '\n' + '2、单月(全部老虎机)平台总投注额120w'
      }, {
        level: '钻石会员',
        detail: '1、单月(全部平台)总投注额500w' + '\n' + '2、单月(全部老虎机)平台总投注额300w'
      }, {
        level: '荣耀会员',
        detail: '1、单月(全部平台)总投注额800w' + '\n' + '2、单月(全部老虎机)平台总投注额500w'
      }, {
        level: '王者会员',
        detail: '1、单月(全部平台)总投注额1000w' + '\n' + '2、单月(全部老虎机)平台总投注额600w'
      }, {
        level: '特邀会员',
        detail: '1、平台邀请' + '\n' + '2、客户经理推荐'
      }],
      row: [{
        picture: '../../assets/images/VIP/pt.png'
      }]
    }
  }
}
</script>
<style>
.el-table .cell {
  white-space: pre-line;
}
.el-table{
  padding: 0 17px 0 17px
}
.el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
  border-color: #343947;
  background: #292C35;
  color: #cccccc
}
.el-table td, .el-table th{
  height: 58px;
  padding: 0
}
.el-table th{
  font-weight: normal;
  text-align: center;
  color: #ffffff !important;
}
.el-table td:first-child{
  text-align: center
}
.el-table::before{
  background: transparent
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
  background: #292C35
}
.el-table--border tr:first-child td:first-child .cell{
  background: url(../../assets/images/VIP/pt.png) no-repeat;
}
.el-tabs__nav,.el-tabs__nav-wrap{
  width: 100%
}

.el-tabs--border-card{
  border: 0;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border: 0;
  font-size: .8rem;
}
.el-tabs--border-card>.el-tabs__header{
  padding: 10px 3.65% 0;
  background: #151515
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 39px;
  color: #ffffff;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #666666;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px;
  box-sizing: border-box;
}
.el-tabs--border-card{
  box-shadow: 0 0 0 0 rgb(0, 0, 0, 0)
}
.el-tabs--border-card>.el-tabs__content {
  margin-top: -2px;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 2px 4.1% 0;
  height: 62px;
  vertical-align: bottom;
}
@media screen and (max-width: 360px) {
  .el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 2px 3.5% 0;
  height: 62px;
  vertical-align: bottom;
}
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 62px;
}
</style>
