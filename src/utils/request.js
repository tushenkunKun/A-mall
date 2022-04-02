/* ---------------------封装axios的post请求 */
import axios from "axios";
/* 自定义配置 */
const instance = axios.create({
  baseURL: "https://www.fastmock.site/mock/961f5366e49b46ec8b9d6f0b4be1e6ff/vuejd",
  timeout: 10000,
});
/* 封装post请求 */
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
  });
};
/* 封装get请求 */
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
export { post, get };
