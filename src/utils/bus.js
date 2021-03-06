import Vue from 'vue';
import { isWeixinBrowser, isAndroid, isIos, isWide } from './func';
// import { userInfo } from './jwt';

const bus = new Vue({
    data() {
        return {
            ready: false,
            muted: false,
            showMusicIcon: false,
            isWeixinBrowser: isWeixinBrowser(),
            isAndroid: isAndroid(),
            isIos: isIos(),
            isWide: isWide(),
            userInfo: {
                nickname: '',
                headimgurl: '',
                openid: '',
                unionid: '',
                wxappid: ''
            },
            myItem: 0
        };
    },
    created() {
        // Object.assign(this.userInfo, userInfo);
        // const hiddenProperty =
        //     'hidden' in document
        //         ? 'hidden'
        //         : 'webkitHidden' in document
        //             ? 'webkitHidden'
        //             : 'mozHidden' in document
        //                 ? 'mozHidden'
        //                 : null;
        // if (hiddenProperty) {
        //     // const visibilityChangeEvent = hiddenProperty.replace(
        //     //     /hidden/i,
        //     //     'visibilitychange'
        //     // );
        //     // const onVisibilityChange = e => {
        //     //     if (document[hiddenProperty]) {
        //     //         console.log('hidden');
        //     //         this.$audio.gMute(true);
        //     //     } else if (!this.muted) {
        //     //         console.log('resume');
        //     //         this.$audio.gMute(false);
        //     //         this.$bus.$emit('resume');
        //     //     }
        //     // };
        //     // document.addEventListener(
        //     //     visibilityChangeEvent,
        //     //     onVisibilityChange
        //     // );
        // }
    },
    computed: {},
    methods: {}
});

Vue.$bus = Vue.prototype.$bus = bus;
