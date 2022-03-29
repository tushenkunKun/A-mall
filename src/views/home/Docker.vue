<template>
  <div class="docker">
    <div class="docker__item">
      <span class="doker__item__icon">&#xe608;</span>
      <span class="docker__item__text">首页</span>
    </div>
    <div class="docker__item">
      <span class="doker__item__icon">&#xe60d;</span>
      <span class="docker__item__text">购物车</span>
    </div>
    <div class="docker__item">
      <span class="doker__item__icon">&#xe601;</span>
      <span class="docker__item__text">订单</span>
    </div>
    <div class="docker__item">
      <span class="doker__item__icon">&#xe646;</span>
      <span class="docker__item__text">我的</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Docker",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.docker {
  width: 375px;
  height: 49px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__icon {
      // font-size: 20px;
    }
    &__text {
      font-family: PingFangSC-Regular;
      font-size: 10px;
      text-align: center;
      margin-top: 2px;
    }
  }
}
</style>
