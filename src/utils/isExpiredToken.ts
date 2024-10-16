import { TOKEN } from "@/constants/config.api";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

export const isExpiredToken = () => {
  if (typeof window !== "undefined") {
    const tokens = JSON.parse(localStorage.getItem(TOKEN) as string);
    const jwt_access: any = jwtDecode(tokens?.access);
    const jwt_refresh: any = jwtDecode(tokens?.refresh);
    const isExpiredDay = dayjs(jwt_access.exp * 1000).diff(dayjs(), "hour");
    const isExpiredWeek = dayjs
      .unix(jwt_refresh.exp)
      .add(7, "day")
      .diff(dayjs());
    return { isExpiredDay, isExpiredWeek };
  } else {
    return { isExpiredDay: 1, isExpiredWeek: 1 };
  }
};
