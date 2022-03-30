<template>
  <div class="container">
    <Header />
    <Search />
    <Banner />
    <Nav />
  </div>
  <Docker />
</template>

<script>
import Docker from "./home/Docker.vue";
import Header from "./home/Header.vue";
import Search from "./home/Search.vue";
import Banner from "./home/Banner.vue";
import Nav from "./home/Nav.vue";
export default {
  name: "Home",
  components: { Docker,Header,Search,Banner,Nav },
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
