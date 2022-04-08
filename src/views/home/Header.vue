<template>
  <div class="header">
    <div class="header__position">
      <span class="header__position__icon">&#xe600;</span>
      <span class="header__position__text">北京理工大学国防科技园2号楼10层</span>
    </div>
    <div class="header__notice">
      <span class="header__notice__icon">&#xe612;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 16rem 19.2rem;
  &__position {
    font-size: 16rem;
    width: 310rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &__icon {
      font-size: 18rem;
      margin-right: 9.7rem;
    }
    &__text {
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: #333;
    }
  }
  &__notice{
    font-size: 18rem;
  }
}
</style>
