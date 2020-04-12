<template>
  <div class="out">
    <div class="content"></div>
    <div class="discuss">
      <div class="title">讨论区</div>
      <div class="detail">
        <div class="img"></div>
        <div class="speak">聊天内容</div>
      </div>
      <div class="detail">
        <div class="speak">聊天内容</div>
        <div class="img"></div>
      </div>
      <div class="send">
        <input type="text" class="input">
        <button class="button">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'outmode'
}
</script>

<style lang="less" scoped>
.out {
  margin-top: 0.7rem;
  .content {
    .wh(6.16rem, 4.3rem);
    margin: auto;
    background-color: #ffffff;
    border-radius: 10px;
  }
  .discuss {
    position: absolute;
    bottom: 0;
    .wh(100%, 6.38rem);
    background-color: rgb(248,248,248);
    .title {
      height: 0.88rem;
      line-height: 0.88rem;
      font-size: 0.3rem;
      color: #000000;
      background-color: #fff;
      text-align: center;
    }
    .detail {
      height: 0.86rem;
      margin: 0.28rem 0 0.28rem 0.4rem;
      display: flex;
      .img {
        .wh(0.86rem);
        background-color: #fff;
        border: solid 0.03rem #195ed7;
        border-radius: 100%;
      }
      .speak {
        .wh(4.5rem, 0.86rem);
        padding-left: 0.4rem;
        margin: 0 0.4rem;
        line-height: 0.86rem;
        background-color: #ffffff;
        border-radius: 0.1rem;
        opacity: 0.8;
        font-size: 0.3rem;
        color: #000000;
      }
    }
    .send {
      width: 100%;
      position: fixed;
      align-items: center;
      bottom: 0;
      height: 0.88rem;
      display: flex;
      background-color: #fff;
      .input {
        .wh(5.66rem, 0.58rem);
        margin: 0 0.34rem 0 0.66rem;
        outline: none;
        background-color: #f8f8f8;
        border-radius: 0.1rem;
        border: solid 0.03rem #989898;
      }
      .button {
        font-size: 0.24rem;
        border: 0;
        background: #fff;
        color: #195ed7;
      }
    }
  }
}
</style>