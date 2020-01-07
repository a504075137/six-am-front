<template>
    <div class="mine">
        <Navigatehead>
            <div slot="head">我的</div>
            <div class="notice icon"
                 slot="icon"></div>
        </Navigatehead>
        <div class="avatul-info">
            <div class="avatul"></div>
            <div class="nickName">用户名/昵称</div>
            <div class="userid">ID：12345678</div>
        </div>
        <div class="inputTabWrapper">
            <InputTab class="inputTab"
                      v-for="(item,index) in inputList"
                      :key="index">
                <div class="icon"
                     :style="{backgroundColor:item.icon}"
                     slot="icon"></div>
                <div class="name"
                     slot="name">{{item.name}}</div>
            </InputTab>
        </div>
    </div>
</template>

<script>
import InputTab from "@c/InputTab.vue";
export default {
    name: "mine",
    components: {
        InputTab
    },
    data() {
        return {
            inputList: [
                {
                    name: "设置",
                    icon: "#1f7beb"
                },
                {
                    name: "签到",
                    icon: "#f39800"
                },
                {
                    name: "会员中心",
                    icon: "#8957a1"
                },
                {
                    name: "账户充值",
                    icon: "#fff45c"
                },
                {
                    name: "关于我们",
                    icon: "#f19ec2"
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.mine {
    .page(rgb(248, 248, 248));
    .notice {
        .wh(0.38rem, 0.47rem);
        .bg-contain("notice.png");
    }
    > .avatul-info {
        .flex-column(space-around, center);
        .wh(100vw, 3.33rem);
        margin-top: 0.5rem;
        > .avatul {
            .wh(1.77rem);
            border-radius: 50%;
            background-color: #f39800;
        }
        > .nickName {
            font-size: 0.36rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.6rem;
            letter-spacing: 0px;
            color: #000000;
            margin-top: 0.4rem;
        }
        > .userid {
            font-size: 0.3rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.6rem;
            letter-spacing: 0px;
            color: #989898;
        }
    }
    > .inputTabWrapper {
        > .inputTab {
            margin-top: 0.2rem;
        }
    }
}
</style>