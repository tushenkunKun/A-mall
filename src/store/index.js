import { createStore } from "vuex";

export default createStore({
  state: {
    cartData: {
      /* shopId:{
        itemId:{
          item
        }
        itemId:{
          item
        }
      }
      */
      // 1: {
      // 	1: {
      // 		count: 0,
      // 	},
      // 	2: {
      // 		count: 1,
      // 	},
      // 	3: {
      // 		count: 2,
      // 	},
      // 	4: {
      // 		count: 3,
      // 	},
      // },
    },
  },
  getters: {},
  mutations: {
    /* shopInfo--》shopId对应的店铺
       item--》 店铺下itemId对应的商品信息
     */
    // 购物车增删物品
    changeItem2cart(state, payload) {
      const { shopId, itemId, itemInfo, num } = payload;
      // 判断是否有shopId（判断vuex中是否有点进来的店铺）
      const shopInfo = state.cartData[shopId] || {};
      // 判断是否有itemId（判断vuex中这个店铺有没有点到的商品）
      let item = null;
      if (shopInfo[itemId]) {
        item = shopInfo[itemId];
      } else {
        item = itemInfo;
        item.count = 0;
      }
      // 数量改变
      item.count += num;
      /* 如果商品数量为0，将商品信息shopInfo[itemId]移除 */
      if (item.count === 0) {
        delete shopInfo[itemId];
      } else {
        // 把勾选状态改为true
        item.checked = true;
        // 把item加入到shopInfo中
        shopInfo[itemId] = item;
      }
      // 判断店铺下的购物车是否为空，满足就把shopInfo加入到cartData中
      if (JSON.stringify(shopInfo) !== "{}") {
        state.cartData[shopId] = shopInfo;
      } else {
        // 否则清除店铺信息
        delete state.cartData[shopId];
      }
    },
    // 购物车中物品的单个选中或不选
    changeItemChecked(state, payload) {
      const { shopId, itemId } = payload;
      const item = state.cartData[shopId][itemId];
      item.checked = !item.checked;
    },
    // 清空购物车
    clearCart(state, payload) {
      const { shopId } = payload;
      state.cartData[shopId]={};
    },
    // 购物车全选
    setAllChecked(state, payload) {
      const { shopId } = payload;
      const shopInfo = state.cartData[shopId];
      for (const key in shopInfo) {
        const element = shopInfo[key];
        element.checked = true;
      }
    },
  },
  actions: {},
  modules: {},
});
