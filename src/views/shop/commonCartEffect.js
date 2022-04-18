/* 购物车与vuex数据的双向数据绑定逻辑，不仅购物车用到，商品详情页用到了，所以抽离成一个js文件 */
import { toRefs } from "vue";
import { useStore } from "vuex";
/* ---------------------------商品增减个数的功能逻辑 */
export const shop2cartEffect = () => {
  const store = useStore();
  const { cartData } = toRefs(store.state);
  /* shopId-->店铺id
     itemId-->店铺id下的商品id
     itemInfo-->店铺id下的商品的各种信息（从接口拿到的）
     num-->判断是加还是减
  */
  const changeItem2cart = (shopId, itemId, itemInfo, num) => {
    store.commit("changeItem2cart", { shopId, itemId, itemInfo, num });
  };
  return { cartData, changeItem2cart };
};
