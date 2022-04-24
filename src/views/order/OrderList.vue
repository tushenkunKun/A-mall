<template>
  <div class="header">我的订单</div>
  <div class="orderlist">
    <div class="orderlist__order">
      <div class="orderlist__order__top">
        <div class="orderlist__order__top__title">沃尔玛</div>
        <div class="orderlist__order__top__status">已取消</div>
      </div>
      <div class="orderlist__order__bottom">
        <div class="orderlist__order__bottom__image">
          <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527635.png" alt="" />
          <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527853.png" alt="" />
          <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527922.png" alt="" />
          <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261530259.png" alt="" />
        </div>
        <div class="orderlist__order__bottom__count">
          <div class="orderlist__order__bottom__count__totalprice">¥66.69</div>
          <div class="orderlist__order__bottom__count__totalnumber">共6件</div>
        </div>
      </div>
    </div>
  </div>
  <Docker />
</template>
<script>
import Docker from "@/components/Docker.vue";
export default {
  name: "OrderList",
  components: { Docker },
  setup() {
    return {};
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
