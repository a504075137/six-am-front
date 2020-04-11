<template>
<div class="socailuser">
    <div class="user" v-for="user in userData" :key="user.id">
        <div class="tabline">
        <div class="avaturl" :style="`border: 0.03rem solid${user.avaturl};`"></div>
        <div class="inf">
            <span class="name">{{user.name}}</span>
            <span class="time">{{user.time}}</span>
        </div>
        <div class="look" v-if="user.toLook">关注</div>
        <div class="menu">. . .</div>
        </div>
        <div class="content">
        <div class="pic" :style="`backgroundColor:${user.imgurl};`"></div>
        <div class="word">
            <div class="title">{{user.title}}</div>
            <div class="cont">{{user.content}}</div>
        </div>
        </div>
        <div class="line"></div>
        <div class="btn">
        <div>评论</div>
        <div>分享 {{user.shareTime}}</div>
        <div>点赞 {{user.likeTime}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'socialuser',
  props: {userData: Array}
}
</script>

<style lang="less" scoped>
.socailuser {
  background-color: rgb(248, 248, 248);
  > div {
    background-color: #ffffff;
  }
  > .user {
    .wh(100vw, 3.8rem);
    margin-top: 0.09rem;
    .p-r();
    &:last-of-type {
      margin-bottom: 0.2rem;
    }
    // .flex-column(space-between);
    > .tabline {
      .wh(100%, 0.65rem);
      .flex(flex-start);
      padding-top: 0.23rem;
      > .avaturl {
        .wh(0.6rem);
        border-radius: 50%;
        margin: 0 0.16rem 0 0.32rem;
      }
      > .inf {
        height: 0.65rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        > .name {
          font-size: 0.3rem;
          color: #000000;
        }
        > .time {
          font-size: 0.2rem;
          color: #989898;
        }
      }
      > .look {
        position: absolute;
        top: 0.28rem;
        right: 0.82rem;
        .wh(0.7rem,0.28rem);
        border-radius: 0.1rem;
        border: solid 0.01rem #1f7beb;
        font-size: 0.2rem;
        text-align: center;
        color: #1f7beb;
      }
      > .menu {
        .p-a();
        height: 0.04rem;
        line-height: 0.04rem;
        top: 0.36rem;
        right: 0.38rem;
        font-size: 0.24rem;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #000000;
      }
    }
    > .content {
      .wh(6.74rem, 1.95rem);
      .center-row();
      .flex(space-between);
      margin-top: 0.16rem;
      > .pic {
        .wh(1.78rem, 1.95rem);
        background-color: #f39800;
        border-radius: 0.1rem;
      }
      > .word {
        .wh(4.55rem, 100%);
        .flex-column(space-between, flex-start);
        > .title {
          font-size: 0.32rem;
          color: #000000;
        }
        > .cont {
          font-size: 0.24rem;
          color: #000000;
        }
      }
    }
    > .line {
      width: 6.86rem;
      height: 0.04rem;
      background-color: #f8f8f8;
      .center-row();
      bottom: 0.58rem;
    }
    > .btn {
      .wh(100vw, 0.58rem);
      .p-a();
      bottom: 0;
      .flex();
      > div {
        .wh(100%);
        text-align: center;
        line-height: 0.58rem;
        font-size: 0.2rem;
        color: #989898;
      }
    }
  }
}
</style>