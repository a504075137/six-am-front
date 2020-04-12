<template>
  <div class="studyitem">
        <div class="head">
            <div class="head">{{headList[$bus.studyItem]}}</div>
            <div class="back" @click="goBack"></div>
            <div class="more"></div>
        </div>
        <component :is="componentList[$bus.studyItem]"></component>
  </div>
</template>

<script>
import OutMode from '@c/study/outMode'
import InMode from '@c/study/inMode'
import AudioMode from '@c/study/audioMode'
import VideoMode from '@c/study/videoMode'
export default {
    name: 'Study',
    data () {
        return {
            headList: [
                '外教课程',
                '沉浸课程',
                '音频课程',
                '视频课程'
            ],  
            componentList: ['OutMode', 'InMode', 'AudioMode', 'VideoMode']
        }
    },
    components: {OutMode,InMode,AudioMode,VideoMode},
    methods: {
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
.studyitem {
    .page(#091c3f);
    .head {
        .wh(100%, 0.88rem);
        line-height: 0.88rem;
        position: relative;
        text-align: center;
        color: #ffffff;
        font-size: 0.36rem;
        > .back {
            .wh(0.26rem, 0.44rem);
            position: absolute;
            left: 0.32rem;
            top: 0.22rem;
            border: 1px solid #fff;
        }
        > .more {
            .wh(0.4rem, 0.1rem);
            position: absolute;
            right: 0.32rem;
            top: 0.42rem;
            border: 1px solid #fff;
        }
    }    
}

</style>