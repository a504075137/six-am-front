<template>
  <div>
    <Navigatehead :hasBorder="$bus.myItem !== 1">
      <div slot="head">{{headList[$bus.myItem]}}</div>
      <div class="back icon" @click="goBack" slot="icon">{{back}}</div>
    </Navigatehead>
    <component :is="componentList[$bus.myItem]"></component>
  </div>
</template>

<script>
import Setting from '@c/Mine/Setting'
import Sign from '@c/Mine/Sign'
import Course from '@c/Mine/Course'
import Active from '@c/Mine/Active'
import Purcase from '@c/Mine/Purcase'
import About from '@c/Mine/About'
import Vip from '@c/Mine/Vip'
export default {
  name: "mineItem",
  components: {Setting, Sign, Course, Active, Purcase, About, Vip},
  data() {
    return {
      headList: [
        "设置",
        "",
        "已购课程",
        "激活码激活",
        "账户充值",
        "关于我们",
        "开通VIP"
      ],
      componentList: ['Setting', 'Sign', 'Course', 'Active', 'Purcase', 'About', 'Vip'],
      back: "<"
    };
  },
  methods: {
    goBack() {
      this.$router.replace("Mine");
    }
  }
};
</script>

<style lang="less">
.back {
  font-size: 0.4rem;
}
</style>