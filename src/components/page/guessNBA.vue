<template>
  <div id='nbaBox'>
    <TopnavC for-child-msg='每日抽奖'></TopnavC>

      <div id='nbaGuessPage'>
          <div id="nbaTopMessages">
              <br>
              <p>活动期间，每日存款>388元即可参与竞猜</p>
              <br>
              <p>竞猜成功的会员可获得18元彩金</p>
          </div>

          <!-- 竞猜主界面开始 -->
          <ul id="nbaGuessMain">
              <li 
                  class="nbaGuessMain-li"
                  v-for="(nbanews,index) in Nbadata" 
                  :key = "index" 
                  >
               <!-- 已结束    -->
              <template v-if="nbanews.competition.competition_status == '已结束'">
                  <div class="nbaGussSmallBox"
                      @click="selectSmallBox($event)"
                  >
                      <ul>
                          <li class="nbaGussSmallBox-time">
                              <p>{{nbanews.competition.competition_date}}</p>
                              <p>{{nbanews.competition.competition_time}}</p>
                          </li>


                          <li class="nbaGussSmallBox-team">
                              <div  class="nbaGussSmallBox-team-leftpic" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                  <img :src="nbanews.competition.points_one > nbanews.competition.points_two ? scoreResule[0].win : scoreResule[1].lose">
                              </div>
                              <div class="nbaGussSmallBox-team-left">
                                  <p><img :src="'https://bmw1984.com/' + nbanews.competition.team_one.team_img_url.url" alt="nbanews.competition.team_one.team_name" width="40" height="40"></p>
                              <p>{{nbanews.competition.team_one.team_name}}</p>
                              </div>
                              
                          </li>

                          <li class="nbaGussSmallBox-vs">vs</li>

                         

                          <li class="nbaGussSmallBox-team">
                              
                              <div class="nbaGussSmallBox-team-right">
                                  <p><img :src="'https://bmw1984.com/' + nbanews.competition.team_two.team_img_url.url" alt="nbanews.competition.team_two.team_name" width="40" height="40"></p>
                                  <p>{{nbanews.competition.team_two.team_name}}</p>
                              </div>
                              <div  class="nbaGussSmallBox-team-rightpic" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                  <img :src="nbanews.competition.points_two > nbanews.competition.points_one ? scoreResule[0].win : scoreResule[1].lose">
                              </div>
                              
                          </li>


                          <li class="nbaGussSmallBox-result">
                              <span>{{nbanews.lottery.status}}</span>
                          </li>

                          <li class="nbaEnd">
                              <img src="../../assets/images/yh/nbaend.png">
                          </li>
                      </ul>    
                  </div>
                  

                  <!-- 需要展开的大box -->
                  <div class="nbaGussBigBox" @click="selectBigBox($event)">
                      <div class="nbaGussBigBox-team">
                          <ul>
                              <li class="nbaGussBigBox-team-1">
                                  <p class="nbaGussBigBox-teamLeftpic" ><img :src="'https://bmw1984.com/' + nbanews.competition.team_one.team_img_url.url" alt="nbanews.competition.team_one.team_name" ></p>
                                  <p class="nbaGussBigBox-teamLeftname">{{nbanews.competition.team_one.team_name}}</p>
                                  <p class="nbaGussBigBox-teamLeftResult" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                      <img :src="nbanews.competition.points_one > nbanews.competition.points_two ? scoreResule[0].win : scoreResule[1].lose">
                                  </p>
                              </li>
                              <li class="nbaGussBigBox-team-2">
                                  <p class="nbaGussBigBox-team-2-timedata">{{nbanews.competition.competition_date}}</p>
                                  <p class="nbaGussBigBox-team-2-score" >
                                      <span>{{nbanews.competition.points_one}}</span> : <span>{{nbanews.competition.points_two}}</span>
                                  </p>
                                  <p class="nbaGussBigBox-team-2-clock">{{nbanews.competition.competition_time}}</p>
                              </li>
                              <li class="nbaGussBigBox-team-3">
                                  <p class="nbaGussBigBox-teamRightpic">
                                      <img :src="'https://bmw1984.com/' + nbanews.competition.team_two.team_img_url.url" alt="nbanews.competition.team_two.team_name" >
                                  </p>
                                  <p class="nbaGussBigBox-teamRightpic">{{nbanews.competition.team_two.team_name}}</p>
                                  <p class="nbaGussBigBox-teamRightpic" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                      <img :src="nbanews.competition.points_two > nbanews.competition.points_one ? scoreResule[0].win : scoreResule[1].lose">
                                  </p>
                              </li>
                              <div class="nbaEnd">
                                  <img src="../../assets/images/yh/nbaend.png">
                              </div>
                          </ul>
                      </div>
                  </div>
              </template>


              <!-- 进行中 -->
              <template v-if="nbanews.competition.competition_status == '进行中'">              
                  <!-- 需要展开的大box -->
                  <div class="nbaGussBigBox" style="display: block;">
                      <div class="nbaGussBigBox-team">
                          <ul>
                              <li class="nbaGussBigBox-team-1">
                                  <p class="nbaGussBigBox-teamLeftpic" >
                                    <img :src="'https://bmw1984.com/' + nbanews.competition.team_one.team_img_url.url" alt="nbanews.competition.team_one.team_name" >
                                  </p>
                                  <p class="nbaGussBigBox-teamLeftname">{{nbanews.competition.team_one.team_name}}</p>
                                  <div class="NbaWiner" @click="selectTeamOne(index)" id="NbaWinerOne" :style="[winerOneBg,winnerBtnShow]">赢</div>
                              
                              </li>
                              <li class="nbaGussBigBox-team-2">
                                  <p class="nbaGussBigBox-team-2-timedata">{{nbanews.competition.competition_date}}</p>
                                  <p class="nbaGussBigBox-team-2-score" >
                                      <span>{{nbanews.competition.points_one}}</span> : <span>{{nbanews.competition.points_two}}</span>
                                  </p>
                                  <p class="nbaGussBigBox-team-2-clock">{{nbanews.competition.competition_time}}</p>
                              </li>
                              <li class="nbaGussBigBox-team-3">
                                  <p class="nbaGussBigBox-teamRightpic">
                                      <img :src="'https://bmw1984.com/' + nbanews.competition.team_two.team_img_url.url" alt="nbanews.competition.team_two.team_name" >
                                  </p>
                                  <p class="nbaGussBigBox-teamRightpic">{{nbanews.competition.team_two.team_name}}</p>
                                  <div class="NbaWiner" @click="selectTeamTwo(index)" id="NbaWinerTwo" :style="[winerTwoBg,winnerBtnShow]">赢</div>
                              </li>
                              <div class="nbaEnd">
                                  <img src="../../assets/images/yh/nbanow.png">
                              </div>
                          </ul>
                      </div>
                  </div>
              </template>

              <!-- 未开始 -->
              <template v-if="nbanews.competition.competition_status == '未开始'">
                  <div class="nbaGussSmallBox">
                      <ul>
                          <li class="nbaGussSmallBox-time">
                              <p>{{nbanews.competition.competition_date}}</p>
                              <p>{{nbanews.competition.competition_time}}</p>
                          </li>


                          <li class="nbaGussSmallBox-team">
                              <div  class="nbaGussSmallBox-team-leftpic" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                  <img :src="nbanews.competition.points_one > nbanews.competition.points_two ? scoreResule[0].win : scoreResule[1].lose">
                              </div>
                              <div class="nbaGussSmallBox-team-left">
                                  <p><img :src="'https://bmw1984.com/' + nbanews.competition.team_one.team_img_url.url" alt="nbanews.competition.team_one.team_name" width="40" height="40"></p>
                              <p>{{nbanews.competition.team_one.team_name}}</p>
                              </div>
                              
                          </li>

                          <li class="nbaGussSmallBox-vs">vs</li>

                         

                          <li class="nbaGussSmallBox-team">
                              
                              <div class="nbaGussSmallBox-team-right">
                                  <p><img :src="'https://bmw1984.com/' + nbanews.competition.team_two.team_img_url.url" alt="nbanews.competition.team_two.team_name" width="40" height="40"></p>
                                  <p>{{nbanews.competition.team_two.team_name}}</p>
                              </div>
                              <div  class="nbaGussSmallBox-team-rightpic" v-if="nbanews.competition.points_one == 0 || nbanews.competition.points_two == 0 ||nbanews.competition.points_one== nbanews.competition.points_two? false : true">
                                  <img :src="nbanews.competition.points_two > nbanews.competition.points_one ? scoreResule[0].win : scoreResule[1].lose">
                              </div>
                              
                          </li>


                          <li class="nbaGussSmallBox-result">
                              <span>{{nbanews.lottery.status}}</span>
                          </li>

                          <li class="nbaEnd">
                              <img src="../../assets/images/yh/nbanotStart.png">
                          </li>
                      </ul>    
                  </div>
                  

                  <!-- 需要展开的大box -->
              </template>

              </li>
              
          </ul>
          <!-- 竞猜主界面结束 -->

          <!-- 活动细则开始 -->
          <div id='nbaBottomRules'>
              <b id="nba-rules-t">活动细则：</b>
          <p>1、该活动的存款额以美东时间为统计标准，每天中午12点至次日中午12点为一个计算周期；</p>
          <p>2、每天中午12点前完成规定的存款额，可参与当天的竞猜活动（需在比赛开始后30分钟内竞猜并提交结果）；每天中午12点后完成的存款额，只可参与次日的竞猜活动；</p>
          <p>3、该活动每天只可竞猜1次，竞猜成功的会员，可获得18元彩金，完成3倍流水即可提款（最高可提款188元），可投注任意游戏（彩票除外）</p>
          <p>4、竞猜成功的会员，可凭会员账号联系在线客服领取奖励；</p>
          <p>5、每天中午12点后，至第二天的比赛开始后30分钟内，为竞猜时间，在该时段内完成388元存款额即可参与竞猜，逾期未存款或未提交的比赛结果，将无法获得奖励（例如2020年1月1日09:00:00 雷霆VS小牛的比赛，参与竞猜的会员可在12月31日12:00:00后完成存款并参与竞猜，最迟需在01月01日09:30:30前完成存款并提交竞猜结果，超过该时段将无法参与该场竞猜。</p>
          </div>
      </div>
  </div>
</template>

<script>
  import TopnavC from '@/components/common/TopnavC'
  import axios from 'axios'
  export default {
      components: {
          TopnavC
      },
      data () {
          return {
              Nbadata: [],
              scoreResule: [
                  {win: require('../../assets/images/yh/win.png')},
                  {lose: require('../../assets/images/yh/lose.png')},
              ],
              success: false,
              winerOneBg: {
                backgroundColor: '#c2c2c2'
              },
              winerTwoBg: {
                backgroundColor: '#c2c2c2'
              },
              winnerBtnShow: {
                pointerEvents: 'auto'
              }                     
          }
      },
      mounted: function(){
          this.getNbaMessage ()
          this.change()

      },

      methods: {
          change () {
            document.getElementById('top-logo-change').innerHTML = '<p>NBA竞猜</P>'
          },
          getNbaMessage () {
              axios({
                  method: 'get',
                  url:'https://bmw1984.com/api/nba/competition/?format=json',
                  headers: {
                      Authorization: 'Token ' + window.token
                  }
                  }) 
                  .then(Response => {
                      this.Nbadata = Response.data 
                      
                  })
                  .catch(error => {
                      console.log(error)
              })               
          },


          selectSmallBox (event) {
              var eventSmallBox = event.currentTarget
              var eventSmallBoxParent = eventSmallBox.parentNode  //当前点击的元素的父元素

              //获取父元素的其他兄弟元素
              var siblingss = []; //用来存放父元素的其他的兄弟节点
              var elseLi = eventSmallBoxParent.parentNode.children; 
              for (var i = 0, elseLil = elseLi.length; i < elseLil; i++) {
                  if (elseLi[i] !== eventSmallBoxParent) {//判断是否是ele节点，是否与触发事件的节点相同
                      siblingss.push(elseLi[i]);
                  }
              }
              
              //当前小box隐藏
              eventSmallBox.style.display = "none"
              //大box显示
              eventSmallBox.parentNode.children[1].style.display = "block"

              //父元素的其他兄弟元素的子元素操作
              for(var i = 0; i<siblingss.length ;i++){
                  siblingss[i].children[1].style.display = "none"
                  siblingss[i].children[0].style.display = "block"
              }
             
          },

          //点击大box时 大box隐藏 小box显示
          selectBigBox (event) {
              var eventBigBox = event.currentTarget
              eventBigBox.style.display = "none"
              eventBigBox.parentNode.children[0].style.display = "block"
          },

          //点击第一个队伍时
          selectTeamOne (index) {
            //点击后就禁用按钮，防止重复提交
            this.winnerBtnShow.pointerEvents = 'none'
            if (window.token == '') {
              window.requirePath = '/guessNBA'
              this.$router.push('/login')
            } else {
              let nbaNum = this.Nbadata[index].competition.pk
              let nbaTeam = this.Nbadata[index].competition.team_one.team_name
              axios({
                method: 'post',
                url:'https://bmw1984.com/api/nba/lottery/?format=json',
                headers: {
                  Authorization: 'Token ' + window.token
                },
                data: {
                  competition_id: nbaNum,
                  competition_team: nbaTeam
                }
              }).then(Response => {
                  let RequsMessages = Response.data.message 
                  if(RequsMessages == "提交成功"){
                    this.winerOneBg.backgroundColor = '#b51e1a'
                  } else {
                    alert(RequsMessages)  
                  }
                }).catch(error => {
                  if(status = 401){
                    alert("您还未登录")
                  }else{
                    alert("提交错误，请联系客服")
                  }
                  
              })
            }
          },
          //点击第二个队伍时
          selectTeamTwo (index) {
            //点击后就禁用按钮，防止重复提交
            this.winnerBtnShow.pointerEvents = 'none'
            if (window.token == '') {
              window.requirePath = '/order'
              this.$router.push('/login')
            } else {
              let nbaNum = this.Nbadata[index].competition.pk
              let nbaTeam = this.Nbadata[index].competition.team_two.team_name
              axios({
                method: 'post',
                url:'https://bmw1984.com/api/nba/lottery/?format=json',
                headers: {
                  Authorization: 'Token ' + window.token
                },
                data: {
                  competition_id: nbaNum,
                  competition_team: nbaTeam
                }
              }).then(Response => {
                let RequsMessages = Response.data.message 
                if(RequsMessages == "提交成功"){
                  this.winerTwoBg.backgroundColor = '#b51e1a'
                } else {
                  alert(RequsMessages)             
                }
              }).catch(error => {
                if(status = 401){
                    alert("您还未登录")
                  }else{
                    alert("提交错误，请联系客服")
                  }
              })
            }
          }
      },

  }
</script>

<style>


#nbaBox {
  width: 100%;
  background-image: url('../../assets/images/yh/NBAbackground.png');
  background-size: cover;
}
#nbaGuessPage{
  width: 90%;
  margin: 0 auto;
  height: 100%;
  color: #FFFFFF;
  font-size: 0.8rem;
  margin-top: 5.98vh;

}  

#nbaTopMessages{
  font-weight: bold;
  padding-top:20px;
  padding-bottom:5px;  
  margin-bottom: 1rem;
}

#nbaGuessMain {
  margin-bottom: 20px;
}
#nbaGuessMain li{
  margin-bottom: 2px;
}



/*竞猜  小盒子 ---开始---*/

.nbaGussSmallBox {
  width: 100%;
  background-color: #212b49;
  position: relative;
}
.nbaGussSmallBox ul{
  width: 100%;
  display: flex;
  justify-content:space-between
}
.nbaGussSmallBox li {
  float: left;
}

/*时间 */
.nbaGussSmallBox-time{
  width: 23%;
  font-size: 0.675rem;
  padding: 35px 0;
}

/*team和team图片*/
.nbaGussSmallBox-team{
  width: 20%;
  position: relative;
}


.nbaGussSmallBox-team-leftpic{
  left: -9%;
  width: 20%;
  height: 30%;
  position:absolute
}

.nbaGussSmallBox-team-left{
  float: right;
  padding: 15px 0;
 }

.nbaGussSmallBox-team-rightpic{
  right:9%;
  width: 20%;
  height: 30%;
  position:absolute
 }

.nbaGussSmallBox-team-right{
  float: left;
  padding: 15px 0;
 }


/*vs*/
.nbaGussSmallBox-vs {
  font-size: 20px;
  color: #d2060a;
  font-weight: bold;
  width: 6%;
  padding: 35px 0;

}



/*结果*/
.nbaGussSmallBox-result{
  width: 25%;
  padding: 40px 0;

}

.nbaGussSmallBox-result span{
  color: #d2060a;
  font-size: 0.625rem;
  font-weight: bold;
  border: solid 1px #d2060a;
  border-radius: 8%;
  padding: 4px;
  width: 100%;
  margin-left: -25px;
}

/*是否结束图片*/
  .nbaEnd {
  width: 12%;
  position:absolute;
  top: 0;
  right: 0;
}
.nbaEnd img{
  width: 139%;
  height: 80%;
  float: right;
  }
/*竞猜  小盒子---结束---*/

/*竞猜盒子中  展开的大盒子*/
.nbaGussBigBox{
  width: 100%;
  background-image: linear-gradient(to top right, #212b49 , #471b1a);
  display: none;
}

.nbaGussBigBox-team{
  width: 100%;
  position: relative;

}
.nbaGussBigBox-team ul{
  overflow: hidden;
  width: 100%;
}
.nbaGussBigBox-team li{  
  float: left;
}

.nbaGussBigBox-team-1{
  margin-left: 18%;
}

.nbaGussBigBox-team-2,.nbaGussBigBox-team-3{
  margin-left: 8%
}


.nbaGussBigBox-team-2-timedata {
  margin-top: 10px;
  color: #4f4f71;
}

.nbaGussBigBox-team-2-clock {
  color: #4f4f71;
}

.nbaGussBigBox-team-2-score {
  color: #b51e1a;
  font-size: 1rem;
  font-weight: bold;
}

.nbaGussBigBox-team-2 p{
  margin-bottom: 60%;
}



.nbaGussBigBox-team-1 p,.nbaGussBigBox-team-3 p{
  margin-bottom: 10px;
}

.nbaGussBigBox-team-1 p:first-child,.nbaGussBigBox-team-3 p:first-child {
  margin-top: 35%;
}
/*竞猜盒子中  展开的大盒子   -结束-*/


/*底部细则部分*/
#nbaBottomRules {
  background-color: #212b49;
  text-align: left;
  padding: 5px 10px;
  color: #51608e;
}
#nbaBottomRules p{
  margin-bottom: 5px;
  margin-top: 5px;
}


/*竞猜选择*/
.NbaWiner{
  text-align: center;
  font-size: 1rem;
  /* width: 20px;
  height: 10px; */
  border-radius: 5px;
  padding:2px 0;
}   




@media screen and (min-width: 490px){
  .nbaGussBigBox-team-1{
    margin-left:26% ;
  }
  .nbaEnd {
    width: 8%;
  }  
}
</style>
