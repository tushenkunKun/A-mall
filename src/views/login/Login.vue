<template>
  <div class="container">
    <div class="container__portrait">
      <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202221429453.png" alt="头像" />
    </div>
    <div class="container__userinput">
      <input class="container__userinput__userphone" type="text" placeholder="请输入手机号" />
      <input class="container__userinput__userpassword" type="password" placeholder="请输入密码" />
    </div>
    <div class="container__userhandle">
      <button class="container__userhandle__login">登 录</button>
    </div>
    <div class="container__userskip">
      <a href="javascript:;">立即注册</a>
      <span class="container__userskip__gap">|</span>
      <a href="javascript:;">忘记密码</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.container {
  &__portrait {
    margin: 120rem 0 40rem 0;
    text-align: center;
    & img {
      width: 66rem;
      height: 66rem;
    }
  }
  &__userinput {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16rem;
    &__userphone,
    &__userpassword {
      width: 295rem;
      height: 48rem;
      margin-bottom: 16rem;
      background: #f9f9f9;
      border: 1rem solid rgba(0, 0, 0, 0.1);
      border-radius: 6rem;
      padding-left: 16rem;
      font-family: PingFangSC-Regular;
      font-size: 16rem;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      line-height: 24rem;
    }
  }
  &__userhandle {
    text-align: center;
    margin-bottom: 16rem;
    &__login {
      width: 295rem;
      height: 48rem;
      background: #0091ff;
      box-shadow: 0 4rem 8rem 0 rgba(0, 145, 255, 0.32);
      border-radius: 4rem;
      font-family: PingFangSC-Regular;
      font-size: 18rem;
      color: #fff;
      letter-spacing: 0;
      line-height: 24rem;
    }
  }
  &__userskip {
    width: 139rem;
    height: 20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    & a,
    &__gap {
      font-family: PingFangSC-Regular;
      font-size: 14rem;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>
