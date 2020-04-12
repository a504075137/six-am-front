<template>
  <div class="sign">
    <img class="time" src="">
    <button class="button">签到</button>
    <div class="lang">每日名言</div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'sign'
}
</script>

<style lang="less" scoped>
.sign {
  width: 100%;
  .time {
    display: block;
    .wh(6.14rem, 5.14rem);
    margin: 0.32rem auto 0.75rem;
  }
  .button {
    display: block;
    .wh(6.4rem, 0.88rem);
    background-color: #f8f8f8;
    margin: auto;
    border: 0;
    font-size: 0.3rem;
	  color: #989898;
  }
  .lang {
    margin: 0.74rem 0 0.48rem 0.58rem;
    font-size: 0.36rem;
	  color: #000000;
  }
  .content {
    .wh(6.4rem, 2.7rem);
    background-color: #f8f8f8;
    margin: auto;
  }
}
</style>