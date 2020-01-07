<template>
    <div class="social">
        <header class="header">
            <div class="title">优课圈</div>
            <div class="search">
            </div>
            <div class="tab"
                 @click="switchTab($event)">
                <div class="tab-item"
                     :class="activeTab === 1 && 'active'"
                     data-v="1">关注
                </div>
                <div class="tab-item"
                     :class="activeTab == 2 && 'active'"
                     data-v="2">推荐</div>
                <div class="tab-item"
                     :class="activeTab == 3 && 'active'"
                     data-v="3">个人</div>
            </div>
        </header>
        <section class="section">

            <Socialwatch v-show="activeTab === 1" />
            <Socialrecom v-show="activeTab === 2" />
            <Socialperson v-show="activeTab === 3" />
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Socialperson from "@c/Socialperson";
import Socialrecom from "@c/Socialrecom";
import Socialwatch from "@c/Sociawatch";
export default {
    name: "social",
    components: {
        Socialperson,
        Socialrecom,
        Socialwatch
    },
    data() {
        return {
            activeTab: 1,
            activeFoot: 0
        };
    },
    methods: {
        switchTab(e) {
            const v = e.target.dataset.v;
            if (v) {
                this.activeTab = parseInt(v);
            }
        }
    }
};
</script>
<style lang="less" scoped>
.social {
    .wh(100%, 100%);
    > .header {
        .wh(100vw, 1.76rem);
        background-color: #ffffff;
        box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(0, 0, 0, 0.2);
        > .title {
            .center-row();
            margin-top: 0.28rem;
            font-size: 0.36rem;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #000000;
        }
        > .search {
            .bg-contain("search.png");
            .p-a();
            top: 0.28rem;
            right: 0.28rem;
            .wh(0.39rem);
        }
        > .tab {
            .wh(100vw, 0.6rem);
            .p-a();
            top: 1.2rem;
            .flex(space-around, flex-start);
            > .tab-item {
                width: 1.5rem;
                text-align: center;
                height: 0.5rem;
                font-size: 0.3rem;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #989898;
                &.active {
                    color: #000000;
                    border-bottom: 0.02rem solid #1f7beb;
                }
            }
        }
    }
    > .section {
        .wh(100%);
    }
}
</style>
