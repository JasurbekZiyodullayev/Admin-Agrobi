import { CustomInputProps } from "@/types/input";
import { TextInput } from "@mantine/core";
import { Controller } from "react-hook-form";

export const Input = ({ control, error, ...props }: CustomInputProps) => {
  return (
    <Controller
      name={props.name}
      control={control}
      rules={props?.rules}
      render={({ field, formState: { errors } }) => (
        <TextInput
          {...props}
          {...field}
          value={field.value ?? ""}
          error={
            error ||
            (errors[props.name] ? (errors[props.name]?.message as string) : "")
          }
        />
      )}
    />
  );
};
