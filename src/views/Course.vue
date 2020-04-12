<template>
  <div>
    <Navigatehead v-show="$bus.courseIndex !== 1">
      <div slot="head">{{headList[$bus.courseIndex]}}</div>
      <div class="back icon" @click="goBack" slot="icon">{{back}}</div>
      <div slot="more" @click="toShowMore" v-show="$bus.courseIndex === 2" class="more">...</div>
    </Navigatehead>
    <component @hide-comfirm="hideMore" :showMore="showMore" :is="componentList[$bus.courseIndex]"></component>
  </div>
</template>

<script>
import CourseDetail from '@c/course/CourseDetail'
import CoursePurcase from '@c/course/CoursePurcase'
import OutChoose from '@c/course/OutChoose'
import CourseSign from '@c/course/CourseSign'
export default {
  name: "courseItem",
  components: {CourseDetail, CoursePurcase, OutChoose, CourseSign},
  data() {
    return {
      headList: [
        "课程缴费",
        "",
        "课程名称",
        ""
      ],
      componentList: ['CoursePurcase', 'OutChoose', 'CourseDetail', 'CourseSign'],
      back: "<",
      showMore: false
    };
  },
  methods: {
    toShowMore () {
      this.showMore = true
    },
    hideMore () {
      this.showMore = false
    },
    goBack() {
      this.$router.back()
    }
  }
};
</script>

<style lang="less">
.back {
  font-size: 0.4rem;
}
.more {
  position: absolute;
  right: 0.3rem;
}
</style>