<template>
  <div class="container">
    <Header />
    <Search />
  </div>
  <Docker />
</template>

<script>
import Docker from "./home/Docker.vue";
import Header from "./home/Header.vue";
import Search from "./home/Search.vue";
export default {
  name: "Home",
  components: { Docker,Header,Search },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .container{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 49rem;
  }
</style>
