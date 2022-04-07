<template>
<div class="shop">
  <ShopInfo :dealerInfo="item"/>
</div>
</template>
<script>
import ShopInfo from "@/components/ShopInfo.vue"
export default {
  name:'Shop',
  components:{ShopInfo},
  setup(){
    const item = {
      "id": 1,
			"imgUrl": "https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png",
			"title": "沃尔玛-1",
			"tags": ["月售1万+", "起送¥1", "基础运费¥1"],
			"notice": "VIP尊享满89元减4元运费券（每月1张）"
    }
    return{item}
  }
}
</script>
<style lang='scss' scoped>
.shop{
  padding:0 18rem;
}
</style>