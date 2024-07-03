import { Controller } from "react-hook-form";
import { IControl } from "@$@D/types/control";
import { MultiSelect, MultiSelectProps } from "@mantine/core";

type ISelect = MultiSelectProps & IControl;

export const MultiSelectComponent = ({ control, error, ...props }: ISelect) => (
  <Controller
    name={props.name}
    control={control}
    render={({ field, formState: { errors } }) => (
      <MultiSelect
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
