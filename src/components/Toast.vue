<template>
  <div class="toast">{{message}}</div>
</template>
<script>
import {reactive} from "vue";
export default {
  name:'Toast',
  props:["message"],
  setup(){
    return{}
  }
}
export const toastEffect = () => {
  const toastData = reactive({
    isShowToast: false,
    toastMessage: "",
  });
  const showToast = (message) => {
    toastData.isShowToast = true;
    toastData.toastMessage = message;
    setTimeout(() => {
      toastData.isShowToast = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  return { toastData, showToast };
};
</script>
<style lang='scss' scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background:rgba(0,0,0,.35);
    padding: 10rem;
    border-radius: 5rem;
    color: #fff;
  }
</style>