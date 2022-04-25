<template>
  <div class="header">我的订单</div>
  <div class="orderlist">
    <div class="orderlist__order" v-for="item of orderList" :key="item.shopId">
      <div class="orderlist__order__top">
        <div class="orderlist__order__top__title">{{ item.shopName }}</div>
        <div class="orderlist__order__top__status">已支付</div>
      </div>
      <div class="orderlist__order__bottom">
        <div class="orderlist__order__bottom__image">
          <img v-for="productItem of item.itemList" :key="productItem.id" :src="productItem.imgUrl" alt="" />
        </div>
        <div class="orderlist__order__bottom__count">
          <div class="orderlist__order__bottom__count__totalprice">¥{{orderTotalPrice(item.itemList)}}</div>
          <div class="orderlist__order__bottom__count__totalnumber">共{{orderTotalNumber(item.itemList)}}件</div>
        </div>
      </div>
    </div>
  </div>
  <Docker tag="order" />
</template>
<script>
import Docker from "@/components/Docker.vue";
import { ref } from "@vue/reactivity";
import { get } from "@/utils/request";
/* 订单列表的相关逻辑 */
const orderListEffect = () => {
  const orderList = ref([]);
  // 进入订单列表页面时通过调用接口获取数据
  const getOrderList = async () => {
    const result = await get("/api/order-list/1");
    if (result.data.code === "0000") {
      orderList.value = result.data.data;
    } else {
      orderList.value = [];
    }
  };
  getOrderList();
  const orderTotalPrice = (productList) => {
    let totalprice = 0;
    productList.forEach((element) => {
      totalprice += element.count * element.promotionPrice;
    });
    return totalprice.toFixed(2);
  };
  const orderTotalNumber = (productList) => {
    let totalnumber = 0;
    productList.forEach((element) => {
      totalnumber += element.count;
    });
    return totalnumber.toFixed(2);
  };
  return { orderList, orderTotalPrice, orderTotalNumber };
};
export default {
  name: "OrderList",
  components: { Docker },
  setup() {
    const { orderList, orderTotalPrice, orderTotalNumber } = orderListEffect();
    return { orderList, orderTotalPrice, orderTotalNumber };
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 375rem;
  height: 44rem;
  background-color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 16rem;
  color: #333333;
  text-align: center;
  line-height: 44rem;
}
.orderlist {
  position: fixed;
  top: 44rem;
  right: 0;
  left: 0;
  bottom: 49rem;
  background-color: #f8f8f8;
  &__order {
    width: 339rem;
    height: 110rem;
    margin: 16rem auto;
    overflow: hidden;
    background: #ffffff;
    border-radius: 4rem;
    padding: 16rem;
    box-sizing: border-box;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 22rem;
      margin-bottom: 16rem;
      &__title {
        font-family: PingFangSC-Medium;
        font-size: 16rem;
        color: #333333;
      }
      &__status {
        font-family: PingFangSC-Medium;
        font-size: 14rem;
        color: #999999;
      }
    }
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__image {
        & img {
          width: 40rem;
          height: 40rem;
          margin-right: 12rem;
        }
      }
      &__count {
        &__totalprice {
          font-family: PingFangSC-Regular;
          font-size: 14rem;
          color: #e93b3b;
          text-align: right;
          margin-bottom: 4rem;
          line-height: 20rem;
        }
        &__totalnumber {
          font-family: PingFangSC-Regular;
          font-size: 12rem;
          color: #333333;
          line-height: 14rem;
          text-align: right;
        }
      }
    }
  }
}
</style>
