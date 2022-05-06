<template>
  <div class="profile">
    <div class="profile__header"></div>
    <div class="profile__userinfo">
      <div class="profile__userinfo__userimg">
        <img src="@/assets/logo.png" alt="用户头像" />
      </div>
      <span class="profile__userinfo__username">热心市民李先生</span>
      <span class="profile__userinfo__userid">ID: 1069643013</span>
      <div class="profile__userinfo__userasset">
        <div class="profile__userinfo__userasset__item profile__userinfo__userasset__hongbao">
          <span class="profile__userinfo__userasset__item__text">红包</span>
          <span class="profile__userinfo__userasset__item__num">218</span>
        </div>
        <div class="profile__userinfo__userasset__item profile__userinfo__userasset__youhuiquan">
          <span class="profile__userinfo__userasset__item__text">优惠券</span>
          <span class="profile__userinfo__userasset__item__num">12张</span>
        </div>
        <div class="profile__userinfo__userasset__item profile__userinfo__userasset__xiandou">
          <span class="profile__userinfo__userasset__item__text">鲜豆</span>
          <span class="profile__userinfo__userasset__item__num">88</span>
        </div>
        <div class="profile__userinfo__userasset__item profile__userinfo__userasset__baitiao">
          <span class="profile__userinfo__userasset__item__text">白条</span>
          <span class="profile__userinfo__userasset__item__num">1000</span>
        </div>
      </div>
    </div>
    <div class="profile__userhandle">
      <div class="profile__userhandle__item">
        <div class="profile__userhandle__item__title">
          <span class="profile__userhandle__item__title__icon">&#xe72b;</span>
          <span class="profile__userhandle__item__title__text">我的钱包</span>
        </div>
        <div class="profile__userhandle__item__skip">&#xe665;</div>
      </div>
      <div class="profile__userhandle__item">
        <div class="profile__userhandle__item__title">
          <span class="profile__userhandle__item__title__icon">&#xe6f1;</span>
          <span class="profile__userhandle__item__title__text">我的地址</span>
        </div>
        <div class="profile__userhandle__item__skip">&#xe665;</div>
      </div>
      <div class="profile__userhandle__item">
        <div class="profile__userhandle__item__title">
          <span class="profile__userhandle__item__title__icon">&#xe692;</span>
          <span class="profile__userhandle__item__title__text">客服与帮助</span>
        </div>
        <div class="profile__userhandle__item__skip">&#xe665;</div>
      </div>
    </div>
  </div>
  <Docker tag="profile"/>
</template>
<script>
import Docker from "@/components/Docker.vue";
export default {
  name: "Profile",
  components: { Docker },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.profile {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 49rem;
  &__header {
    height: 250rem;
    background-image: linear-gradient(239deg, #3a6ff3 0%, #50c7fb 100%);
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
  }
  &__userinfo {
    width: 339rem;
    height: 203rem;
    background: #ffffff;
    box-shadow: 0 8rem 16rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 8rem;
    position: absolute;
    top: 108rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    &__userimg {
      position: absolute;
      top: -47rem;
      width: 94rem;
      height: 94rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      background-color: olivedrab;
      & img {
        width: 94rem;
        height: 94rem;
        border-radius: 50%;
      }
    }
    &__username {
      font-family: PingFangSC-Regular;
      font-size: 24rem;
      color: #262628;
      letter-spacing: 0.19rem;
      text-align: center;
      line-height: 36rem;
      margin-top: 59rem;
    }
    &__userid {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: #c1c0c9;
      text-align: center;
      margin-bottom: 12rem;
    }
    &__userasset {
      width: 100%;
      height: 76rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 2rem solid #f1f1f1;
      &__item {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &__text {
          font-family: PingFangSC-Regular;
          font-size: 12rem;
          color: #c1c0c9;
          text-align: center;
          margin-bottom: 6rem;
        }
        &__num {
          font-family: PingFangSC-Regular;
          font-size: 20rem;
          color: #262628;
          text-align: center;
        }
      }
    }
  }
  &__userhandle {
    width: 339rem;
    position: relative;
    top: 77rem;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 8rem 16rem 0 rgba(0, 0, 0, 0.08);
    border-radius: 8rem;
    &__item {
      height: 40rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5rem 20rem;
      &__title {
        &__icon {
          font-size: 20rem;
          margin-right: 10rem;
          color: #3a6ff3;
        }
        &__text {
          font-family: PingFangSC-Regular;
          font-size: 14rem;
          color: #262626;
        }
      }
      &__skip {
        font-size: 15rem;
        color: #c2c4ca;
      }
    }
  }
}
</style>
