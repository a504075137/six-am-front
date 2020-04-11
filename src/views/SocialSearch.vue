<template>
<div class="socialsearch">
    <header class="header">
        <div class="back" @click="back"></div>
        <input class="input" v-model="searchContent" placeholder="你想了解什么知识？">
        <div class="search" @click="toSearch"></div>
    </header>
    <div v-if="!isSearch">
        <div class="searchContent" v-for="type in searchList" :key="type.id">
            <div class="title">{{type.title}}</div>
            <div class="contentList">
                <div class="content" v-for="(content, index) in type.contentList" :key="index">{{content}}</div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="searchList" v-if="searchCourse.length">
            <div class="course" v-for="course in searchCourse" :key="course.id">
                <div class="img" :style="`backgroundColor: ${course.img};`"></div>
                <div class="content">
                    <div class="title">{{course.title}}</div>
                    <div class="level">课程难度：{{course.level}}</div>
                </div>
            </div>
        </div>
        <div v-else>搜索内容为空</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'socialsearch',
    data() {
        return {
            searchContent: '',
            isSearch: false,
            searchList: [
                { title: '最近搜索', id: '1', contentList: ['搜索内容','搜索内容','搜索内容','搜索内容'] },
                { title: '热门搜索', id: '2', contentList: ['搜索内容','搜索内容','搜索内容'] }
            ],
            searchCourse: [
                {
                    img: '#1f7beb',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#f39800',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#f19ec2',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#fff45c',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#8957a1',
                    title: '课程的标题',
                    level: '零基础'
                }
            ]
        }
    },
    methods: {
        toSearch () {
            if (this.searchContent) this.isSearch = true
        },
        back () {
            this.isSearch = false
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
.socialsearch {
    .wh(100%, 100%);
    > .header {
        .flex(space-between);
        .wh(auto, 0.88rem);
        padding: 0 0.34rem;
        background-color: #ffffff;
        box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(0, 0, 0, 0.2);
        > .back {
            .wh(0.26rem, 0.44rem);
            .bg-contain("right-arrow.png");
        }
        > .search {
            .bg-contain("search.png");
            .wh(0.39rem);
        }
        > .input {
            .wh(5.56rem, 0.5rem);
            outline: none;
            border: 0;
            border-bottom: solid 0.01rem #1f7beb;
            &::placeholder {
                font-size: 0.3rem;
                color: #989898;
            }
        }
    }
    
    .searchContent {
        margin-top: 0.28rem;
        margin-left: 0.34rem;
        .title {
            font-size: 0.2rem;
            color: #989898;
        }
        .contentList {
            display: flex;
            flex-wrap: wrap;
            .content {
                margin: 0.28rem 2.4rem 0 0;
                font-size: 0.26rem;
                color: #000000;
            }
        }
    }

    .searchList {
        .course {
            .flex();
            .wh(6.82rem, 2.24rem);
            margin: 0.3rem auto;
            background-color: #ffffff;
            box-shadow: 0px 0.02rem 0.12rem 0px rgba(0, 0, 0, 0.2);
            border-radius: 0.2rem;
            .img {
                .wh(1.78rem,2.24rem);
	            border-radius: 0.2rem 0px 0px 0.2rem;
            }
            .content {
                flex: 1;
                height: 100%;
                margin-left: 38px;
                .title {
                    margin: 0.24rem 0 0.12rem 0;
                    font-size: 0.32rem;
                    color: #000;
                }
                .level {
                    font-size: 0.24rem;
                    color: #989898;
                }
            }
        }
    }
}
</style>