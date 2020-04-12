<template>
  <header class="header" :class="hasBorder? 'box-shadow' : ''">
    <slot name="icon"></slot>
    <div class="head">
      <slot name="head"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigatehead",
  props: { hasBorder: true }
};
</script>

<style lang="less" scoped>
.header {
  .wh(100vw, 0.88rem);
  .p-r();
  .flex(flex-start, center);
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.36rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #000000;
  background-color: #ffffff;
  > .icon {
    // .p-a();
    // top: 0.24rem;
    margin-left: 0.32rem;
  }
  > .head {
    .center-row();
  }
}
.box-shadow {
  box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(0, 0, 0, 0.2);
}
</style>