<template>
  <div class="search">
    <span class="search__icon">&#xe622;</span>
    <!-- <input type="text" class="search__input" placeholder="山姆会员商店优惠商品" /> -->
    <el-input class="search__input" placeholder="山姆会员商店优惠商品" type="text" v-model="searchInputContent"></el-input>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  name: "Search",
  setup() {
    const searchInputContent = ref("");
    return {searchInputContent};
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  &__icon {
    position: absolute;
    left: 36rem;
    top: 7rem;
    font-size: 16rem;
    z-index: 10;
    color: gray;
  }
  &__input {
    justify-content: center;
  }
}
::v-deep .el-input__wrapper {
  background: #f5f5f5;
  border-radius: 16rem;
  border: none;
  width: 339rem;
  height: 32rem;
  padding-left: 44rem;
  outline: none;
  flex-grow: 0;
  outline: none;
}
</style>
