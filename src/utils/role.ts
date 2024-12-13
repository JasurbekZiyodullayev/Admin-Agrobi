import { jwtDecode, JwtPayload } from "jwt-decode";
import { getTokens } from "./getTokens";

interface CustomJwtPayload extends JwtPayload {
  group?: string;
  directions: string[];
  tables_list?: string;
  user_region?: string;
}

export const getRole = () => {
  const tokens = getTokens();
  if (typeof window !== "undefined") {
    const decodeObj = jwtDecode<CustomJwtPayload>(tokens?.access as string);
    return decodeObj;
  }
};
