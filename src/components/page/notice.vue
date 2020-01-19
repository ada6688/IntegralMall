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
        '第一条公告第一条公告第一条公告第一条公告第一第一条公告第一第一条公告第一'
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
