<template>
<div class="detail">
    <div class="singleContent">
        <div class="courseImg"></div>
        <div class="courseContent">
            <div class="content">内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要</div>
            <div class="bottom">
                <div class="level">零基础<span> 123456人学习</span></div>             
            </div>
        </div>
    </div>
    <div class="progress">
        <div class="head">课程进展 <span class="num">2</span>/10</div>
        <div class="content" v-for="item in testList" :key="item.title0">
            <div class="detail">
                <div class="title">{{item.title}}</div>
                <div class="subs">{{item.subs}}</div>
            </div>
            <div class="score" v-if="item.score"><span class="num">{{item.score}}</span>分</div>
            <div class="right" v-else></div>
        </div>
    </div>
    <div class="buttom">
      <button class="button">开始学习</button>
    </div>
    <div v-show="showMore" class="confirm" @click="hideConfirm">
    <div class="contentList">
      <div v-for="item in confirmCont" class="content" :class="item.type" :key="item.title" @click.stop="item.methods">
        {{item.title}}
      </div>      
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'courseDetail',
    props: {showMore: Boolean},
    data () {
        return {
            testList: [
                {
                    title: '第一章中文标题',
                    subs: '第一张英文标题',
                    score: 90
                },
                {
                    title: '第二章中文标题',
                    subs: '第二张英文标题',
                    score: 95
                },
                {
                    title: '第三章中文标题',
                    subs: '第三张英文标题',
                    score: 0
                },
                {
                    title: '第四章中文标题',
                    subs: '第四张英文标题',
                    score: 0
                },
                {
                    title: '第五章中文标题',
                    subs: '第五张英文标题',
                    score: 0
                }
            ],
            confirmCont: [
                { title: '下载全部关卡', methods: () => {} },
                { title: '取消', methods: () => {this.hideConfirm()} }
            ]
        }
    },
    methods: {
        hideConfirm () {
            this.$emit('hide-comfirm')
        }
    }
}
</script>

<style lang="less" scoped>
.singleContent {
    .wh(100vw, 3.2rem);
    background-color: #989898;
    .flex(space-around);
    .courseImg {
        .wh(1.78rem, 2.23rem);
        background-color: #8957a1;
        border-radius: 0.2rem;  
    }
    .courseContent {
        .flex-column(flex-start, space-between);
        .wh(4.45rem, 2.23rem);
        padding: 0.22rem 0;
        font-size: 0.24rem;
        .content {
            flex: 1;
            margin-top: 0.14rem;
            font-size: 0.24rem;
            line-height: 0.30rem;
            color: #000000;
        }
        .bottom {
            .level {
                font-size: 0.20rem;
                color: #fff;
            }
            .total {
                font-size: 0.20rem;
                color: #fff;
            }
        }
    }
}
.progress {
    .head {
        margin: 0.34rem 0 0.3rem 0.3rem;
        font-size: 0.24rem;
        color: #989898;
        .num {
            font-size: 0.36rem;
            font-weight: bold;
        }
    }
    .content {
        .wh(6.4rem, 1.2rem);
        margin: 0 auto 0.2rem;
        background-color: #ffffff;
        box-shadow: 0px 0.02rem 0.1rem 0px rgba(0, 0, 0, 0.2);
        .flex(space-between);
        border-radius: 0.15rem;
        .detail {
            margin-left: 0.34rem;
        }
        .title {
            font-size: 0.32rem;
            color: #000000;
        }
        .subs {
            margin-top: 0.16rem;
            font-size: 0.2rem;
            color: #989898;
        }
        .score {
            margin-right: 0.22rem;
            font-size: 0.2rem;
            color: #1f7beb;
            .num {
                font-weight: bold;
                font-size: 0.48rem;
            }
        }
        .right {
            .wh(0.22rem, 0.37rem);
            margin-right: 0.22rem;
            border: 1px solid #000;
        }
    }
}
.confirm {
  position: fixed;
  top: 0;
  .wh(100vw, 100vh);
  background-color: rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 100;
  .contentList {
    position: absolute;
    bottom: 1.36rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .content {
    .wh(6.4rem, 0.88rem);
    background-color: #fff;
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.3rem;
    color: #000000;
  }
}
.buttom {
    position: absolute;
    bottom: 0;
    z-index: 9;
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