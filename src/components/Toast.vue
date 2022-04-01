<template>
  <div class="toast">{{message}}</div>
</template>
<script>
export default {
  name:'Toast',
  props:["message"],
  setup(){
    return{}
  }
}
</script>
<style lang='scss' scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background:rgba(0,0,0,.35);
    padding: 10rem;
    border-radius: 5rem;
    color: #fff;
  }
</style>