import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';

import { SERVER_API_URL, SERVER_TIMEOUT } from 'app/helpers/constants';
import { setupAxiosInterceptors } from 'app/config/interceptors';
import IBaseResponse from 'app/models/base/IBaseResponse';

const axiosInstance = axios.create({
  baseURL: `${SERVER_API_URL}v3/`,
  responseType: 'json',
  timeout: SERVER_TIMEOUT,
  validateStatus(status) {
    return [200].includes(status);
  },
});

setupAxiosInterceptors(axiosInstance);

export async function request<T extends IBaseResponse>(axiosRequestConfig: AxiosRequestConfig, Model: ClassConstructor<T>) {
  const { data } = await axiosInstance.request<T>(axiosRequestConfig);
  const plainToClassData = plainToClass<T, AxiosResponse['data']>(Model, data);

  validate(plainToClassData).then(validationErrors => {
    if (process.env.NODE_ENV === 'development' && validationErrors.length > 0) {
      // eslint-disable-next-line no-console
      console.log('Validation errors: ', validationErrors);
    }
  });

  return plainToClassData;
}
