import { AxiosRequestConfig, AxiosResponse } from "axios";
import { request } from "../api/requests";

interface CustomConfig extends AxiosRequestConfig {}

export const getRequest = async <T>(
  url: string,
  config?: CustomConfig
): Promise<AxiosResponse<T>> => {
  return await request<T>(url, config);
};
