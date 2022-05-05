<template>
  <div class="banner">
    <swiper :modules="modules" :slides-per-view="1" :space-between="10" navigation :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }">
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
      <swiper-slide><img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /></swiper-slide>
    </swiper>
    <!-- <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202191609589.png" alt="双11狂欢节" /> -->
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  name: "Banner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Navigation, Pagination, Autoplay, A11y] };
  },
};
</script>
<style lang="scss" scoped>
.banner {
  margin-top: 12rem;
  text-align: center;
  & img {
    width: 339rem;
    height: 86rem;
  }
}
</style>
