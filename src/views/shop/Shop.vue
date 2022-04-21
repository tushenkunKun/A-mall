<template>
  <div class="shop">
    <div class="shop__header">
      <div class="shop__header__back">
        <span class="shop__header__back__icon" @click="back">&#xe624;</span>
      </div>
      <div class="shop__header__search">
        <span class="shop__header__search__icon">&#xe622;</span>
        <input type="text" class="shop__header__search__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo :dealerInfo="item" :showBorder="false" v-if="item.imgUrl"/>
    <ShopContent :shopName="item.dealer" />
    <Cart :shopName="item.dealer" />
  </div>
</template>
<script>
import ShopInfo from "@/components/ShopInfo.vue";
import ShopContent from "@/views/shop/components/Content.vue";
import Cart from "@/views/shop/components/Cart.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { get } from "@/utils/request";
/* -------------------------通过接口获取点击的商铺的具体信息 */
const dealerInfoEffect = () => {
  const item = ref({});
  const route = useRoute();
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    item.value = result.data.data;
  };
  return { item, getItemData };
};
/* -------------------------返回跳转之前的页面功能 */
const back2prevPage = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return { back };
};
export default {
  name: "Shop",
  components: { ShopInfo,ShopContent,Cart },
  setup() {
    const { item, getItemData } = dealerInfoEffect();
    const {back} = back2prevPage();
    getItemData();
    return { item, back };
  },
};
</script>
<style lang="scss" scoped>
.shop {
  padding: 0 18rem;
  &__header {
    width: 100%;
    height: 32rem;
    margin: 16rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__back {
      &__icon {
        color: #b6b6b6;
        font-size: 20rem;
      }
    }
    &__search {
      position: relative;
      &__icon {
        color: #b7b7b7;
        font-size: 18rem;
        position: absolute;
        top: 6rem;
        left: 16rem;
      }
      &__input {
        width: 310rem;
        height: 32rem;
        background: #f5f5f5;
        border-radius: 16rem;
        padding: 0 44rem;
        font-family: PingFangSC-Regular;
        font-size: 14rem;
        color: #333333;
        line-height: 16rem;
      }
    }
  }
}
</style>
