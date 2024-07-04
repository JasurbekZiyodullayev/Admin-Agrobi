import { Controller } from "react-hook-form";
import { PasswordInput } from "@mantine/core";
import { CustomIPasswordnputProps } from "@/types/input";

export const InputPassword = ({
  control,
  ...props
}: Omit<CustomIPasswordnputProps, "type">) => (
  <Controller
    name={props.name}
    control={control}
    rules={props?.rules}
    render={({ field, formState: { errors } }) => {
      return (
        <PasswordInput
          {...props}
          {...field}
          value={field.value ?? ""}
          error={
            errors[props.name] ? (errors[props.name]?.message as string) : ""
          }
        />
      );
    }}
  />
);
