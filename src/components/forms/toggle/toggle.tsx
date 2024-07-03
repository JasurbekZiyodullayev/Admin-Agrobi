import { CustomSwitchProps } from "@$@D/types/input";
import { Switch } from "@mantine/core";
import { Controller } from "react-hook-form";

export const Toggle = ({ control, error, ...props }: CustomSwitchProps) => {
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props?.rules}
      render={({ field, formState: { errors } }) => (
        <Switch
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
};
