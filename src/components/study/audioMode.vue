<template>
  <div class="audio">
    <div class="list">
      <div class="single">
        <div class="img"></div>
        <div class="listen" :style="`width:${60/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">60s</div>
        </div>
      </div>
      <div class="single">
        <div class="img"></div>
        <div class="listen" :style="`width:${60/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">60s</div>
        </div>
      </div>
      <div class="single">
        <div class="img"></div>
        <div class="listen" :style="`width:${60/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">60s</div>
        </div>
      </div>
      <div class="single">
        <div class="img"></div>
        <div class="listen" :style="`width:${60/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">60s</div>
        </div>
      </div>
      <div class="single">
        <div class="img"></div>
        <div class="listen active" :style="`width:${45/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">45s</div>
        </div>
      </div>
      <div class="single">
        <div class="img"></div>
        <div class="listen" :style="`width:${20/60 * 4.90}rem;`">
          <div class="icon"></div>
          <div class="time">20s</div>
        </div>
      </div>
    </div>
    <div class="content"></div>
    <div class="pre"></div>
    <div class="next"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.audio {
  margin-top: 0.7rem;
  .list {
    .single {
      .flex(flex-start);
      margin-bottom: 0.32rem;
      color: #000000;
      font-size: 0.3rem;
      .img {
        .wh(0.86rem);
        margin: 0 0.4rem 0 0.66rem;
        background-color: #ffffff;
        border: solid 0.03rem #195ed7;
        border-radius: 100%;
      }
      .listen {
        .flex(flex-start);
        .icon {
          .wh(0.45rem 0.37rem);
          margin: 0 0.2rem 0 0.23rem;
          border: 1px solid #000;
        }
        height: 0.86rem;
        background-color: #ffffff;
        border-radius: 0.1rem;
        opacity: 0.8;
      }
      .active {
        opacity: 1;
      }
    }
  }
  .content {
    position: absolute;
    bottom: 0.98rem;
    left: 50%;
    transform: translateX(-50%);
    .wh(6.18rem, 3.32rem);
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