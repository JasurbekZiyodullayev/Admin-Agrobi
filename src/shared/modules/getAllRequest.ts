import { request } from "../api/requests";

export const GetInfoApi = <T>(url: string, params?: T) =>
  request.get(url, { params });
