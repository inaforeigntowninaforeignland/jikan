import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';

import { SERVER_API_URL } from 'app/config/constants';

const TIMEOUT = 60 * 1000;

export const axiosInstance = axios.create({
  baseURL: `${SERVER_API_URL}/v3/`,
  responseType: 'json',
  timeout: TIMEOUT,
  validateStatus(status) {
    return [200].includes(status);
  },
});

export async function request<T>(axiosRequestConfig: AxiosRequestConfig, Model: ClassConstructor<T>): Promise<T> {
  const { data } = await axiosInstance.request<T>(axiosRequestConfig);

  return plainToClass<T, AxiosResponse['data']>(Model, data);
}
