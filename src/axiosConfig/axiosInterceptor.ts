import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { API_URL, TOKEN } from './axiosUrl';

const _axios: AxiosInstance = axios.create();
const TIMEOUT = 1 * 60 * 1000;
_axios.defaults.timeout = TIMEOUT;
_axios.defaults.baseURL = API_URL;

const onRequestSuccess = async (config: AxiosRequestConfig) => {
  config.headers['Accept'] = 'application/json';
  config.headers.Authorization = TOKEN;

  return config;
};

const onResponseSuccess = (response: AxiosResponse) => response;

const onResponseError = async (err: AxiosError) => {
  const status = err?.response?.status;

  if (status === 500) {
    console.log('Something is wrong with backend');
  }

  return Promise.reject(err);
};

_axios.interceptors.request.use(onRequestSuccess);
_axios.interceptors.response.use(onResponseSuccess, onResponseError);

export default _axios;
