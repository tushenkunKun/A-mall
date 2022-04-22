<template>
  <!-- 购物车蒙层 -->
  <div class="mask" v-if="cartShow && JSON.stringify(cartList) !== '{}'" @click="cartShowChange(cartList)"></div>
  <!-- 购物车主体内容 -->
  <div class="cart">
    <div class="cart__detail" v-if="cartShow && JSON.stringify(cartList) !== '{}'">
      <div class="cart__detail-header">
        <div class="cart__detail-header__select">
          <span class="cart__detail-header__select__icon-checked" v-if="allChecked" @click="setAllChecked(shopId)">&#xe6f7;</span>
          <span class="cart__detail-header__select__icon-unchecked" v-else @click="setAllChecked(shopId)">&#xe619;</span>
          <span class="cart__detail-header__select__text">全选</span>
        </div>
        <div class="cart__detail-header__clear" @click="clearCart(shopId)">清空购物车</div>
      </div>
      <div class="cart__detail__item" v-for="item of cartList" :key="item.id">
        <!--绑定事件的两种写法 -->
        <span class="cart__detail__item__select__icon-checked" v-if="item.checked" @click="changeItemChecked(shopId, item.id)">&#xe6f7;</span>
        <span
          class="cart__detail__item__select__icon-unchecked"
          v-else
          @click="
            () => {
              changeItemChecked(shopId, item.id);
            }
          "
        >
          &#xe619;
        </span>
        <div class="cart__detail__item__img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="cart__detail__item__desc">
          <div class="cart__detail__item__desc__weight">{{ item.weight }}</div>
          <div class="cart__detail__item__desc__price">
            <div class="cart__detail__item__desc__price__unit-price">
              <div class="cart__detail__item__desc__price__unit-price__promotion-price">¥{{ item.promotionPrice }}</div>
              <div class="cart__detail__item__desc__price__unit-price__original-price">¥{{ item.originalPrice }}</div>
            </div>
            <div class="cart__detail__item__desc__count">
              <button
                class="cart__detail__item__desc__count__minus"
                v-show="cartData?.[shopId]?.itemList?.[item.id]?.['count']"
                @click="
                  () => {
                    changeItem2cart(shopId, shopName, item.id, item, -1);
                  }
                "
              >
                &#xe780;
              </button>
              <span class="cart__detail__item__desc__count__number" v-show="cartData?.[shopId]?.itemList?.[item.id]?.['count']">
                {{ cartData?.[shopId]?.itemList?.[item.id]?.["count"] }}
              </span>
              <button
                class="cart__detail__item__desc__count__plus"
                @click="
                  () => {
                    changeItem2cart(shopId, shopName, item.id, item, 1);
                  }
                "
              >
                &#xe7e0;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart__info">
      <div class="cart__info__icon" @click="cartShowChange(cartList)">
        <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261637089.png" alt="" />
        <span class="cart__info__icon__number">{{ totalNumber }}</span>
      </div>
      <div class="cart__info__count">
        总计：
        <span class="cart__info__count__total-price">¥ {{ totalPrice }}</span>
      </div>
    </div>
    <router-link :to="{ path: `/order-confirmation/${shopId}` }">
      <div class="cart__payment">去结算</div>
    </router-link>
  </div>
</template>
<script>
import { computed, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { shop2cartEffect } from "../../../components/commonCartEffect.js";
const cartShowEffect = () => {
  let cartShow = ref(false);
  const cartShowChange = (cartList) => {
    cartShow.value = !cartShow.value;
  };
  return { cartShow, cartShowChange };
};
const cartEffect = (cartShow) => {
  /**
   * shopId--》店铺id
   * cartData--》vuex中的购物车数据
   * cartListItems--》vuex中店铺id下的商品
   */
  const route = useRoute();
  const store = useStore();
  // 获取店铺的id
  const shopId = route.params.id;
  // 获取购物车的数据
  const cartData = store.state.cartData;
  // 定义计算属性totalNumber,  计算总量
  const totalNumber = computed(() => {
    // 获取此店铺id下的所有商品
    const itemList = cartData[shopId]?.itemList || {};
    // 计算总量
    let count = 0;
    if (itemList) {
      for (const key in itemList) {
        count += itemList[key].count;
      }
    }
    return count;
  });
  // 定义计算属性totalPrice,  计算总价
  const totalPrice = computed(() => {
    // 获取此店铺id下的所有商品
    const itemList = cartData[shopId]?.itemList || {};
    // 计算总价
    let sum = 0;
    /* 如果有数量记录，就计算，没有就直接返回 */
    if (itemList) {
      for (const key in itemList) {
        if (itemList[key].checked) {
          sum += itemList[key].count * itemList[key].promotionPrice;
        }
      }
    }
    return sum.toFixed(2);
  });
  // 定义计算属性cartList,  购物车列表
  const cartList = computed(() => {
    const cartListItems = cartData[shopId]?.itemList || {};
    if (JSON.stringify(cartListItems) === "{}") {
      cartShow.value = false;
    }
    return cartListItems;
  });
  // 定义计算属性allChecked, 购物车全选
  const allChecked = computed(() => {
    // 获取此店铺id下的所有商品
    const itemList = cartData[shopId]?.itemList || {};
    // 定义一个状态result=true, 表示默认为选中
    let result = true;
    if (itemList) {
      for (const key in itemList) {
        const element = itemList[key];
        if (!element.checked) {
          result = false;
        }
      }
    }
    return result;
  });
  return { totalNumber, totalPrice, cartList, allChecked, shopId };
};
export default {
  name: "Cart",
  props: ["shopName"],
  setup() {
    const { cartData, changeItem2cart, changeItemChecked, clearCart, setAllChecked } = shop2cartEffect();
    const { cartShow, cartShowChange } = cartShowEffect();
    const { totalNumber, totalPrice, cartList, allChecked, shopId } = cartEffect(cartShow);
    return { totalNumber, totalPrice, cartList, allChecked, shopId, cartData, cartShow, changeItem2cart, changeItemChecked, clearCart, setAllChecked, cartShowChange };
  },
};
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 49rem;
}
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
  &__detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 52rem;
    padding: 0 18rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 12rem;
    &__select {
      display: flex;
      align-items: center;
      &__icon-checked {
        font-size: 19rem;
        margin-right: 9rem;
        color: #0091ff;
      }
      &__icon-unchecked {
        font-size: 19rem;
        margin-right: 9rem;
      }
      &__text {
        font-family: PingFangSC-Regular;
        font-size: 14rem;
        color: #333333;
        line-height: 16rem;
      }
    }
    &__clear {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: #333333;
      text-align: right;
      line-height: 16rem;
    }
  }
  &__detail {
    // overflow-y: auto;
    // flex-grow: 1;
    background-color: #fff;
    position: fixed;
    bottom: 49rem;
    width: 375rem;
    left: 0;
    &__item {
      display: flex;
      align-items: center;
      margin: 0 18rem 12rem 16rem;
      border-bottom: 1rem solid #f1f1f1;
      &__select {
        &__icon-checked {
          font-size: 19rem;
          margin-right: 9rem;
          color: #0091ff;
        }
        &__icon-unchecked {
          font-size: 19rem;
          margin-right: 9rem;
        }
      }
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
