<template>
  <div class="courseList">
      <div class="list">
        <div class="course" v-for="course in courseList" :key="course.id">
            <div class="courseImg" :style="`background: ${course.color};`"></div>
            <div>{{course.name}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'courseList',
    props: { courseList: Array }
}
</script>

<style lang="less" scoped>
.courseList {
    margin-top: 0.22rem;
    background-color: #fff;
    .list {
        .flex(space-between);
        flex-wrap: wrap;
        padding: 0.04rem 0.47rem 0.21rem;
        font-size: 0.24rem;
        color: #606060;
        .course {
            .flex-column(space-between);
            .wh(0.96rem, 0.98rem);
            margin-top: 0.24rem;
            .courseImg {
                .wh(0.74rem, 0.65rem);
            }
            + .course {
                margin-left: 0.9rem;
            }
            &:nth-child(5n) {
                margin-left: 0;
            }
        }
    }
}
</style>