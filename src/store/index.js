import { createStore } from "vuex";

export default createStore({
  state: {
    cartData: {
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
      const { shopId, itemId, num } = payload;
      // 判断是否有shopId
      const shopInfo = state.cartData[shopId] || {};
      // 判断是否有itemId
      const itemInfo = shopInfo[itemId] || { count: 0 };
      // 数量加1
      itemInfo.count += num;
      // 把itemInfo加入到shopInfo中
      shopInfo[itemId] = itemInfo;
      // 把shopInfo加入到cartData中
      state.cartData[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {},
});
