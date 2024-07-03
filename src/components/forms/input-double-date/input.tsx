import { DatePickerInput } from "@mantine/dates";
import { Controller } from "react-hook-form";

export const InputDoubleDate = ({ control, ...props }: any) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <DatePickerInput
        {...props}
        {...field}
        locale="uz-latn"
        type="range"
        error={
          errors[props.name] ? (errors[props.name]?.message as string) : ""
        }
      />
    )}
  />
);
