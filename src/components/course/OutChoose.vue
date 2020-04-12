<template>
  <div>
    <div class="close" @click="$router.back()"></div>
    <div v-if="!complete">
      <img class="img" src="">
      <div class="loading"> 加载中......</div>
    </div>
    <div v-else>
      <div class="personList">
        <div class="person personActive"></div>
        <div class="person"></div>
        <div class="person"></div>
      </div>
      <div class="contentBox">
        <div class="content">
          <div class="name">Emma Watson</div>
          <div class="age">教龄 10年</div>
          <div class="detail">这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分 这是外教个人信息展示部分</div>
        </div>        
      </div>
      <div class="buttom" @click="toStudy">
        <button class="button">购买课程</button>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'out',
  data () {
    return {
      complete: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.complete = true
    }, 1000)
  },
  methods: {
    toStudy () {
      this.$bus.courseIndex = 0
    }
  }
}
</script>

<style lang="less" scoped>
.close {
  .wh(0.44rem);
  position: absolute;
  top: 0.26rem;
  right: 0.34rem;
  border: 1px solid #000;
}
.img {
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  .wh(1.63rem);
  margin: auto;
}
.loading {
  position: absolute;
  top: 5.1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.26rem;
  color: #989898;
}
.personList {
  margin-top: 1rem;
  .flex(space-around);
  .person {
    .wh(1.7rem);
    background-color: #ffffff;
    border: solid 0.04rem #1f7beb;
    border-radius: 100%;
    &:nth-child(2) { border: solid 0.04rem #f39800;}
    &:nth-child(3) { border: solid 0.04rem #8957a1;}
    position: relative;
  }
  .personActive {
    &::before {
      content: '';
      width: 1.9rem;
      height: 100%;
      background-color: #dedede;
      position: absolute;
      border-radius: 100%;
      top: -0.1rem;
      left: -0.1rem;
      z-index: -1;      
    }
    &::after{
      content: '';
      width: 1.9rem;
      height: 70%;
      background-color: #dedede;
      position: absolute;
      bottom: -0.1rem;
      left: -0.1rem;
      z-index: -1;
    }
  }
}
.contentBox {
  display: flex;
  align-items: center;
  justify-content: center;
  .wh(7rem, 8.58rem);
  margin: auto;
  background-color: #dedede;
  .content {
    .wh(6.48rem, 8.04rem);
    background-color: #f8f8f8;
    border-radius: 0.3rem;
    .name {
      margin: 0.43rem 0 0.17rem 0.48rem;
      color: #000000;
      font-size: 0.36rem;
    }
    .age {
      margin-left: 0.48rem;
      font-size: 0.3rem;
      color: #606060;
    }
    .detail {
      margin: 0.63rem 0 0 0.48rem;
      font-size: 0.24rem;
      color: #000000;
    }
  }
}
.buttom {
  position: fixed;
  bottom: 0;
  .wh(7.5rem, 1.3rem);
  background-color: #ffffff;
  box-shadow: 0px 0.02rem 0.1rem 0px rgba(0, 0, 0, 0.2);
  .button {
    display: block;
    .wh(6.4rem, 0.88rem);
    margin: 0.16rem auto 0;
    background-color: #1f7beb;
    border-radius: 0.1rem;
    border: 0;
    color: #ffffff;
    font-size: 0.3rem;
  }
}
</style>