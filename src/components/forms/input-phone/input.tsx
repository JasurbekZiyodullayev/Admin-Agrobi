import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import style from "./style.module.scss";
export const PhoneInput = (props: any) => {
  const { control, name, placeholder, disabled = false, label } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, formState: { errors } }) => (
        <div className={style.wrapper}>
          <label htmlFor={name}>{label}</label>
          <InputMask
            value={value ?? ""}
            onChange={onChange}
            type="text"
            name={name}
            placeholder={placeholder}
            className={errors[name] ? "error" : ""}
            // eslint-disable-next-line no-nonoctal-decimal-escape
            mask="+\9\98 99 999 99 99"
            disabled={disabled}
            alwaysShowMask={true}
            maskChar={""}
          />
          {errors[name] && (
            <div className={style.error}>{errors[name]?.message as string}</div>
          )}
        </div>
      )}
    />
  );
};
