<template>
  <div class="course-recommend">
        <div class="navigate-head">
            <input type="text"
                   class="search"
                   placeholder="你想了解什么知识?">
        </div>
        <swiper :options="swiperOption" class="banner">
            <swiper-slide></swiper-slide>
            <swiper-slide>2</swiper-slide>
            <swiper-slide>3</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <CourseList :courseList="courseList" />
        <HomeCourse :title="studyTitle" :courseList="stydyCourseList" />
        <HomeCourse :title="likeTitle" :changeList="changeList" :courseList="likeCourseList" />
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Content from "@c/Content.vue";
import HomeCourse from '@c/home/HomeCourse'
import CourseList from '@c/home/CourseList'
import "swiper/dist/css/swiper.css";
export default {
    name: "Recommend",
    components: {
        swiper,
        swiperSlide,
        Content,
        HomeCourse,
        CourseList
    },
    data () {
        return {
            swiperOption:{
                // 参数选项,显示小点
                pagination:{ el: '.swiper-pagination'}
            },
            courseList: [
                {
                    name: '免费课程',
                    color: '#f39800',
                    id: 1
                },
                {
                    name: '生活英语',
                    color: '#fff45c',
                    id: 2
                },
                {
                    name: '商务英语',
                    color: '#8fc31f',
                    id: 3
                },
                {
                    name: '旅游英语',
                    color: '#8957a1',
                    id: 4
                },
                {
                    name: '热卖课程',
                    color: '#f39800',
                    id: 5
                },
                {
                    name: '音频优课',
                    color: '#fff45c',
                    id: 6
                },
                {
                    name: '视频优课',
                    color: '#8fc31f',
                    id: 7
                },
                {
                    name: '社群优课',
                    color: '#8957a1',
                    id: 8
                }
            ],
            studyTitle: { name: '学习资讯' },
            stydyCourseList: [
                {
                    title: '学习资讯的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    styleTotal: '123456',
                    imgColor: '#1f7beb',
                    id: 1
                }
            ],
            likeTitle: { name: '猜你喜欢', option: '查看全部', clickEvent: () => {}},
            likeCourseList: [
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '零基础',
                    styleTotal: '123456',
                    imgColor: '#8957a1',
                    id: 1
                },
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '初级',
                    styleTotal: '123456',
                    imgColor: '#8fc31f',
                    id: 2
                },
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '中级',
                    styleTotal: '123456',
                    imgColor: '#fff45c',
                    id: 3
                }
            ]
        }
    },
    methods: {
        changeList () {}
    }
}
</script>

<style lang="less" scoped>
.course-recommend {
    background: #f8f8f8;
    > .navigate-head {
        .wh(100vw, 0.58rem);
        .flex-column(space-between);
        margin: 0.15rem auto;
        > .search {
            .wh(6.87rem, 0.58rem);
            background-color: #f8f8f8;
            border-radius: 0.2rem;
            outline: none;
            padding-left: 0.18rem;
            border: solid 0.03rem #e0e0e0;
            &::placeholder {
                font-size: 0.24rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #beac8e;
            }
            &:focus {
                border: none;
            }
        }
    }
    > .banner {
        .wh(100vw, 2.4rem);
        .swiper-slide {
            background-color: #a3c4ec;
        }
    }
    .swiper-container {
        .swiper-pagination-bullets {
            text-align: right;
            right: 0.30rem;
            bottom: 0;
            left: auto;
        }
        /deep/ .swiper-pagination-bullet {
            .wh(0.1rem, 0.1rem);
            border-radius: 100%;
            opacity: 0.5;
            background: #fff;
        }
        /deep/ .swiper-pagination-bullet-active {
            opacity: 1;
            background: #fff;
        }
    }
}
</style>