import axios from 'axios';
import { tipsType } from '@/data/format'
import { useResultStore } from '@/stores/result'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const resultStore = useResultStore()

type Result<T> = {
  code: number;
  message: string;
  data: T;
  result: T;
};


export class Request {
  instance: AxiosInstance;
  baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.BASE_URL, timeout: 60000 };

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['Content-Type'] = 'multipart/form-data'
        return config;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      (err: any) => {
        let message = '';
        switch (err.response.status) {
          case 400:
            message = '请求错误(400)';
            break;
          case 401:
            message = '未授权，请重新登录(401)';
            break;
          case 403:
            message = '拒绝访问(403)';
            break;
          case 404:
            message = '请求出错(404)';
            break;
          case 408:
            message = '请求超时(408)';
            break;
          case 500:
            message = '服务器错误(500)';
            break;
          case 501:
            message = '服务未实现(501)';
            break;
          case 502:
            message = '网络错误(502)';
            break;
          case 503:
            message = '服务不可用(503)';
            break;
          case 504:
            message = '网络超时(504)';
            break;
          case 505:
            message = 'HTTP版本不受支持(505)';
            break;
          default:
            message = `连接出错(${err.response.status})!`;
        }
        resultStore.isLoading = false
        tipsType(false, message)
        return Promise.reject(err.response);
      }
    );
  }

  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config);
  }
}

const ako = new Request({})

export default ako

// const ako: Http = {
//   get(url, data, config) {
//     return http.get(url, {
//       params: data,
//       ...config
//     })
//   },