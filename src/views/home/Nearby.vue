<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__item" v-for="item of nearbyItems" :key="item.id">
      <div class="nearby__item__img">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="nearby__item__desc">
        <div class="nearby__item__desc__name">{{ item.dealer }}</div>
        <div class="nearby__item__desc__tags">
          <span class="nearby__item__desc__tags__tag" v-for="(tagItem, tagIndex) of item.tags" :key="tagIndex">{{ tagItem }}</span>
        </div>
        <div class="nearby__item__desc__notice">{{ item.notice }}</div>
      </div>
    </div>
  </div>
  <Toast v-if="isShowToast" :message="toastMessage" />
</template>
<script>
import Toast, { toastEffect } from "@/components/Toast.vue";
import { reactive, ref } from "@vue/reactivity";
import {get} from "@/utils/request"

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
  components: { Toast },
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
  &__item {
    display: flex;
    margin-bottom: 12rem;
    &__img {
      margin-right: 16rem;
      & img {
        width: 56rem;
        height: 56rem;
      }
    }
    &__desc {
      border-bottom: 1px solid #f1f1f1;
      flex-grow: 1;
      color: #333333;
      font-family: PingFangSC-Regular;
      &__name {
        font-size: 16rem;
        margin-bottom: 8rem;
      }
      &__tags {
        font-size: 13rem;
        margin-bottom: 8rem;
      }
      &__notice {
        font-size: 13rem;
        color: #e93b3b;
        margin-bottom: 12rem;
      }
    }
  }
}
</style>
