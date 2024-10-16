import { request } from "../api/requests";

export const PostInfoApi = <T>(url: string, data: T) => request.post(url, data);
