<template>
    <div class="searchList" v-if="searchCourse.length">
        <div class="course" v-for="course in searchCourse" :key="course.id">
            <div class="img" :style="`backgroundColor: ${course.img};`"></div>
            <div class="content">
                <div class="title">{{course.title}}</div>
                <div class="level">课程难度：{{course.level}}</div>
            </div>
        </div>
    </div>
    <div v-else>为空</div>
</template>

<script>
export default {
    name: 'courseList',
    props: {searchCourse: Array}
}
</script>

<style lang="less" scoped>
.searchList {
    .course {
        .flex();
        .wh(6.82rem, 2.24rem);
        margin: 0.3rem auto;
        background-color: #ffffff;
        box-shadow: 0px 0.02rem 0.12rem 0px rgba(0, 0, 0, 0.2);
        border-radius: 0.2rem;
        .img {
            .wh(1.78rem,2.24rem);
            border-radius: 0.2rem 0px 0px 0.2rem;
        }
        .content {
            flex: 1;
            height: 100%;
            margin-left: 38px;
            .title {
                margin: 0.24rem 0 0.12rem 0;
                font-size: 0.32rem;
                color: #000;
            }
            .level {
                font-size: 0.24rem;
                color: #989898;
            }
        }
    }
}
</style>