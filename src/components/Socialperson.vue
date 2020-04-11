<template>
<div>
  <div class="person">
    <div class="user" v-for="user in userData" :key="user.id">
      <div class="tabline">
        <div class="avaturl"></div>
        <div class="inf">
          <span class="name">{{user.name}}</span>
          <span class="time">{{user.time}}</span>
        </div>
        <div class="menu">. . .</div>
      </div>
      <div class="content">
        <div class="pic"></div>
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
  <button class="button">写文章 / 写笔记</button>
</div>

</template>

<script>
export default {
  name: 'socialpersion',
  props: {userData: Array}
}
</script>

<style lang="less">
.person {
  .wh(100vw, auto);
  // padding-bottom: 3rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(248, 248, 248);
  @media @long {
    // height: 81vh;
  }
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
        border: 0.03rem solid #f39800;
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
      > .menu {
        .p-a();
        top: 0.41rem;
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
.button {
  position: fixed;
  z-index: 99;
  bottom: 1.05rem;
  .wh(6.84rem, 0.88rem);
  margin: 0 0.34rem;
	background-color: #1f7beb;
	box-shadow: 0px 2px 2px 0px 
		rgba(0, 0, 0, 0.2);
	border-radius: 10px;
  border: solid 1px #1f7beb;
  color: #ffffff;
  font-size: 0.3rem;
}
</style>