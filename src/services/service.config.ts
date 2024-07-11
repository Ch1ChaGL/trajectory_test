import { AxiosRequestConfig } from 'axios';
import { getContentType } from './api/helper';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const createRequestConfig = (
  method: HttpMethods,
  endPoint: string,
  //Для каждого запроса, который использует боди, можно создать тип, после чего все типы объединить в один и добавить сюда
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
  id?: string,
): AxiosRequestConfig => ({
  url: id ? endPoint + id : endPoint,
  method,
  data,
  headers: getContentType(),
});
