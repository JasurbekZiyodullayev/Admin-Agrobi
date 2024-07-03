import { CustomInputPhoneProps } from "@$@D/types/input";
import { Input, InputLabel } from "@mantine/core";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
export const InputPhone = ({
  control,
  error,
  ...props
}: CustomInputPhoneProps) => (
  <Controller
    name={props.name}
    control={control}
    rules={props?.rules}
    render={({ field, formState: { errors } }) => (
      <div>
        <InputLabel size="sm">{props.label}</InputLabel>
        <Input
          {...props}
          {...field}
          size="sm"
          component={IMaskInput}
          mask="+998 (00) 000-00-00"
          placeholder="+998 (00) 000-00-00"
          value={field.value ?? ""}
          error={
            error ||
            (errors[props.name] ? (errors[props.name]?.message as string) : "")
          }
        />
      </div>
    )}
  />
);
