<template>
  <header class="header">
    <slot name="icon"></slot>
    <div class="head">
      <slot name="head"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigatehead"
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
  box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(0, 0, 0, 0.2);
  > .icon {
    // .p-a();
    // top: 0.24rem;
    margin-left: 0.32rem;
  }
  > .head {
    .center-row();
  }
}
</style>