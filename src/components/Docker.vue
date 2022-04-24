<template>
  <div class="docker">
    <div :class="{ docker__item: true, docker__item_active: item.tag === tag }" v-for="(item, index) of dockerItems" :key="index" @click="dockerItemClick(item.path)">
      <span class="docker__item__icon" v-html="item.icon"></span>
      <span class="docker__item__text">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
const dockerEffect = () => {
  const router = useRouter();
  const dockerItemClick = (path) => {
    router.push({ path: path });
  };
  return { dockerItemClick };
};
export default {
  name: "Docker",
  props: ["tag"],
  setup() {
    const dockerItems = [
      { icon: "&#xe608;", text: "首页", tag: "home", path:"/" },
      { icon: "&#xe60d;", text: "购物车", tag: "cart", path:"/" },
      { icon: "&#xe601;", text: "订单", tag: "order", path:"/order-list" },
      { icon: "&#xe646;", text: "我的", tag: "user", path:"/" },
    ];
    const { dockerItemClick } = dockerEffect();
    return { dockerItems, dockerItemClick };
  },
};
</script>
<style lang="scss" scoped>
.docker {
  width: 375rem;
  height: 49rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 -1rem 1rem 0 #f1f1f1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10rem;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__icon {
      font-size: 20rem;
    }
    &__text {
      font-family: PingFangSC-Regular;
      font-size: 27rem;
      text-align: center;
      margin-top: 2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &_active {
      color: #1fa4fc;
    }
  }
}
</style>
