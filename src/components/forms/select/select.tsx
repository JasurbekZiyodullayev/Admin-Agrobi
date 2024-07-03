import { Controller } from "react-hook-form";
import { Select as MantineSelect, type SelectProps } from "@mantine/core";
import { IControl } from "@$@D/types/control";

type ISelect = SelectProps & IControl;

export const Select = ({ control, error, ...props }: ISelect) => (
  <Controller
    name={props.name}
    control={control}
    rules={props?.rules}
    render={({ field, formState: { errors } }) => (
      <MantineSelect
        {...props}
        {...field}
        error={
          error ||
          (errors[props.name] ? (errors[props.name]?.message as string) : "")
        }
      />
    )}
  />
);
