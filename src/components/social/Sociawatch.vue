<template>
  <div class="watch">
    <SocailList :name="`我的社群`" :option="`查看全部`" :newSocial="true"/>
    <SocailUser :userData="userData" />
  </div>
</template>

<script>
import SocailUser from './SocailUser'
import SocailList from './SocailList'
export default {
  name: 'socialwatch',
  components: {SocailUser,SocailList},
  props: {userData: Array}
}
</script>

<style lang="less" scoped>
.watch {
  .wh(100vw, auto);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>