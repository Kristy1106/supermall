import axios from "axios";

//4.最常用？？
export function request(config) {
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1表示拦截请求
  instance1.interceptors.request.use(config => {
    return config

  }, err => {
    //console.log(err);
  })

  //2.2响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance1(config)
}


