<template>
  <div class="usercart">
    <div class="usercart__item">
      
    </div>
  </div>
  <Docker tag="usercart" />
</template>
<script>
import Docker from "@/components/Docker.vue";
export default {
  name: "UserCart",
  components: { Docker },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.usercart {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 49rem;
}
</style>
