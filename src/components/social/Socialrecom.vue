<template>
  <div class="recommend">
    <SocailList :name="`热门社群`" :option="`更多`" :join="true"/>
    <SocailUser :userData="userData" />
  </div>
</template>

<script>
import SocailUser from './SocailUser'
import SocailList from './SocailList'
export default {
  name: 'socialrecom',
  components: {SocailUser,SocailList},
  props: {userData: Array}
}
</script>

<style lang="less" scoped>
.recommend {
  .wh(100vw, auto);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>