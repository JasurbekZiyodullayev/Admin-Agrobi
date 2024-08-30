import { useForm } from "react-hook-form";

export default function useHook() {
  const form = useForm();
  function onSubmit(data: any) {
    console.log(data);
  }
  return {
    form,
    onSubmit,
  };
}
