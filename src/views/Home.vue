<template>
    <div class="home">
        <div class="navigate-head">
            <div class="title-wrap">
                <div class="title"
                     @click=chanIndex(index)
                     v-for="(item,index) in 8"
                     :class="{active:activeIndex === index}"
                     :key="index">推荐</div>
            </div>
            <input type="text"
                   class="search"
                   placeholder="你想了解什么知识?">
        </div>
        <swiper class="banner">
            <swiper-slide>课程1</swiper-slide>
            <swiper-slide>课程2</swiper-slide>
            <swiper-slide>课程3</swiper-slide>
        </swiper>
        <Content name="最新课程"
                 option="查看全部" />
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Content from "@c/Content.vue";
import "swiper/dist/css/swiper.css";
export default {
    name: "home",
    components: {
        swiper,
        swiperSlide,
        Content
    },
    data() {
        return {
            activeIndex: 0
        };
    },
    methods: {
        chanIndex(index) {
            this.activeIndex = index;
        }
    }
};
</script>

<style lang="less" scoped>
.home {
    > .navigate-head {
        .wh(100vw, 1.76rem);
        .flex-column(space-between);
        > .title-wrap {
            .wh(6.82rem, 0.41rem);
            .flex(space-between);
            margin-top: 0.28rem;
            > .title {
                font-size: 0.26rem;
                font-weight: normal;
                font-stretch: normal;
                line-height: 0.41rem;
                letter-spacing: 0px;
                color: #000000;
                &.active {
                    font-size: 0.32rem;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #1f7beb;
                    border-bottom: 1px solid #1f7beb;
                }
            }
        }
        > .search {
            .wh(6.87rem, 0.58rem);
            background-color: #f8f8f8;
            border-radius: 0.2rem;
            outline: none;
            padding-left: 0.2rem;
            border: solid 0.03px #e0e0e0;
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
        margin-top: 0.19rem;
        .swiper-slide {
            background-color: #a3c4ec;
        }
    }
}
</style>