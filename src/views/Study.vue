<template>
    <div class="study">
        <Navigatehead :hasBorder="true">
            <div slot="head">学习</div>
        </Navigatehead>
        <div class="ranking">
            <div class="imgUrl"></div>
            <div class="right">
                <div class="mine">
                    <div class="num">No.28</div>
                    <div class="lookMore">查看全部排行></div>
                </div>
                <div class="sign"></div>
            </div>
        </div>
        <div class="study">
            <div class="time">累计学习<span class="num">100</span>分钟</div>
            <div class="detailList">
                <div class="detail" v-for="detail in detailList" :key="detail.name">
                    <div class="num">{{detail.num}}<span class="unit"> {{detail.unit}}</span></div>
                    <div class="name">{{detail.name}}</div>
                </div>
            </div>
        </div>
        <div class="inStudy">
            <div class="title">在学课程</div>
            <div class="content" v-for="mode in modeList" @click="toStudy(mode.mode)" :key="mode.title">
                <div class="img" :style="`backgroundColor:${mode.img};`"></div>
                <div class="detail">
                    <div class="title">{{mode.title}}</div>
                    <div class="content">{{mode.content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "study",
    data () {
        return {
            detailList: [
                {num: 0, name: '今日学习', unit: '分钟'},
                {num: 4, name: '连续学习', unit: '天'},
                {num: 10, name: '完成课程', unit: '节'}
            ],
            modeList: [
                {img: '#8957a1', title: '外教模式', mode: 0, content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要'},       
                {img: '#8fc31f', title: '沉浸模式', mode: 1, content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要'}
            ]
        }
    },
    methods: {
        toStudy (index) {
            this.$bus.studyItem = index;
            this.$router.push("StudyItem")
        }
    }
}
</script>

<style lang="less" scoped>
.study {
    .ranking {
        .flex(flex-start);
        margin: 0.45rem 0;
        .imgUrl {
            .wh(1.14rem);
            border: solid 0.03rem #f39800;
            margin: 0 0.28rem 0 0.34rem;
            border-radius: 100%;
        }
        .right {
            flex: 1;
            .flex(space-between);
            .mine {
               .num {
                   font-size: 0.36rem;
                   color: #000000;
               }
               .lookMore {
                   margin-top: 0.18rem;
                   font-size: 0.24rem;
                   color: #989898;
               }
            }
            .sign {
                .wh(0.42rem);
                margin-right: 0.34rem;
                border: 1px solid #000;
            }
        }
    }
    .study {
        border: 0.14rem solid rgb(248,248,248);
        border-left: 0;
        border-right: 0;
        .time {
            margin: 0.45rem 0 0.58rem 0.36rem;
            font-size: 0.3rem;
            color: #000000;
            .num {
                color: #1f7beb;
                font-size: 0.6rem;
            }
        }
        .detailList {
            .flex(space-around);
            margin-bottom: 0.4rem;
            .detail {
                .flex-column();
                .wh(2.46rem, 0.78rem);
                + .detail {
                    border-left: 0.04rem solid #f8f8f8;;
                }
                .num {
                    font-size: 0.48rem;
                    color: #000000;
                    .unit {
                        font-size: 0.2rem;
                        color: #989898; 
                    }
                }
                .name {
                    margin-top: 0.06rem;
                    font-size: 0.24rem;
                    color: #000000;
                }
            }
        }
    }
    .inStudy {
        > .title {
            margin: 0.22rem 0 0.4rem 0.3rem;
            color: #000000;
            font-size: 0.36rem;
        }
        > .content {
            .wh(100vw, auto);
            .flex(space-around);
            .img {
                .wh(1.78rem, 2.23rem);
                background-color: #8957a1;
                border-radius: 0.2rem;  
            }
            .detail {
                .flex-column(flex-start, space-between);
                .wh(4.45rem, 2.23rem);
                padding: 0.22rem 0;
                border-bottom: solid 4px #f8f8f8;
                font-size: 0.24rem;
                .title {
                    font-size: 0.32rem;
                }
                .content {
                    flex: 1;
                    margin-top: 0.14rem;
                    font-size: 0.24rem;
                    line-height: 0.30rem;
                    color: #000000;
                }
            }
            &:nth-last-child(1) {
                .detail{
                    border-bottom: none;
                }
            }
        }
    }
}
</style>