<template>
  <div class="socail">
    <div class="tab">
      <div class="title">{{name}}</div>
      <div class="search">{{option}} ></div>
    </div>
    <div class="mysocial">
      <div class="content">
        <div class="border"></div>
        <div class="club">
          <span class="text" :style="join ? '' : 'width: 100%; textAlign: center;'">社群名称</span>
          <div class="join" v-if="join">加入</div>
        </div>
      </div>
      <div class="content">
        <div class="border"></div>
        <div class="club">
          <span class="text" :style="join ? '' : 'width: 100%; textAlign: center;'">社群名称</span>
          <div class="join" v-if="join">加入</div>
        </div>
      </div>
      <div v-if="!newSocial" class="content">
        <div class="border"></div>
        <div class="club">
          <span class="text" :style="join ? '' : 'width: 100%; textAlign: center;'">社群名称</span>
          <div class="join" v-if="join">加入</div>
        </div>
      </div>
      <div v-else class="content">
          <div class="newBorder"><div class="add">+</div></div>
          <span class="text">新建社群</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socail",
  props: ["name", "option","newSocial", "join"]
};
</script>

<style lang="less" scoped>
.socail {
  background: #fff;
  .wh(100vw, 3.8rem);
  .flex-column(space-between);
  border-bottom: 0.1rem solid rgb(248, 248, 248);
  margin-top: 0.22rem;
  > .tab {
    .wh(100vw, 0.80rem);
    .flex(space-between);
    margin-bottom: 0.18rem;
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
        > .newBorder {
            display: flex;
            align-items: center;
            justify-content: center;
            .wh(calc(100% - 0.03rem), 2.2rem);
            border-radius: 0.2rem;
            border: solid 0.03rem #8fc31f;
            > .add {
                display: flex;
                align-items: center;
                justify-content: center;
                .wh(0.58rem, 0.58rem);
                font-size: 1rem;
                color: #8fc31f;
                font-weight: 100;
            }
        }
      }
      .club {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
      .text {
        font-size: 0.24rem;
        color: #000000;
        margin-bottom: 0.1rem;
      }
      .join {
        .wh(0.7rem,0.28rem);
        border-radius: 0.1rem;
        border: solid 0.01rem #1f7beb;
        font-size: 0.2rem;
        text-align: center;
        color: #1f7beb;
      }
    }
  }
}
</style>