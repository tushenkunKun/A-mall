/* -------------------------返回跳转之前的页面功能 */
import { useRouter } from "vue-router";

export const back2prevPage = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return { back };
};