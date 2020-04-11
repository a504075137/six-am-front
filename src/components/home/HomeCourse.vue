<template>
<div class="homeCourse">
    <div class="tab">
        <div class="title">{{title.name}}</div>
        <div class="search" v-if="title.option" @click="title.clickEvent">{{title.option}} ></div>
    </div>
    <div class="course">
        <div class="singleContent" v-for="item in courseList" :key="item.id">
            <div class="courseImg" :style="`backgroundColor: ${item.imgColor};`"></div>
            <div class="courseContent">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
                <div class="bottom">
                    <div class="level" v-if="item.level">{{item.level}}</div>
                    <div class="total">{{item.styleTotal}}人学习</div>                    
                </div>
            </div>
        </div>
    </div>
    <div v-if="changeList" class="refresh">换一换</div>
</div>
</template>

<script>
export default {
    name: 'homecourse',
    props: ['courseList', 'title', 'changeList']
}
</script>

<style lang="less" scoped>
.homeCourse {
    background: #fff;
    margin-top: 0.22rem;
}
.tab {
    .wh(100vw, 0.80rem);
    .flex(space-between);
    > .title {
      height: 100%;
      font-size: 0.36rem;
      line-height: 0.80rem;
      color: #000000;
      margin-left: 0.32rem;
    }
    > .search {
      font-size: 0.2rem;
      line-height: 0.80rem;
      color: #989898;
      margin-right: 0.32rem;
    }
}
.course {
    .singleContent {
        .wh(100vw, auto);
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
            border-bottom: solid 4px #f8f8f8;
            font-family: SimHei;
            font-size: 0.24rem;
            font-weight: normal;
            font-stretch: normal;
            .title {
                font-size: 0.32rem;
                letter-spacing: 0;
            }
            .content {
                flex: 1;
                margin-top: 0.14rem;
                font-size: 0.24rem;
                line-height: 0.30rem;
                color: #000000;
            }
            .bottom {
                .wh(100%, auto);
                .flex(space-between);
                .level {
                    font-size: 0.20rem;
                    color: #1f7beb;
                }
                .total {
                    font-size: 0.20rem;
                    color: #989898;
                }
            }
        }
        &:nth-last-child(1) {
            .courseContent{
                border-bottom: none;
            }
        }
    }
}
.refresh {
    .wh(100%, 0.72rem);
    .flex();
    font-size: 0.24rem;
    line-height: 0.6rem;
    color: #989898;
}
</style>
