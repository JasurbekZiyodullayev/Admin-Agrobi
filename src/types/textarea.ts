import { TextareaProps } from "@mantine/core";
import type { Control } from "react-hook-form";
// @ts-ignore
import { ReactQuillProps } from "react-quill";

export type IControl = {
  name: string;
  control: Control<any>;
  ismulti?: boolean;
  disabled?: boolean;
  rules?: any;
  label?: string;
};
export type CustomTextareaProps = TextareaProps & IControl;
export type CustomTextEditorProps = ReactQuillProps & IControl;
