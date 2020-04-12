<template>
  <div>
    <div class="single top">
      <div class="type">课程名称</div>
      <div class="value">*******</div>
    </div>
    <div class="single">
      <div class="type">我的ID</div>
      <div class="value">*******</div>
    </div>
    <div class="single">
      <div class="type">订单号</div>
      <div class="value">*******</div>
    </div>
    <div class="single top">
      <div class="type">支付方式</div>
      <div class="value right"></div>
    </div>
    <div class="single">
      <div class="type">微信</div>
      <div class="check active"></div>
    </div>
    <div class="single">
      <div class="type">支付宝</div>
      <div class="check"></div>
    </div>
    <div class="single">
      <div class="type">银行卡</div>
      <div class="check"></div>
    </div>
    <div class="buttom" @click="toStudy">
      <button class="button">立即缴费</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'purcase',
  methods: {
    toStudy () {
      // todo: 购买逻辑
      this.$bus.courseIndex = 2
    }
  }
}
</script>

<style lang="less" scoped>
  .top {
    border-top: 0.28rem solid rgb(248, 248, 248);
  }
  .single {
    .flex(space-between);
    padding: 0.3rem 0.28rem 0.3rem 0.34rem;
    border-bottom: 0.2rem solid rgb(248, 248, 248);
    .type {
      font-size: 0.3rem;
      color: #000000;
    }
    .value {
      font-size: 0.3rem;
      color: #000000;
    }
    .check {
      .wh(0.26rem);
      background-color: #f8f8f8;
      border: solid 0.02 #606060;
      border-radius: 100%;
    }
    .active {
      background-color: #1f7beb;
    }
    .right {
      .wh(0.22rem, 0.36rem);
      .bg-contain("right-arrow.png");
    }
  }
  .buttom {
    position: absolute;
    bottom: 0;
    .wh(7.5rem, 1.3rem);
    background-color: #ffffff;
    box-shadow: 0px 0.02rem 0.1rem 0px rgba(0, 0, 0, 0.2);
    .button {
      display: block;
      .wh(6.4rem, 0.88rem);
      margin: 0.16rem auto 0;
      background-color: #1f7beb;
      border-radius: 0.1rem;
      border: 0;
      color: #ffffff;
      font-size: 0.3rem;
    }
  }
</style>