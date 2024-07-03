import type { Control } from "react-hook-form";

export type IControl = {
  name: string;
  control: Control<any>;
  ismulti?: boolean;
  disabled?: boolean;
  locale?: string;
  rules?: any;
  label?: string;
  changeName?: boolean;
};
