<template>
  <div class="shop-content">
    <div class="shop-content__nav">
      <div
        :class="{ 'shop-content__nav__item': true, 'shop-content__nav__item--active': item.name === currentNavName }"
        v-for="(item, index) of shopNav"
        :key="index"
        :tab-name="item.name"
        @click="checkedNav(item.name)"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="shop-content__list">
      <div class="shop-content__list__item" v-for="item of shopList" :key="item.id">
        <div class="shop-content__list__item__img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="shop-content__list__item__desc">
          <div class="shop-content__list__item__desc__weight">{{ item.weight }}</div>
          <div class="shop-content__list__item__desc__sale-num">月售{{ item.sales }}件</div>
          <div class="shop-content__list__item__desc__price">
            <div class="shop-content__list__item__desc__price__unit-price">
              <div class="shop-content__list__item__desc__price__unit-price__promotion-price">¥{{ item.promotionPrice }}</div>
              <div class="shop-content__list__item__desc__price__unit-price__original-price">¥{{ item.originalPrice }}</div>
            </div>
            <div class="shop-content__list__item__desc__count">
              <button class="shop-content__list__item__desc__count__minus" v-show="cartData[shopId][item.id]['count']">&#xe780;</button>
              <span class="shop-content__list__item__desc__count__number" v-show="cartData[shopId][item.id]['count']">
                {{ cartData[shopId][item.id]["count"] }}
              </span>
              <button class="shop-content__list__item__desc__count__plus">&#xe7e0;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect, toRefs } from "vue";
import { get } from "@/utils/request";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// 定义变量
const shopNav = [
  { name: "all", text: "全部商品" },
  { name: "seckill", text: "秒杀" },
  { name: "fruit", text: "新鲜水果" },
  { name: "snacks", text: "休闲食品" },
  { name: "vegetable", text: "时令蔬菜" },
  { name: "meat", text: "肉蛋家禽" },
];
/* ---------------------------切换shopNav功能 */
const shopNavEffect = () => {
  const currentNavName = ref("all");
  const checkedNav = (itemName) => {
    currentNavName.value = itemName;
  };
  return { currentNavName, checkedNav };
};
/* ---------------------------切换shopList功能 */
const shopListEffect = (currentNavName) => {
  const shopList = ref([]);
  const route = useRoute();
  const shopId = route.params.id;
  const getShopListData = async (shopId, shopNavName) => {
    const result = await get(`/api/shop/${shopId}/${shopNavName}`);
    shopList.value = result.data.data;
  };
  watchEffect(() => {
    getShopListData(shopId, currentNavName.value);
  });
  return { shopList, shopId };
};
/* ---------------------------商品增减个数的功能逻辑 */
const cartEffect = () => {
  const store = useStore();
  const { cartData } = toRefs(store.state);
  return { cartData };
};
export default {
  name: "ShopContent",
  setup() {
    const { cartData } = cartEffect();
    const { currentNavName, checkedNav } = shopNavEffect();
    const { shopList, shopId } = shopListEffect(currentNavName);
    return { shopNav, currentNavName, shopList, checkedNav, cartData, shopId };
  },
};
</script>
<style lang="scss" scoped>
.shop-content {
  display: flex;
  position: absolute;
  top: 146rem;
  bottom: 49rem;
  left: 0;
  right: 0;
  &__nav {
    overflow-y: auto;
    background-color: #f5f5f5;
    text-align: center;
    &__item {
      width: 76rem;
      height: 40rem;
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: #333;
      line-height: 40rem;
      &--active {
        background-color: #fff;
      }
    }
  }
  &__list {
    overflow-y: auto;
    flex-grow: 1;
    background-color: #fff;
    &__item {
      display: flex;
      margin: 0 18rem 12rem 16rem;
      border-bottom: 1rem solid #f1f1f1;
      &__img {
        margin-right: 16rem;
        margin-bottom: 12rem;
        & img {
          width: 68rem;
          height: 68rem;
        }
      }
      &__desc {
        flex-grow: 1;
        &__weight {
          font-family: PingFangSC-Medium;
          font-size: 14rem;
          color: #333333;
          margin-bottom: 8rem;
        }
        &__sale-num {
          font-family: PingFangSC-Regular;
          font-size: 12rem;
          color: #333333;
          line-height: 16rem;
          margin-bottom: 8rem;
        }
        &__price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          &__unit-price {
            display: flex;
            &__promotion-price {
              font-family: PingFangSC-Semibold;
              font-size: 14rem;
              color: #e93b3b;
              line-height: 20rem;
              margin-right: 10rem;
              &::first-letter {
                font-size: 12rem;
              }
            }
            &__original-price {
              font-family: PingFangSC-Regular;
              font-size: 10rem;
              color: #999;
              line-height: 20rem;
              &::first-letter {
                font-size: 12rem;
              }
            }
          }
        }
        &__count {
          display: flex;
          align-items: center;
          &__minus {
            color: #666666;
            font-size: 20rem;
            background: none;
          }
          &__number {
            font-family: PingFangSC-Regular;
            font-size: 14rem;
            color: #333333;
            margin-left: 6rem;
            margin-right: 6rem;
          }
          &__plus {
            font-size: 17rem;
            color: #0091ff;
            background: none;
          }
        }
      }
    }
  }
}
</style>
