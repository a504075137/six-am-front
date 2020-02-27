<template>
  <div class="inputTab">
    <div class="info">
      <slot class="icon" name="icon"></slot>
      <slot class="name" name="name"></slot>
    </div>

    <img src="@imgs/right-arrow.png" alt class="arror" />
  </div>
</template>

<script>
export default {
  name: "InputTab"
};
</script>

<style lang="less">
.inputTab {
  .wh(100vw, 0.88rem);
  background-color: #ffffff;
  color: #000000;
  font-size: 0.3rem;
  line-height: 0.88rem;
  .flex(space-between);
  > .arror {
    width: 0.22rem;
    margin-right: 0.28rem;
  }
  > .info {
    .flex(flex-start);
    > .name {
      align-self: flex-start;
      margin-left: 0.45rem;
    }
    > .icon {
      .wh(0.48rem);
      margin-left: 0.32rem;
    }
  }
}
</style>