<template>
  <div class="active">
    <input class="input" type="text" placeholder="点击输入激活码">
    <button class="button">激活</button>
  </div>
</template>

<script>
export default { 
  name: 'active'
}
</script>

<style lang="less" scoped>
.active {
  .input {
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4.24rem;
    margin: auto;
    padding-bottom: 0.3rem;
    border: 0;
    outline: none;
    border-bottom: 4px solid #f8f8f8;
    text-align: center;
  }
  .button {
    position: fixed;
    top: 4.48rem;
    left: 50%;
    transform: translateX(-50%);
    .wh(2.11rem, 0.58rem);
  	background-color: #195ed7;
    border-radius: 0.2rem;
    font-size: 0.3rem;
    font-weight: bold;
    color: #ffffff;
    border: 0;
  }
}
</style>