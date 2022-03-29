<template>
  <div class="docker">
    <div class="docker__item docker__item_active">
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
  width: 375rem;
  height: 49rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
	box-shadow: 0 -1rem 1rem 0 #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10rem;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__icon{
      font-size: 20rem;
    }
    &__text {
      font-family: PingFangSC-Regular;
      font-size: 25rem;
      text-align: center;
      margin-top: 2rem;
      transform: scale(.5,.5);
      transform-origin: center top;
    }
    &_active{
      color: #1fa4fc;
    }
  }
}
</style>
