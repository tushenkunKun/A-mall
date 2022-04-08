<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <ShopInfo v-for="item of nearbyItems" :key="item.id" :dealerInfo="item" :showBorder="true"/>
  </div>
  <Toast v-if="isShowToast" :message="toastMessage" />
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import {get} from "@/utils/request"
import Toast, { toastEffect } from "@/components/Toast.vue";
import ShopInfo from "@/components/ShopInfo.vue"

/* -------------------主页附近店铺事件 */
const homeNearbyEffect = (showToast) => {
  // 注意这里使用的是ref处理数组，后面赋值时需要用到.value的方法
  const nearbyItems = ref([]);
  const getNearbyItems = async () => {
    try {
      const result = await get("/api/home/nearby");
      nearbyItems.value=result.data.data;
    } catch (error) {
      showToast("获取数据失败");
    }
  };
  getNearbyItems();
  return { nearbyItems };
};
export default {
  name: "Nearby",
  components: { Toast,ShopInfo },
  setup() {
    const { isShowToast, toastMessage, showToast } = toastEffect();
    const { nearbyItems } = homeNearbyEffect(showToast);
    return { isShowToast, toastMessage, nearbyItems };
  },
};
</script>
<style lang="scss" scoped>
.nearby {
  padding: 16rem 18rem;
  &__title {
    font-family: PingFangSC-Medium;
    font-size: 18rem;
    color: #333;
    margin-bottom: 14rem;
  }
}
</style>
