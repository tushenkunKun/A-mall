<template>
  <div class="container">
    <div class="container__portrait">
      <img src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202202221429453.png" alt="头像" />
    </div>
    <div class="container__userinput">
      <input class="container__userinput__userphone" type="text" placeholder="请输入手机号" v-model="phone" />
      <input class="container__userinput__userpassword" type="password" placeholder="请输入密码" v-model="password" />
      <input class="container__userinput__confirmpassword" type="password" placeholder="确认密码" v-model="confirmPassword" />
    </div>
    <div class="container__userhandle">
      <button class="container__userhandle__register" @click="handleRegister">注 册</button>
    </div>
    <div class="container__userskiplogin">
      <a href="javascript:;" @click="go2login">已有账号去登录</a>
    </div>
  </div>
  <Toast v-if="isShowToast" :message="toastMessage" />
</template>
<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "@vue/reactivity";
import { post } from "@/utils/request";
import Toast, { toastEffect } from "@/components/Toast.vue";
import axios from "axios";
/* -----------------------------注册页逻辑 */
const userRegisterEffect = (showToast) => {
  const registerData = reactive({
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const handleRegister = async () => {
    if (registerData.password !== registerData.confirmPassword) {
      showToast("密码不一致，请再次确认密码");
    } else {
      try {
        const result = await post("/api/user/register", { phone: registerData.phone, password: registerData.password });
        if (result.data.code === "0000") {
          // 注册成功自动登录
          localStorage.setItem("isLogin", "true");
          router.push({ name: "Home" });
        } else {
          showToast("注册失败，请重试");
        }
      } catch {
        () => {
          showToast("发送请求失败!");
        };
      }
    }
  };
  /* 将registerData解构并将解构后的数据return出去，然后再html中就可以不用以打点的方式引用 */
  const { phone, password, confirmPassword } = toRefs(registerData);
  return { phone, password, confirmPassword, handleRegister };
};
/* -----------------------------跳转登录页逻辑 */
const userGo2loginEffect = () => {
  const router = useRouter();
  const go2login = () => {
    router.push({ name: "Login" });
  };
  return { go2login };
};
/* -----------------------------setup只用来展示代码调用执行的流程 */
export default {
  name: "Register",
  components: { Toast },
  setup() {
    const { isShowToast, toastMessage, showToast } = toastEffect();
    const { phone, password, confirmPassword, handleRegister } = userRegisterEffect(showToast);
    const { go2login } = userGo2loginEffect();
    return { phone, password, confirmPassword, isShowToast, toastMessage, handleRegister, go2login };
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
    &__userpassword,
    &__confirmpassword {
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
    &__register {
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
  &__userskiplogin {
    width: 139rem;
    height: 20rem;
    margin: 0 auto;
    text-align: center;
    & a {
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
