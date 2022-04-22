<template>
  <div class="order">
    <div class="order__header">
      <span class="order__header__back-icon">&#xe624;</span>
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
      <div class="order__detail__shop-name">沃尔玛</div>
      <div class="order__detail__cart-list">
        <div class="order__detail__cart-list__item">
          <div class="order__detail__cart-list__item__image">
            <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527635.png" alt="" />
          </div>
          <div class="order__detail__cart-list__item__info">
            <div class="order__detail__cart-list__item__info__weight">番茄250g/份</div>
            <div class="order__detail__cart-list__item__info__price">
              <span class="order__detail__cart-list__item__info__price__unitprice">¥33.3 x 3</span>
              <span class="order__detail__cart-list__item__info__price__totalprice">¥99.9</span>
            </div>
          </div>
        </div>
        <div class="order__detail__cart-list__item">
          <div class="order__detail__cart-list__item__image">
            <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202261527635.png" alt="" />
          </div>
          <div class="order__detail__cart-list__item__info">
            <div class="order__detail__cart-list__item__info__weight">番茄250g/份</div>
            <div class="order__detail__cart-list__item__info__price">
              <span class="order__detail__cart-list__item__info__price__unitprice">¥33.3 x 3</span>
              <span class="order__detail__cart-list__item__info__price__totalprice">¥99.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderConfirmation",
  setup() {
    return {};
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
    }
  }
}
</style>
