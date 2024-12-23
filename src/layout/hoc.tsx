import { TOKEN } from "@/constants/config.api";
import { ILayout } from "@/types/layout";
import { Navigate } from "react-router-dom";

export const HocPrivate = ({ children }: ILayout) => {
  if (!localStorage.getItem(TOKEN)) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};
