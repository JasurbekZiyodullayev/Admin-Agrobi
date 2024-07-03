import { CustomYearInputProps } from "@$@D/types/input";
import { YearPickerInput } from "@mantine/dates";
import { Controller } from "react-hook-form";

export const YearInput = ({
  control,
  error,
  ...props
}: CustomYearInputProps) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <YearPickerInput
        locale="uz-latn"
        {...props}
        {...field}
        defaultValue={new Date()}
        error={
          error ||
          (errors[props.name] ? (errors[props.name]?.message as string) : "")
        }
      />
    )}
  />
);
