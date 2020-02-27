<template>
  <div class="recommend">
    <div class="mine">
      <div class="tab">
        <div class="title">热门社群</div>
        <div class="search">更多</div>
      </div>
      <div class="mysocial">
        <div class="content">
          <div class="border"></div>
          <div class="text">
            <span>社群名称</span>
            <div class="join">加入</div>
          </div>
        </div>
        <div class="content">
          <div class="border"></div>
          <div class="text">
            <span>社群名称</span>
            <div class="join">加入</div>
          </div>
        </div>
        <div class="content">
          <div class="border"></div>
          <div class="text">
            <span>社群名称</span>
            <div class="join">加入</div>
          </div>
        </div>
      </div>
    </div>
    <div class="user">
      <div class="tabline">
        <div class="avaturl"></div>
        <div class="inf">
          <span class="name">用户名</span>
          <span class="time">今天 10:33</span>
        </div>
        <div class="menu">
          <div class="join">关注</div>. . .
        </div>
      </div>
      <div class="content">
        <div class="pic"></div>
        <div class="word">
          <div class="title">用户动态的标题</div>
          <div
            class="cont"
          >内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="btn">
        <div>评论</div>
        <div>分享 6</div>
        <div>点赞 3</div>
      </div>
    </div>
    <div class="user">
      <div class="tabline">
        <div class="avaturl"></div>
        <div class="inf">
          <span class="name">用户名</span>
          <span class="time">今天 10:33</span>
        </div>
        <div class="menu">
          <div class="join">关注</div>. . .
        </div>
      </div>
      <div class="content">
        <div class="pic"></div>
        <div class="word">
          <div class="title">用户动态的标题</div>
          <div
            class="cont"
          >内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="btn">
        <div>评论</div>
        <div>分享 6</div>
        <div>点赞 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.recommend {
  .wh(100vw, 75vh);
  padding-bottom: 3rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(248, 248, 248);
  @media @long {
    height: 81vh;
  }
  > div {
    background-color: #ffffff;
  }
  > .mine {
    .wh(100vw, 3.8rem);
    .flex-column(space-between);
    padding-top: 0.3rem;
    > .tab {
      .wh(100vw, 0.34rem);
      .flex(space-between);
      > .title {
        height: 100%;
        font-size: 0.36rem;
        font-weight: bold;
        font-stretch: normal;
        line-height: 0.34rem;
        letter-spacing: 0px;
        color: #000000;
        margin-left: 0.3rem;
      }
      > .search {
        height: 0.19rem;
        font-family: SimHei;
        font-size: 0.2rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.36rem;
        letter-spacing: 0px;
        color: #989898;
        margin-right: 0.3rem;
      }
    }
    > .mysocial {
      .flex(space-around);
      .wh(100vw, 2.82rem);
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
          .flex(space-between);
          > span {
            display: inline-block;
            width: 1rem;
          }
          > .join {
            .wh(0.71rem, 0.28rem);
            line-height: 0.28rem;
            text-align: center;
            border-radius: 0.1rem;
            border: solid 1px #1f7beb;
            font-size: 0.2rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #1f7beb;
            margin-left: 0.08rem;
          }
        }
      }
    }
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
        border: 1px solid #000000;
        margin: 0 0.16rem 0 0.32rem;
      }
      > .inf {
        height: 0.65rem;
        .flex-column();
        > .name {
          font-size: 0.3rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #000000;
        }
        > .time {
          font-size: 0.2rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #989898;
        }
      }
      > .menu {
        height: 0.28rem;
        line-height: 0.28rem;
        .p-a();
        top: 0.31rem;
        right: 0.38rem;
        font-size: 0.24rem;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #000000;
        .flex();
        > .join {
          .wh(0.71rem, 0.28rem);
          line-height: 0.28rem;
          text-align: center;
          border-radius: 0.1rem;
          border: solid 1px #1f7beb;
          font-size: 0.2rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #1f7beb;
          margin-right: 0.08rem;
          margin-top: 0.1rem;
        }
      }
    }
    > .content {
      .wh(90%, 1.95rem);
      .center-row();
      .flex(space-between);
      margin-top: 0.16rem;
      > .pic {
        .wh(1.78rem, 1.95rem);
        background-color: #fff45c;
        border-radius: 0.1rem;
      }
      > .word {
        .wh(4.55rem, 100%);
        .flex-column(space-between, flex-start);
        > .title {
          font-size: 0.32rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #000000;
        }
        > .cont {
          font-size: 0.24rem;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
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
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #989898;
      }
    }
  }
}
</style>