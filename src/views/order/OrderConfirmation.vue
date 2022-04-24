<template>
  <div class="order">
    <div class="order__header">
      <span class="order__header__back-icon" @click="back">&#xe624;</span>
      <span class="order__header__title">确认订单</span>
    </div>
    <div class="order__receiver">
      <div class="order__receiver__info">
        <div class="order__receiver__info__title">收货地址</div>
        <div class="order__receiver__info__address">北京理工大学国防科技园2号楼10层</div>
        <div class="order__receiver__info__userinfo">
          <span class="order__receiver__info__userinfo__username">阿坤（先生）</span>
          <span class="order__receiver__info__userinfo__userphone">18622575578</span>
        </div>
      </div>
      <div class="order__receiver__icon">&#xe665;</div>
    </div>
    <div class="order__detail">
      <div class="order__detail__shop-name">{{ shopName }}</div>
      <div class="order__detail__cart-list">
        <div class="order__detail__cart-list__item" v-for="item of Object.keys(cartList).slice(0, 2)" :key="item.id">
          <div class="order__detail__cart-list__item__image">
            <img :src="cartList[item].imgUrl" alt="" />
          </div>
          <div class="order__detail__cart-list__item__info">
            <div class="order__detail__cart-list__item__info__weight">{{ cartList[item].weight }}</div>
            <div class="order__detail__cart-list__item__info__price">
              <span class="order__detail__cart-list__item__info__price__unitprice">¥{{ cartList[item].promotionPrice }} x {{ cartList[item].count }}</span>
              <span class="order__detail__cart-list__item__info__price__totalprice">¥{{ (cartList[item].promotionPrice * cartList[item].count).toFixed(2) }}</span>
            </div>
          </div>
        </div>
        <template v-if="!showMore">
          <div class="order__detail__cart-list__item" v-for="item of Object.keys(cartList).slice(2)" :key="item.id">
            <div class="order__detail__cart-list__item__image">
              <img :src="cartList[item].imgUrl" alt="" />
            </div>
            <div class="order__detail__cart-list__item__info">
              <div class="order__detail__cart-list__item__info__weight">{{ cartList[item].weight }}</div>
              <div class="order__detail__cart-list__item__info__price">
                <span class="order__detail__cart-list__item__info__price__unitprice">¥{{ cartList[item].promotionPrice }} x {{ cartList[item].count }}</span>
                <span class="order__detail__cart-list__item__info__price__totalprice">¥{{ (cartList[item].promotionPrice * cartList[item].count).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </template>
        <div class="order__detail__cart-list__more" @click="showMoreClick" v-if="showMore && Object.keys(cartList).length > 2">
          共计商品{{ Object.keys(cartList).length }}种/{{ totalNumber }}件
          <span class="order__detail__cart-list__more__icon">&#xe6b9;</span>
        </div>
      </div>
    </div>
    <div class="order__usersubmit">
      <div class="order__usersubmit__totalprice">
        实付金额
        <span>¥{{ totalPrice }}</span>
      </div>
      <div class="order__usersubmit__submit">提交订单</div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { back2prevPage } from "@/effects/backEffect";
import { ref } from "@vue/reactivity";

const orderEffect = () => {
  const store = useStore();
  const route = useRoute();
  // 获取店铺id
  const shopId = route.params.shopId;
  // 获取购物车数据
  const cartData = store.state.cartData;
  // 获取店铺名称
  const shopName = cartData[shopId].shopName;
  // 获取购物车商品列表
  const cartList = cartData[shopId].itemList;
  // 计算总价和总量
  let totalPrice = 0;
  let totalNumber = 0;
  for (const key in cartList) {
    const element = cartList[key];
    totalPrice += element.count * element.promotionPrice;
    totalNumber += element.count;
  }
  totalPrice = totalPrice.toFixed(2);
  return { shopName, cartList, totalPrice, totalNumber };
};
const showMoreEffect = () => {
  const showMore = ref(true);
  const showMoreClick = () => {
    showMore.value = false;
  };
  return { showMore, showMoreClick };
};
export default {
  name: "OrderConfirmation",
  setup() {
    const { back } = back2prevPage();
    const { shopName, cartList, totalPrice, totalNumber } = orderEffect();
    const { showMore, showMoreClick } = showMoreEffect();
    return { shopName, cartList, totalPrice, totalNumber, showMore, back, showMoreClick };
  },
};
</script>
<style lang="scss" scoped>
.order {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 49rem;
  background-color: #f8f8f8;
  &__header {
    height: 139rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
    background-repeat: no-repeat;
    text-align: center;
    &__back-icon {
      font-size: 24rem;
      color: #fff;
      position: absolute;
      left: 18.5rem;
      top: 18rem;
    }
    &__title {
      display: inline-block;
      text-align: center;
      padding-top: 21rem;
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: #fff;
    }
  }
  &__receiver {
    width: 339rem;
    height: 111rem;
    background-color: #fff;
    border-radius: 4rem;
    margin: 0 auto;
    position: relative;
    top: -74rem;
    padding: 16rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    &__info {
      &__title {
        font-family: PingFangSC-Medium;
        font-size: 16rem;
        color: #333333;
        margin-bottom: 16rem;
      }
      &__address {
        font-family: PingFangSC-Regular;
        font-size: 14rem;
        color: #333333;
        margin-bottom: 8rem;
      }
      &__userinfo {
        font-family: PingFangSC-Regular;
        font-size: 12rem;
        color: #666666;
        &__username {
          margin-right: 6rem;
        }
      }
    }
    &__icon {
      display: flex;
      align-items: center;
      font-size: 17rem;
      color: #666;
    }
  }
  &__detail {
    width: 339rem;
    border-radius: 4rem;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
    top: -58rem;
    padding: 16rem 16rem 6rem 16rem;
    box-sizing: border-box;
    max-height: 400rem;
    overflow-y: auto;
    &__shop-name {
      font-family: PingFangSC-Medium;
      font-size: 16rem;
      color: #333333;
      margin-bottom: 16rem;
    }
    &__cart-list {
      &__item {
        display: flex;
        margin-bottom: 6rem;
        &__image img {
          width: 46rem;
          height: 46rem;
          margin-right: 16rem;
        }
        &__info {
          flex-grow: 1;
          &__weight {
            margin-top: 2px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
            margin-bottom: 8px;
          }
          &__price {
            display: flex;
            justify-content: space-between;
            &__unitprice {
              font-family: PingFangSC-Regular;
              font-size: 28rem;
              color: #e93b3b;
              transform: scale(50%, 50%);
              transform-origin: left top;
              &::first-letter {
                font-size: 20rem;
              }
            }
            &__totalprice {
              font-family: PingFangSC-Regular;
              font-size: 28rem;
              color: #000000;
              text-align: right;
              transform: scale(50%, 50%);
              transform-origin: right top;
              &::first-letter {
                font-size: 20rem;
              }
            }
          }
        }
      }
      &__more {
        width: 307px;
        height: 28px;
        background: #f5f5f5;
        margin: 0 auto;
        font-size: 14px;
        color: #999999;
        line-height: 28px;
        text-align: center;
        margin-bottom: 12px;
      }
    }
  }
  &__usersubmit {
    display: flex;
    justify-content: space-between;
    width: 375rem;
    height: 49rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    &__totalprice {
      padding-left: 24rem;
      box-sizing: border-box;
      width: 277rem;
      background-color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: #333333;
      line-height: 49rem;
      & span {
        font-family: PingFangSC-Medium;
        font-size: 16rem;
      }
    }
    &__submit {
      width: 98rem;
      background-color: #4fb0f9;
      font-family: PingFangSC-Medium;
      font-size: 14rem;
      color: #ffffff;
      text-align: center;
      line-height: 49rem;
    }
  }
}
</style>
