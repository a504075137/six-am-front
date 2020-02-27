<template>
  <div class="mine">
    <Navigatehead>
      <div slot="head">我的</div>
      <div class="notice icon" slot="icon"></div>
    </Navigatehead>
    <div class="avatul-info">
      <div class="avatul"></div>
      <div class="nickName">用户名/昵称</div>
      <div class="userid">ID：12345678</div>
    </div>
    <div class="vip"></div>
    <div class="inputTabWrapper">
      <InputTab
        class="inputTab"
        v-for="(item,index) in inputList"
        :key="index"
        @click.native="jump(index)"
      >
        <div class="icon" :style="{backgroundColor:item.icon}" slot="icon"></div>
        <div class="name" slot="name">{{item.name}}</div>
      </InputTab>
    </div>
  </div>
</template>

<script>
import InputTab from "@c/InputTab.vue";
export default {
  name: "mine",
  components: {
    InputTab
  },
  data() {
    return {
      inputList: [
        {
          name: "设置",
          icon: "#1f7beb"
        },
        {
          name: "打卡",
          icon: "#f39800"
        },
        {
          name: "已购课程",
          icon: "#8957a1"
        },
        {
          name: "激活码激活",
          icon: "#fff45c"
        },
        {
          name: "账户设置",
          icon: "#f19ec2"
        },
        {
          name: "关于我们",
          icon: "#8fc31f"
        }
      ]
    };
  },
  methods: {
    jump(index) {
      console.log(index);
      this.$bus.myItem = index;
      this.$router.replace("MineItem");
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  .page(rgb(248, 248, 248));
  .flex-column(flex-start, center);
  .notice {
    .wh(0.38rem, 0.47rem);
    .bg-contain("notice.png");
  }
  > .avatul-info {
    .p-r();
    .wh(100vw, 2.5rem);
    > .avatul {
      .p-a();
      top: 0.37rem;
      .wh(1.77rem);
      border-radius: 50%;
      border: solid 0.03rem #f39800;
      margin-left: 0.32rem;
    }
    > .nickName {
      .p-a();
      left: 2.48rem;
      top: 0.88rem;
      font-size: 0.36rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.6rem;
      letter-spacing: 0px;
      color: #000000;
    }
    > .userid {
      .p-a();
      left: 2.48rem;
      top: 1.47rem;
      font-size: 0.3rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.6rem;
      letter-spacing: 0px;
      color: #989898;
    }
  }
  > .vip {
    margin-top: 0.18rem;
    .wh(6.92rem, 1.5rem);
    .bg-contain("vip.png");
  }
  > .inputTabWrapper {
    margin-top: 0.2rem;
    .wh(100vw, 5.8rem);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    @media @wide {
      height: 5rem;
    }
    @media @long {
      height: 8rem;
    }
    > .inputTab {
      margin-top: 0.2rem;
    }
  }
}
</style>