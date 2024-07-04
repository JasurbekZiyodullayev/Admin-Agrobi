import { CustomTextAreProps } from "@/types/input";
import { Textarea } from "@mantine/core";
import { Controller } from "react-hook-form";

export const TextAreaForm = ({
  control,
  error,
  ...props
}: CustomTextAreProps) => (
  <Controller
    name={props.name}
    control={control}
    rules={props?.rules}
    render={({ field, formState: { errors } }) => (
      <Textarea
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
