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
      <div class="order__usersubmit__submit" @click="submitOrderClick">提交订单</div>
    </div>
    <div class="order__mask" v-if="maskShow">
      <div class="order__mask__bg" @click="maskCloseClick"></div>
      <div class="order__mask__panel">
        <div class="order__mask__panel__title">确认要离开收银台？</div>
        <div class="order__mask__panel__warning">请尽快完成支付，否则将被取消</div>
        <div class="order__mask__panel__userhandle">
          <div class="order__mask__panel__userhandle__cancel" @click="cancelOrderClick">取消订单</div>
          <div class="order__mask__panel__userhandle__confirm" @click="confirmPayClick">确认支付</div>
        </div>
      </div>
      <div class="order__mask__success" v-if="successPanelShow">
        <div class="order__mask__success__close" @click="cancelOrderClick">&#xe8e7;</div>
        <div class="order__mask__success__icon">&#xe60a;</div>
        <div class="order__mask__success__text">支付成功，等待配送</div>
      </div>
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
const maskShowEffect = () => {
  // 蒙层默认关闭
  const maskShow = ref(false);
  // 警告提示窗口默认关闭
  const warningPanelShow = ref(false);
  // 成功支付窗口默认关闭
  const successPanelShow = ref(false);
  // 提交订单，出现蒙层
  const submitOrderClick = () => {
    maskShow.value = true;
    warningPanelShow.value = true;
    successPanelShow.value = false;
  };
  // 点击蒙层，蒙层关闭
  const maskCloseClick = () => {
    maskShow.value = false;
    warningPanelShow.value = false;
    successPanelShow.value = false;
  };
  // 点击取消订单按钮，蒙层关闭
  const cancelOrderClick = () => {
    maskShow.value = false;
    warningPanelShow.value = false;
    successPanelShow.value = false;
  };
  // 点击确认支付，出现成功提示
  const confirmPayClick = () => {
    maskShow.value = true;
    warningPanelShow.value = false;
    successPanelShow.value = true;
  };
  return { maskShow, successPanelShow, submitOrderClick, maskCloseClick, cancelOrderClick, confirmPayClick };
};
export default {
  name: "OrderConfirmation",
  setup() {
    const { back } = back2prevPage();
    const { shopName, cartList, totalPrice, totalNumber } = orderEffect();
    const { showMore, showMoreClick } = showMoreEffect();
    const { maskShow, successPanelShow, submitOrderClick, maskCloseClick, cancelOrderClick, confirmPayClick } = maskShowEffect();
    return { shopName, cartList, totalPrice, totalNumber, showMore, maskShow, successPanelShow, back, showMoreClick, submitOrderClick, maskCloseClick, cancelOrderClick, confirmPayClick };
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
  &__mask {
    &__bg {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    &__panel {
      box-sizing: border-box;
      padding-top: 24rem;
      width: 301rem;
      height: 157rem;
      background: #ffffff;
      border-radius: 4rem;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      &__title {
        font-family: PingFangSC-Medium;
        font-size: 18rem;
        color: #333333;
        text-align: center;
        margin-bottom: 12rem;
      }
      &__warning {
        font-family: PingFangSC-Regular;
        font-size: 14rem;
        text-align: center;
        color: #666666;
        margin-bottom: 26rem;
      }
      &__userhandle {
        width: 184rem;
        height: 32rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        &__cancel,
        &__confirm {
          width: 80rem;
          height: 32rem;
          border: 1rem solid #4fb0f9;
          border-radius: 16rem;
          font-family: PingFangSC-Regular;
          font-size: 14rem;
          color: #0091ff;
          line-height: 32rem;
          text-align: center;
        }
        &__confirm {
          background: #4fb0f9;
          color: #fff;
        }
      }
    }
    &__success {
      width: 301rem;
      height: 156rem;
      background: #ffffff;
      border-radius: 4rem;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &__close {
        font-size: 18rem;
        color: #666666;
        position: absolute;
        top: 12rem;
        right: 12rem;
      }
      &__icon {
        font-size: 56rem;
        color: #4fb0f9;
        text-align: center;
        margin-top: 40rem;
        font-weight: bold;
      }
      &__text {
        font-family: PingFangSC-Medium;
        font-size: 18rem;
        color: #333333;
        text-align: center;
        margin-top: 6rem;
      }
    }
  }
}
</style>
