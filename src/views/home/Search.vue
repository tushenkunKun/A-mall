<template>
  <div class="search">
    <span class="search__icon">&#xe622;</span>
    <input type="text" class="search__input" placeholder="山姆会员商店优惠商品" />
  </div>
</template>
<script>
export default {
  name: "Search",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.search {
  text-align: center;
  position: relative;
  color: #b7b7b7;
  &__icon {
    position: absolute;
    left: 36rem;
    top: 7rem;
    font-size: 16rem;
  }
  &__input {
    background: #f5f5f5;
    border-radius: 16rem;
    border: none;
    width: 339rem;
    height: 32rem;
    padding-left: 44rem;
    outline: none;
    &::-webkit-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &:-moz-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &::-moz-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
    &:-ms-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      line-height: 16rem;
    }
  }
}
</style>
