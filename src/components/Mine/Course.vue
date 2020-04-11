<template>
  <div>
      <CourseList :searchCourse="searchCourse"/>
  </div>
</template>

<script>
import CourseList from '../CourseList'
export default {
    name: 'minecourse',
    components: {CourseList},
    data () {
        return {
            searchCourse: [
                {
                    img: '#1f7beb',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#f39800',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#f19ec2',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#fff45c',
                    title: '课程的标题',
                    level: '零基础'
                },
                {
                    img: '#8957a1',
                    title: '课程的标题',
                    level: '零基础'
                }
            ]
        }
    }
}
</script>

<style>

</style>