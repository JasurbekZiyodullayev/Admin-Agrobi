import { TOKEN } from "@/constants/config.api";
import { isExpiredToken } from "@/utils/isExpiredToken";
import { clearUser } from "@/utils/user";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const request = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(
  async (config: any) => {
    const tokens = JSON.parse(localStorage.getItem(TOKEN) as string);
    if (tokens?.access) {
      const { isExpiredDay } = isExpiredToken();

      if (isExpiredDay > 0) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${tokens?.access}`,
        };
        return config;
      } else {
        clearUser();
        window.location.href = "/";
      }

      return config;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      if (window.location.pathname !== "/") {
        clearUser();
        window.location.href = "/";
      }
    }

    return await Promise.reject(error);
  }
);

export { request };
