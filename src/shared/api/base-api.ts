import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const API_URL = 'https://api.example.com'

const createBaseApi = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
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
const baseApi = createBaseApi(API_URL);
export default baseApi