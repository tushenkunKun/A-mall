<template>
  <div class="container">
    <Header />
    <Search />
    <Banner />
    <Nav />
    <div class="gap"></div>
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Docker from "./home/Docker.vue";
import Header from "./home/Header.vue";
import Search from "./home/Search.vue";
import Banner from "./home/Banner.vue";
import Nav from "./home/Nav.vue";
import Nearby from "./home/Nearby.vue";
export default {
  name: "Home",
  components: { Docker,Header,Search,Banner,Nav,Nearby },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
  .container{
    overflow-y: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 49rem;
    & .gap{
      width: 375rem;
      height: 10rem;
      background: #f1f1f1;
    }
  }
</style>
