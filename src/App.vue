<template>
  <div id="app">
    <router-view />
    <footer class="footer" v-show="$router.currentRoute.path !== '/MineItem' ">
      <div
        class="foot-item"
        v-for="(item,index) in footList"
        @click="switchFoot(index)"
        :key="index"
      >
        <img class="icon" :src="require(`@imgs/foot_${index}.png`)" />
        <span :class="activeFoot == index && 'active'">{{item}}</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      activeFoot: 0,
      footList: ["首页", "学习", "社群", "我的"]
    };
  },
  methods: {
    switchFoot(index) {
      if (this.activeFoot === index) {
        return;
      }
      this.activeFoot = index;
      switch (index) {
        case 0:
          this.$router.replace("home");
          break;
        case 1:
          this.$router.replace("study");
          break;
        case 2:
          this.$router.replace("social");
          break;
        case 3:
          this.$router.replace("mine");
          break;
      }
    }
  },
  mounted() {
    if (
      this.$router.currentRoute.path !== "/" &&
      this.$router.currentRoute.path !== "/home"
    ) {
      this.$router.replace("/home");
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  .page();
  > .footer {
    .wh(100vw, 0.98rem);
    .flex(space-around);
    .p-a();
    bottom: 0;
    z-index: 9999;
    background-color: #ffffff;
    box-shadow: 0rem 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.2);
    > .foot-item {
      text-align: center;
      height: 100%;
      font-size: 0.2rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #989898;
      .flex-column(space-around);
      > .icon {
        width: 0.46rem;
        display: block;
      }
      > span {
        &.active {
          color: #000000;
        }
      }
    }
  }
}
</style>
