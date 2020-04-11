<template>
<div class="setting">
  <div>
    <div class="single" @click="changeData('img')">
      <div class="type">我的头像</div>
      <div class="value imgUrl"></div>
    </div>
    <div class="single">
      <div class="type">我的昵称</div>
      <div class="value">这是昵称</div>
    </div>
    <div class="single">
      <div class="type">我的ID</div>
      <div class="value myid">12345678</div>
    </div>
    <div class="single" @click="changeData('psw')">
      <div class="type">我的密码</div>
      <div class="value right"></div>
    </div>
    <div class="single">
      <div class="type">*******</div>
      <div class="value">*******</div>
    </div>
    <div class="single">
      <div class="type">*******</div>
      <div class="value">*******</div>
    </div>
    <div class="single">
      <div class="type">背景音乐</div>
      <div class="value"></div>
    </div>
    <div class="single">
      <div class="type">按键音效</div>
      <div class="value"></div>
    </div>
    <div class="single">
      <div class="type">系统语言</div>
      <div class="value">简体中文</div>
    </div>
    <div class="single">
      <div class="type">清除缓存</div>
      <div class="value right"></div>
    </div>
  </div>

  <div v-show="showComfirm" class="confirm" @click="hideConfirm">
    <div class="contentList">
      <div v-for="item in confirmCont" class="content" :class="item.type" :key="item.title" @click.stop="item.methods">
        {{item.title}}
      </div>      
    </div>
    <div class="content cancel">取消</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'setting',
  data () {
    return {
      showComfirm: false,
      confirmCont: []
    }
  },
  methods: {
    hideConfirm () {
      this.showComfirm = false
      this.confirmCont = []
    },
    changeData (type) {
      let typeList = {
        'img': [
          { title: '修改头像', methods: () => {} },
          { title: '拍照', methods: () => {} },
          { title: '相册选取', methods: () => {} }
        ],
        'psw': [
          { title: '重置密码', methods: () => {} },
          { title: '输入旧密码', methods: () => {}, type: 'psw' },
          { title: '输入新密码', methods: () => {}, type: 'psw' },
          { title: '再次输入新密码', methods: () => {}, type: 'psw' }
        ]
      }
      this.showComfirm = true
      this.confirmCont = typeList[type]
    }
  }
}
</script>

<style lang="less" scoped>
.setting {
  height: 100%;
  .single {
    &:nth-child(1) {
      border-top: 0.28rem solid rgb(248, 248, 248);
    }
    .flex(space-between);
    padding: 0.3rem 0.28rem 0.3rem 0.34rem;
    border-bottom: 0.2rem solid rgb(248, 248, 248);
    .type {
      font-size: 0.3rem;
      color: #000000;
    }
    .value {
      font-size: 0.3rem;
      color: #000000;
    }
    .imgUrl {
      .wh(1.12rem);
      background-color: #1f7beb;
      border-radius: 100%;
    }
    .myid {
      color: #606060;
    }
    .right {
      .wh(0.22rem, 0.36rem);
      .bg-contain("right-arrow.png");
    }
  }
}
.confirm {
  position: fixed;
  top: 0;
  .wh(100vw, 100vh);
  background-color: rgba(0,0,0,0.2);
  overflow: hidden;
  .contentList {
    position: absolute;
    bottom: 1.36rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    &:nth-child(1) {
      color: #1f7beb;
    }
    .wh(6.4rem, 0.88rem);
    background-color: #fff;
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.3rem;
    color: #000000;
  }
  .psw {
    color: #989898;
  }
  .cancel {
    position: absolute;
    bottom: 0.24rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>