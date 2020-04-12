<template>
  <div class="vip">
      <div class="user">
          <div class="content">
              <div class="name">用户名/昵称</div>
              <div class="detail">成为六点优课的会员，学习地道英语</div>
          </div>
          <div class="img"></div>
      </div>
      <div class="purcase">
          <div class="title">VIP会员套餐</div>
          <div class="contentList">
              <img class="content" v-for="(item, index) in imgList" :key="index" :src="item.src">
          </div>
          <button class="button">立即开通</button>
      </div>
      <div class="power">
          <div class="title">VIP特权</div>
          <div class="contentList">
              <div class="content" v-for="power in powerList" :key="power.name">
                    <div class="img" :style="`backgroundColor: ${power.img};`"></div>
                    <div class="name">{{power.name}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'vip',
    data () {
        return {
            powerList: [
                {img: '#f8f2e9', name: '特权1'},
                {img: '#f8f2e9', name: '特权2'},
                {img: '#f8f2e9', name: '特权3'},
                {img: '#f8f2e9', name: '特权4'}
            ],
            imgList: [
                {src: ''},
                {src: ''},
                {src: ''}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.vip {
    .user {
        .flex(space-between, flex-start);
        .wh(100%, 2.5rem);
        background-color: #facd89;
        .content {
            margin-left: 0.6rem;
            margin-top: 0.81rem;
            .name {
                font-size: 0.36rem;
                color: #000000;
            }
            .detail {
                margin-top: 0.22rem;
                font-size: 0.2rem;
                color: #000000;
                opacity: 0.6;
            }
        }
        .img {
            .wh(1.2rem);
            margin-right: 0.35rem;
            margin-top: 0.62rem;
            background-color: #ffffff;
            border: solid 0.03rem #f39800;
            border-radius: 100%;
        }
    }
    .purcase {
        width: 100%;
        .title {
            margin-left: 0.33rem;
            margin-top: 0.46rem;
            font-size: 0.32rem;
            color: #000000;
        }
        .contentList {
            .flex(space-between);
            padding: 0 0.34rem;
            margin: 0.35rem 0 0.45rem;
            .content {
                .wh(1.8rem, 2.2rem);
                border: solid 0.01rem #989898;
            }
        }
        .button {
            display: block;
            .wh(6.4rem, 0.88rem);
            margin: 0 auto;
            background-color: #facd89;
            border-radius: 0.2rem;
            border: 0;
            font-size: 0.3rem;
	        color: #000000;
        }
    }
    .power {
        width: 100%;
        .title {
            margin-top: 0.84rem;
            margin-left: 0.33rem;
            margin-bottom: 0.46rem;
            font-size: 0.32rem;
            color: #000000;
        }
        .contentList {
            .flex(space-between);
            padding: 0 0.54rem;
            .content {
                .flex-column(space-between);
                .wh(1rem, 1.54rem);
                .img {
                    .wh(1rem);

                }
                .name {
                    font-size: 0.24rem;
                    color: #989898;
                }
            }
        }
    }
}
</style>