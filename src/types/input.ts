import type {
  FileInputProps,
  InputProps,
  PasswordInputProps,
  PinInputProps,
  SwitchProps,
  TextInputProps,
  TextareaProps,
} from "@mantine/core";
import { YearPickerInputProps } from "@mantine/dates";
import { IControl } from "./control";

export type CustomInputProps = TextInputProps & IControl;
export type CustomSwitchProps = SwitchProps & IControl;
export type CustomFileInputProps = FileInputProps & IControl;
export type CustomIPasswordnputProps = PasswordInputProps & IControl;
export type CustomInputPhoneProps = InputProps & IControl;
export type CustomTextAreProps = TextareaProps & IControl;
export type CustomPinInputProps = PinInputProps & IControl;
export type CustomYearInputProps = YearPickerInputProps & IControl;
export type CustomTextareaProps = TextareaProps & IControl;
