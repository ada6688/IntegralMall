<template>
  <div>
    <TopNavC for-child-msg='积分明细'></TopNavC>
    <div class="main-second-wrap integral-details-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="签到积分">
            <ul class="integral-details sign-integral" v-for="(data, z) in Singin" :key="'sign' + z">
              <li>
                <div>
                  <p>{{data.type_name}}</p>
                  <span>{{data.create_time}}</span>
                  <!-- <span>18:00</span> -->
                </div>
              </li>
              <li>{{data.points}}</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="通用积分">
            <div v-for="(data, index) in currency" :key="index">
              <ul class="integral-details currency-integral"  v-for="(game_data, x) in data.points_json.data" :key="index + '-' + x">
                <li>
                  <div>
                    <p>{{game_data.type}}</p>
                    <span>{{data.points_json.create_time}}</span>
                  </div>
                </li>
                <li>{{game_data.points}}</li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="兑换积分">
            <ul class="integral-details exchange-integral" v-for="(data, x) in exchange" :key="'exchange-' + x">
              <li>
                <div>
                  <p>{{data.goods_name}}</p>
                  <span v-if="data.create_time">{{data.create_time}}</span>
                  <span v-else>时间数据丢失</span>
                </div>
              </li>
              <li v-if="data.points_record >= 0"> -{{data.points_record}}</li>
              <li v-else> +{{data.points_record * -1}}</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <div class="bottom-cut"><hr>暂无更多<hr></div>
    </div>
  </div>
</template>
<script>
import TopNavC from '@/components/common/TopnavC'
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
    if (window.token == '') {
      window.requirePath = '/mingxi'
      this.$router.push('/login')
    } else {
      Axios({
      method: 'get',
      url: 'https://bmw1984.com/api/auth/sign/records/?format=json',
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
      })
    Axios({
      method: 'get',
      url: 'https://bmw1984.com/api/auth/common/points/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.currency = Response.data
      })
      .catch(error => {
        console.log(error)
        alert('通用积分获取错误')
      })
    Axios({
      method: 'get',
      url: 'https://bmw1984.com/api/auth/points/records/?format=json',
      headers: {
        Authorization: 'Token ' + token
      }
    })
      .then(Response => {
        this.exchange = Response.data
      })
      .catch(error => {
        console.log(error)
        alert('兑换积分获取错误')
      })
    }
  }
}

</script>
<style>
.integral-details-wrap .el-tabs--border-card>.el-tabs__content{
  padding: 0 15px !important;
}
</style>
