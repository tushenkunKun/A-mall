import { createStore } from "vuex";

export default createStore({
  state: {
    cartData: {
      /* shopId:{
        itemId:{
          itemInfo
        }
        itemId:{
          itemInfo
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
    changeItem2cart(state, payload) {
      const { shopId, itemId,itemInfo, num } = payload;
      // 判断是否有shopId
      const shopInfo = state.cartData[shopId] || {};
      // 判断是否有itemId
      let item = null;
      if (shopInfo[itemId]) {
        item = shopInfo[itemId];
      } else {
        item = itemInfo;
        item.count = 0;
      }
      // 数量改变
      item.count += num;
      // 把item加入到shopInfo中
      shopInfo[itemId] = item;
      // 把shopInfo加入到cartData中
      state.cartData[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {},
});
