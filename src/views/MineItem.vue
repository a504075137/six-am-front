<template>
  <div>
    <Navigatehead>
      <div slot="head">{{headList[$bus.myItem]}}</div>
      <div class="back icon" @click="goBack" slot="icon">{{back}}</div>
    </Navigatehead>
  </div>
</template>

<script>
export default {
  name: "mineItem",
  data() {
    return {
      headList: [
        "设置",
        "打卡",
        "已购课程",
        "激活码激活",
        "账户充值",
        "关于我们"
      ],
      back: "<"
    };
  },
  methods: {
    goBack() {
      this.$router.replace("Mine");
    }
  }
};
</script>

<style lang="less">
.back {
  font-size: 0.4rem;
}
</style>