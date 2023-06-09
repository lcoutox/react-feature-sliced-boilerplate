import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { config } from '@/shared/lib/config';


const createBaseApi = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      // Tratar erros de resposta aqui
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      // Tratar configuração da requisição aqui
      return config;
    },
    (error: AxiosError) => {
      // Tratar erros de requisição aqui
      return Promise.reject(error);
    }
  );

  return instance;
};

export { createBaseApi };
const baseApi = createBaseApi(config.API_URL + '/api');
export default baseApi