<template>
    <div class="home">
        <div class="navigate-head">
            <input type="text"
                   class="search"
                   placeholder="你想了解什么知识?">
        </div>
        <swiper class="banner">
            <swiper-slide><div class="banner-course">课程1</div></swiper-slide>
            <swiper-slide><div class="banner-course">课程2</div></swiper-slide>
            <swiper-slide><div class="banner-course">课程3</div></swiper-slide>
        </swiper>
        <Content name="最新课程"
                 option="查看全部" />
        <HomeCourse :title="title" :changeList="changeList" :courseList="courseList" />
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Content from "@c/Content.vue";
import HomeCourse from '@c/home/HomeCourse'
import "swiper/dist/css/swiper.css";
export default {
    name: "home",
    components: {
        swiper,
        swiperSlide,
        Content,
        HomeCourse
    },
    data () {
        return {
            activeIndex: 0,
            title: { name: '主编推荐', option: '查看全部', clickEvent: this.clickMore},
            courseList: [
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '零基础',
                    styleTotal: '123456',
                    imgColor: '#8957a1',
                    id: 1
                },
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '初级',
                    styleTotal: '123456',
                    imgColor: '#8fc31f',
                    id: 2
                },
                {
                    title: '推荐课程的标题',
                    content: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
                    level: '中级',
                    styleTotal: '123456',
                    imgColor: '#fff45c',
                    id: 3
                }
            ]
        }
    },
    methods: {
        chanIndex(index) {
            this.activeIndex = index;
        },
        clickMore () {
            this.$router.push('/home/recommend')
        },
        changeList() {}
    }
};
</script>

<style lang="less" scoped>
.home {
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
        .banner-course {
            position: absolute;
            left: 0.32rem;
            bottom: 0.16rem;
            .wh(0.9rem, 0.33rem);
            .flex();
            background-color: #1f7beb;
            border-radius: 0.1rem;
            font-size: 0.24rem;
            line-height: 0.60rem;
            color: #fff;
        }
    }
}
</style>