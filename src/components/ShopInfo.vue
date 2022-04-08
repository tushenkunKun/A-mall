<template>
  <div class="shop-info">
    <div class="shop-info__img">
      <img :src="dealerInfo.imgUrl" alt="" />
    </div>
    <div :class="{'shop-info__desc':true,'shop-info__desc-border':showBorder}">
      <div class="shop-info__desc__name">{{ dealerInfo.dealer }}</div>
      <div class="shop-info__desc__tags">
        <span class="shop-info__desc__tags__tag" v-for="(tagItem, tagIndex) of dealerInfo.tags" :key="tagIndex">{{ tagItem }}</span>
      </div>
      <div class="shop-info__desc__notice">{{ dealerInfo.notice }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["dealerInfo","showBorder"],
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.shop-info {
  display: flex;
  margin-bottom: 12rem;
  &__img {
    margin-right: 16rem;
    & img {
      width: 56rem;
      height: 56rem;
    }
  }
  &__desc {
    flex-grow: 1;
    color: #333333;
    font-family: PingFangSC-Regular;
    &-border{
      border-bottom: 1rem solid #f1f1f1;
    }
    &__name {
      font-size: 16rem;
      margin-bottom: 8rem;
    }
    &__tags {
      font-size: 13rem;
      margin-bottom: 8rem;
    }
    &__notice {
      font-size: 13rem;
      color: #e93b3b;
      margin-bottom: 12rem;
    }
  }
}
</style>
