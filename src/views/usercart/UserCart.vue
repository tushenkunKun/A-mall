<template>
  <div class="usercart">
    <div class="usercart__header">
      我的全部购物车(
      <span class="usercart__num">1</span>
      )
    </div>
    <div class="usercart__item">
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
    </div>
  </div>
  <Docker tag="usercart" />
</template>
<script>
import Docker from "@/components/Docker.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
// /* 订单总价和总量的计算相关逻辑 */
// const orderEffect = () => {
//   const store = useStore();
//   const route = useRoute();
//   // 获取店铺id
//   const shopId = route.params.shopId;
//   // 获取购物车数据
//   const cartData = store.state.cartData;
//   // 获取店铺名称
//   const shopName = cartData[shopId].shopName;
//   // 获取购物车商品列表
//   const cartList = cartData[shopId].itemList;
//   // 计算总价和总量
//   let totalPrice = 0;
//   let totalNumber = 0;
//   for (const key in cartList) {
//     const element = cartList[key];
//     totalPrice += element.count * element.promotionPrice;
//     totalNumber += element.count;
//   }
//   totalPrice = totalPrice.toFixed(2);
//   return { shopName, cartList, totalPrice, totalNumber };
// };
// /* 购物车显示更多逻辑 */
// const showMoreEffect = () => {
//   const showMore = ref(true);
//   const showMoreClick = () => {
//     showMore.value = false;
//   };
//   return { showMore, showMoreClick };
// };
export default {
  name: "UserCart",
  components: { Docker },
  setup() {
    const shopName = "坤店铺";
    const cartList = {
      1: {
        checked: true,
        count: 2,
        id: 1,
        imgUrl: "https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202251443280.png",
        originalPrice: 1.6,
        promotionPrice: 1.6,
        sales: 1,
        weight: "全部商品-番茄150g/份",
      },
      2: {
        checked: true,
        count: 1,
        id: 2,
        imgUrl: "https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527853.png",
        originalPrice: 2.6,
        promotionPrice: 2.6,
        sales: 2,
        weight: "全部商品-番茄250g/份",
      },
      3: {
        checked: true,
        count: 3,
        id: 3,
        imgUrl: "https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261530259.png",
        originalPrice: 3.6,
        promotionPrice: 3.6,
        sales: 3,
        weight: "全部商品-番茄350g/份",
      },
    };
    const totalPrice = 11;
    const totalNumber = 2;
    const showMore = false;
    const showMoreClick = () => {
      showMore = false;
    };
    // const { shopName, cartList, totalPrice, totalNumber } = orderEffect();
    // const { showMore, showMoreClick } = showMoreEffect();
    return { shopName, cartList, totalPrice, totalNumber, showMore, showMoreClick };
  },
};
</script>
<style lang="scss" scoped>
.usercart {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 49rem;
  background-color: #f8f8f8;
  &__header {
    width: 375rem;
    height: 44rem;
    background-color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 16rem;
    color: #333333;
    text-align: center;
    line-height: 44rem;
  }
  &__item {
    margin: 16rem 0;
    & .order__detail {
      width: 339rem;
      border-radius: 4rem;
      background-color: #fff;
      margin: 0 auto;
      position: relative;
      top: 0rem;
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
              margin-top: 2rem;
              font-family: PingFangSC-Medium;
              font-size: 14rem;
              color: #333333;
              margin-bottom: 8rem;
            }
            &__price {
              display: flex;
              justify-content: space-between;
              &__unitprice {
                font-family: PingFangSC-Regular;
                font-size: 28rem;
                color: #e93b3b;
                transform: scale(0.5, 0.5);
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
                transform: scale(0.5, 0.5);
                transform-origin: right top;
                &::first-letter {
                  font-size: 20rem;
                }
              }
            }
          }
        }
        &__more {
          width: 307rem;
          height: 28rem;
          background: #f5f5f5;
          margin: 0 auto;
          font-size: 14rem;
          color: #999999;
          line-height: 28rem;
          text-align: center;
          margin-bottom: 12rem;
        }
      }
    }
  }
}
</style>
