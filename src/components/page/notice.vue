<template>
  <div>
    <div class="Notice-textBox">
      <div class="Notice-sign"></div>
        <marquee class="Notice-text" :key="text.id">{{text.val}}</marquee>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      textArr: [
        '!!应广大会员的强烈要求，宝马会特将十一活动 ——【开宝箱、领奖金】设置为日常优惠活动，任何会员只要每天投注额≥6000元，即可在次日14:00后参与【开宝箱、领奖金】活动，宝箱中奖率为100%，最高单笔奖金可达66666元。'
      ],
      number: 0
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
}
</script>

<style scoped>
</style>
