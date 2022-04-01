/* ---------------------封装axios的post请求 */
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = "https://www.fastmock.site/mock/961f5366e49b46ec8b9d6f0b4be1e6ff/vuejd";
const post = (url,data={})=>{
  return new Promise((resolve,reject)=>{
    axios.post(url,data).then(
      (response)=>{
        resolve(response)
      },
      (error)=>{
        reject(error)
      })
  })
}
export {post}