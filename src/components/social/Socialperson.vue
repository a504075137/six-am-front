<template>
<div class="persion">
  <SocailUser :userData="userData" />
  <button class="button">写文章 / 写笔记</button>
</div>

</template>

<script>
import SocailUser from './SocailUser'
export default {
  name: 'socialpersion',
  components: {SocailUser},
  props: {userData: Array}
}
</script>

<style lang="less" scoped>
.persion {
  .wh(100vw, auto);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.button {
  position: fixed;
  z-index: 99;
  bottom: 1.05rem;
  .wh(6.84rem, 0.88rem);
  margin: 0 0.34rem;
	background-color: #1f7beb;
	box-shadow: 0px 2px 2px 0px 
		rgba(0, 0, 0, 0.2);
	border-radius: 10px;
  border: solid 1px #1f7beb;
  color: #ffffff;
  font-size: 0.3rem;
}
</style>