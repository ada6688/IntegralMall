<template>
  <div>
    <TopNavC></TopNavC>
    <div class="main-second-wrap integral-details-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="签到积分">
            <ul class="integral-details sign-integral" v-for="(data,index) in Singin" :key="index">
              <li>
                <div>
                  <p>{{data.type_name}}</p>
                  <span>{{data.create_time}}</span>
                  <!-- <span>18:00</span> -->
                </div>
              </li>
              <li>+{{data.points}}</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="通用积分">
            <ul class="integral-details currency-integral" v-for="(data,index) in currency" :key="index">
              <li>
                <div>
                  <p>{{data.points_json.data[0].type}}</p>
                  <span>{{data.points_json.create_time}}</span>
                </div>
              </li>
              <li>{{data.points_json.data[0].points}}</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="兑换积分">
            <ul class="integral-details exchange-integral" v-for="(data,index) in exchange" :key="index">
              <li>
                <div>
                  <p>{{data.goods_name}}</p>
                  <span>2019-12-20</span>
                  <span>18:00</span>
                </div>
              </li>
              <li>-{{data.points_record}}</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <div class="bottom-cut"><hr>暂无更多<hr></div>
    </div>
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopNavC'
import Axios from 'axios'

export default {
  data () {
    return {
      Singin: [],
      currency: [],
      exchange: []
    }
  },
  components: {
    TopNavC
  },
  created () {
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/sign/records/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.Singin = Response.data
      })
      .catch(error => {
        console.log(error)
        alert('签到积分获取错误')
        // this.$router.push('/shouye')
      })
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/common/points/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.currency = Response.data
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('通用积分获取错误')
        // this.$router.push('/shouye')
      })
    Axios({
      method: 'get',
      url: 'http://45.64.53.115:8000/api/auth/points/records/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.exchange = Response.data
        // console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
        alert('兑换积分获取错误')
        // this.$router.push('/shouye')
      })
  },
  mounted: function () {
    this.change()
  },
  methods: {
    change () {
      document.getElementById('top-logo-change').innerHTML = '<p>积分明细</P>'
    }
  }
}

</script>
<style>
.integral-details-wrap .el-tabs--border-card>.el-tabs__content{
  padding: 0 15px !important;
}
</style>
