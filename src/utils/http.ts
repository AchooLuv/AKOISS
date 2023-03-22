import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 50000
})

// 请求拦截器
http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

interface Data {
  [idx: string]: unknown
}

interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?: Data | FormData, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const ako: Http = {
  get(url, data, config) {
    return http.get(url, {
      params: data,
      ...config
    })
  },
  post(url, data, config) {
    return http.post(url, data, config)
  },
  put(url, data, config) {
    return http.put(url, data, config)
  },
  patch(url, data, config) {
    return http.patch(url, data, config)
  },
  delete(url, data, config) {
    return http.delete(url, {
      data,
      ...config
    })
  }
}

export default ako;