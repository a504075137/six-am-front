<template>
    <div class="study">
        <Navigatehead>
            <div slot="head">学习</div>
        </Navigatehead>
        <div class="title-bg">
            <div class="circle">
                <span>今日时长</span><span>100</span>
                <div class="userInfo">
                    <div class="content">
                        <span>100</span><span>累计时长</span>
                    </div>
                    <div class="bar"></div>
                    <div class="content"> <span>4</span><span>正在学习</span></div>
                    <div class="bar"></div>
                    <div class="content"> <span>10</span><span>累计课程</span></div>
                </div>

            </div>
        </div>
        <img src="@imgs/plan.png"
             alt=""
             class="plan">
    </div>
</template>

<script>
export default {
    name: "study"
};
</script>

<style lang="less">
.study {
    .page(rgb(248, 248, 248));
    > .title-bg {
        .wh(100vw, 4.22rem);
        background-color: #195ed7;
        > .circle {
            .wh(4.31rem);
            border-radius: 50%;
            background-color: #ffffff;
            .center-row();
            .p-r();
            > span {
                .center-row();
                &:nth-of-type(1) {
                    font-size: 0.3rem;
                    font-weight: bold;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #606060;
                    top: 1.16rem;
                }
                &:nth-of-type(2) {
                    font-size: 1.1rem;
                    font-weight: bold;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #000000;
                    top: 1.79rem;
                }
            }
            > .userInfo {
                .wh(6.7rem, 1rem);
                .center-row();
                bottom: -0.37rem;
                .flex(space-between);
                background-color: #ffffff;
                box-shadow: 0rem 0.02rem 0.1rem 0rem rgba(0, 0, 0, 0.2);
                > .content {
                    .wh(100%);
                    .flex-column(space-around);
                    > span {
                        &:nth-of-type(1) {
                            font-size: 0.48rem;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #000000;
                        }
                        &:nth-of-type(2) {
                            font-size: 0.24rem;
                            font-weight: normal;
                            font-stretch: normal;
                            letter-spacing: 0px;
                            color: #606060;
                        }
                    }
                }
                > .bar {
                    .wh(0.1rem, 0.77rem);
                    background-color: #f8f8f8;
                }
            }
        }
    }
    > .plan {
        width: 100vw;
        margin-top: 0.59rem;
    }
}
</style>