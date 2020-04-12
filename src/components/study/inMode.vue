<template>
  <div class="in">
    <div class="content">
      <div v-if="typeIndex === 0" class="unit">
        <div class="title"></div>
        <div class="audio"></div>
        <button class="choose">选项</button>
        <button class="choose">选项</button>
        <button class="choose">选项</button>
        <button class="choose active">选项</button>
      </div>
      <div v-else-if="typeIndex === 1" class="comp">
        <div class="title"></div>
        <div class="ope play"></div>
        <div class="ope speak"></div>
      </div>
      <div v-else class="gene">
        <p class="title">英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题 英文题</p>
        <button class="choose">选项</button>
        <button class="choose">选项</button>
        <button class="choose">选项</button>
        <button class="choose active">选项</button>  
      </div>
    </div>
    <div class="pre" @click="changeIndex(-1)"></div>
    <div class="next" @click="changeIndex(1)"></div>
  </div>
</template>

<script>
export default {
  name: 'in',
  data () {
    return {
      typeList: ['unit', 'comp', 'gene'],
      typeIndex: 0
    }
  },
  methods: {
    changeIndex(index) {
      if (index > 0) this.typeIndex > 1 ? 0 : this.typeIndex = this.typeIndex + 1
      else this.typeIndex < 1 ? 2 : this.typeIndex = this.typeIndex - 1
    }
  }
}
</script>

<style lang="less" scoped>
.in {
  margin-top: 0.7rem;
  .content {
    .unit {
      .title {
        .wh(4.8rem, 3.3rem);
        margin: auto;
        background-color: #ffffff;
        border-radius: 0.1rem;
      }
      .audio {
        display: block;
        .wh(1.2rem);
        margin: 0.38rem auto 0.48rem;
        border: 1px solid #fff;
      }
    }
    .comp {
      .title {
        .wh(6.17rem, 4.31rem);
        background-color: #ffffff;
        border-radius: 0.1rem;
        margin: auto;
      }
      .ope {
        position: absolute;
        bottom: 0.5rem;
        .wh(1.2rem);
        border: 1px solid #fff;
      }
      .play {
        left: 2.3rem;
      }
      .speak {
        right: 2.3rem;
      }
    }
    .gene {
      .title {
        display: block;
        .wh(6.23rem, 1.5rem);
        margin: 1.62rem auto 2.2rem;
        line-height: 0.6rem;
        font-size: 0.3rem;
        color: #ffffff;
      }
    }
  }
  .pre {
    .wh(0.76rem, 0.54rem);
    position: absolute;
    bottom: 0.84rem;
    left: 0.54rem;
    border: 1px solid #fff;
  }
  .next {
    .wh(0.76rem, 0.54rem);
    position: absolute;
    bottom: 0.84rem;
    right: 0.54rem;
    border: 1px solid #fff;
  }
}
.choose {
  display: block;
  .wh(6.18rem, 0.76rem);
  margin: auto;
  margin-bottom: 0.28rem;
  background-color: #ffffff;
  outline: none;
	border-radius: 0.1rem;
}
.active {
  opacity: 0.2;
}
</style>