<template>
  <div class="banner">
    <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节">
  </div>
</template>
<script>
export default {
  name:'Banner',
  setup(){
    return{}
  }
}
</script>
<style lang='scss' scoped>
.banner{
  margin-top: 12rem;
  text-align: center;
  & img{
    width: 339rem;
    height: 86rem;
  }
}
</style>