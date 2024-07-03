import { Controller, type Control } from "react-hook-form";
import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
type IDateInput = DatePickerInputProps & {
  name: string;
  control: Control<any>;
};

export const InputDate = ({ control, ...props }: IDateInput) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field: { value, ...reset }, formState: { errors } }) => {
      return (
        <DatePickerInput
          locale="uz-latn"
          {...props}
          {...reset}
          value={value ? new Date(value) : null}
          error={
            errors[props.name] ? (errors[props.name]?.message as string) : ""
          }
        />
      );
    }}
  />
);
