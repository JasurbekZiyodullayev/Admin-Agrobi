import { SubmitErrorHandler, useForm } from "react-hook-form";

export const useLogin = () => {
  const form = useForm();

  const onSubmit: SubmitErrorHandler<any> = (data) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
};
