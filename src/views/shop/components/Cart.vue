<template>
  <div class="cart">
    <div class="cart__info">
      <div class="cart__info__icon">
        <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261637089.png" alt="" />
        <span class="cart__info__icon__number">{{ totalNumber }}</span>
      </div>
      <div class="cart__info__count">
        总计：
        <span class="cart__info__count__total-price">¥ {{ totalPrice }}</span>
      </div>
    </div>
    <div class="cart__payment">去结算</div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Cart",
  setup() {
    const route = useRoute();
    const store = useStore();
    // 获取店铺的id
    const shopId = route.params.id;
    // 获取购物车的数据
    const cartData = store.state.cartData;
    // 定义计算属性totalNumber,  计算总量
    const totalNumber = computed(() => {
      // 获取此店铺id下的所有商品
      const itemList = cartData[shopId];
      // 计算总量
      let count = 0;
      if (itemList) {
        for (const key in itemList) {
          count += itemList[key].count;
        }
      }
      return count;
    });
    // 定义计算属性totalNumber,  计算总价
    const totalPrice = computed(() => {
      // 获取此店铺id下的所有商品
      const itemList = cartData[shopId];
      // 计算总价
      let sum = 0;
      /* 如果有数量记录，就计算，没有就直接返回 */
      if (itemList) {
        for (const key in itemList) {
          sum += itemList[key].count * itemList[key].promotionPrice;
        }
      }
      return sum.toFixed(2);
    });
    return { totalNumber, totalPrice };
  },
};
</script>
<style lang="scss" scoped>
.cart {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49rem;
  box-shadow: 0 -1rem 1rem 0 #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__info {
    display: flex;
    align-items: center;
    &__icon {
      position: relative;
      margin: 0 32rem 0 24rem;
      & img {
        width: 28rem;
        height: 26rem;
      }
      &__number {
        display: block;
        min-width: 20rem;
        height: 20rem;
        background-color: #e93b3b;
        border-radius: 10rem;
        font-family: PingFangSC-Medium;
        font-size: 16rem;
        transform: scale(0.5, 0.5);
        transform-origin: left top;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 24rem;
        top: -4rem;
      }
    }
    &__count {
      font-family: PingFangSC-Regular;
      font-size: 12rem;
      color: #333333;
      &__total-price {
        font-family: PingFangSC-Medium;
        font-size: 18rem;
        color: #e93b3b;
      }
    }
  }
  &__payment {
    width: 98rem;
    height: 49rem;
    background-color: #4fb0f9;
    font-family: PingFangSC-Medium;
    font-size: 14rem;
    color: #ffffff;
    text-align: center;
    line-height: 49rem;
  }
}
</style>
