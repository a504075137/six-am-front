<template>
  <div class="content">
    <div class="tab">
      <div class="title">{{name}}</div>
      <div class="search">{{option}} ></div>
    </div>
    <div class="mysocial">
      <div class="content">
        <div class="border"></div>
        <span class="text">课程名字</span>
      </div>
      <div class="content">
        <div class="border"></div>
        <span class="text">课程名字</span>
      </div>
      <div class="content">
        <div class="border"></div>
        <span class="text">课程名字</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["name", "option"]
};
</script>

<style lang="less" scoped>
.content {
  background: #fff;
  .wh(100vw, 3.72rem);
  .flex-column(space-between);
  margin-top: 0.22rem;
  > .tab {
    .wh(100vw, 0.80rem);
    .flex(space-between);
    > .title {
      height: 100%;
      font-size: 0.36rem;
      line-height: 0.80rem;
      color: #000000;
      margin-left: 0.32rem;
    }
    > .search {
      font-size: 0.2rem;
      line-height: 0.80rem;
      color: #989898;
      margin-right: 0.32rem;
    }
  }
  > .mysocial {
    .flex(space-around);
    .wh(100vw, 2.70rem);
    padding-bottom: 0.21rem;
    > .content {
      .wh(1.78rem, 100%);
      .flex-column(space-between);
      > .border {
        .wh(100%, 2.23rem);
        border-radius: 0.2rem;
      }
      &:nth-of-type(1) {
        > .border {
          background-color: #1f7beb;
        }
      }
      &:nth-of-type(2) {
        > .border {
          background-color: #f39800;
        }
      }
      &:nth-of-type(3) {
        > .border {
          background-color: #8fc31f;
        }
      }
      > .text {
        font-size: 0.24rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #000000;
        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>