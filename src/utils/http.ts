import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 3000
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

interface Data {
  [idx: string]: unknown
}

interface Http {
  post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const http: Http = {
  post(url, data, config) {
    return instance.post(url, data, config)
  }
}

export default http;