import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}
export interface ISidebar {
  icon?: ReactNode;
  text: string;
  path?: string;
  id?: number;
  child?: any;
}
