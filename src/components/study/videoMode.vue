<template>
  <div class="video">
    <div class="detail">
      <div class="ope">
        <div class="icon pause"></div>
        <div class="icon play"></div>
      </div>
    </div>
    <div class="content"></div>
    <div class="pre"></div>
    <div class="next"></div>
  </div>
</template>

<script>
export default {
  name: 'video'
}
</script>

<style lang="less" scoped>
.video {
  .detail {
    .wh(6.18rem, 4.3rem);
    margin: 0.7rem auto;
    background-color: #ffffff;
    position: relative;
    .ope {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0.76rem;
      background-color: #000000;
      opacity: 0.2;
      z-index: 5;
      .flex();
      .icon {
        .wh(0.24rem, 0.26rem);
        border: 1px solid #fff;
      }
      .pause {
        margin: 0 0.3rem 0 0.27rem;
      }
    }
  }
  .content {
    position: absolute;
    bottom: 0.98rem;
    left: 50%;
    transform: translateX(-50%);
    .wh(6.18rem, 5.4rem);
    background-color: #ffffff;
    border-radius: 0.1rem;
  }
  .pre {
    .wh(0.76rem, 0.54rem);
    position: absolute;
    bottom: 0.22rem;
    left: 0.54rem;
    border: 1px solid #fff;
  }
  .next {
    .wh(0.76rem, 0.54rem);
    position: absolute;
    bottom: 0.22rem;
    right: 0.54rem;
    border: 1px solid #fff;
  }   
}
 
</style>