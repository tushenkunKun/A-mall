<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__item" v-for="item of nearbyItems" :key="item.id">
      <div class="nearby__item__img">
        <img :src="item.imgUrl" alt="" />
      </div>
      <div class="nearby__item__desc">
        <div class="nearby__item__desc__name">{{item.dealer}}</div>
        <div class="nearby__item__desc__tags">
          <span class="nearby__item__desc__tags__tag" v-for="(tagItem,tagIndex) of item.tags" :key="tagIndex">{{tagItem}}</span>
        </div>
        <div class="nearby__item__desc__notice">{{item.notice}}</div>
      </div>
    </div>   
  </div>
</template>
<script>
export default {
  name: "Nearby",
  setup() {
    const nearbyItems=[
      {
        id:0,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-0',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:1,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-1',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:2,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-2',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:3,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-3',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:4,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-4',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:5,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-5',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id:6,
        imgUrl:'https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202211407079.png',
        dealer:'沃尔玛-6',
        tags:['月售1万+','起送¥0','基础运费¥5'],
        notice:'VIP尊享满89元减4元运费券（每月3张）'
      },
    ]
    return {nearbyItems};
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
    &__img{
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
        margin-bottom:8rem;
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
