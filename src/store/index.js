import { createStore } from "vuex";
// 把购物车信息放入缓存
const setLocalCartData = (state) => {
  const { cartData } = state;
  const cartDataString = JSON.stringify(cartData);
  localStorage.cartData = cartDataString;
};
// 从缓存中取出购物车信息
const getLocalCartData = () => {
  let result = {};
  if (localStorage.cartData) {
    result = JSON.parse(localStorage.cartData);
  }
  return result;
};
export default createStore({
  state: {
    cartData: getLocalCartData(),
    /* 下面是cartData的数据结构
    cartData: {
      "shopId":{
        "shopName":"",
        "itemList":{
          "itemId":{
            item
          }
          itemId:{
            item
          }
        }
      }
    },
    */
  },
  getters: {},
  mutations: {
    /* shopInfo--》shopId对应的店铺
       item--》 店铺下itemId对应的商品信息
     */
    // 购物车增删物品
    changeItem2cart(state, payload) {
      const { shopId, shopName, itemId, itemInfo, num } = payload;
      // 判断是否有shopId（判断vuex中是否有点进来的店铺）
      let shopInfo = {};
      if (state.cartData[shopId]) {
        shopInfo = state.cartData[shopId];
      } else {
        shopInfo.shopName = shopName;
        shopInfo.itemList = {};
      }
      // 判断是否有itemId（判断vuex中这个店铺有没有点到的商品）
      let item = null;
      if (shopInfo.itemList[itemId]) {
        item = shopInfo.itemList[itemId];
      } else {
        item = itemInfo;
        item.count = 0;
      }
      // 数量改变
      item.count += num;
      /* 如果商品数量为0，将商品信息shopInfo[itemId]移除 */
      if (item.count === 0) {
        delete shopInfo.itemList[itemId];
      } else {
        // 把勾选状态改为true
        item.checked = true;
        // 把item加入到shopInfo中
        shopInfo.itemList[itemId] = item;
      }
      // 判断店铺下的购物车是否为空，满足就把shopInfo加入到cartData中
      if (JSON.stringify(shopInfo.itemList) !== "{}") {
        state.cartData[shopId] = shopInfo;
      } else {
        // 否则清除店铺信息
        delete state.cartData[shopId];
      }
      setLocalCartData(state);
    },
    // 购物车中物品的单个选中或不选
    changeItemChecked(state, payload) {
      const { shopId, itemId } = payload;
      const item = state.cartData[shopId].itemList[itemId];
      item.checked = !item.checked;
      setLocalCartData(state);
    },
    // 清空购物车
    clearCart(state, payload) {
      const { shopId } = payload;
      state.cartData[shopId].itemList = {};
      setLocalCartData(state);
    },
    // 购物车全选
    setAllChecked(state, payload) {
      const { shopId } = payload;
      const shopInfo = state.cartData[shopId];
      for (const key in shopInfo.itemList) {
        const element = shopInfo.itemList[key];
        element.checked = true;
      }
      setLocalCartData(state);
    },
  },
  actions: {},
  modules: {},
});
