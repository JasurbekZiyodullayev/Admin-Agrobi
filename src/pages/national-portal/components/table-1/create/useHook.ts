import { useForm } from "react-hook-form";

export default function useHook() {
  const form = useForm();
  return { form };
}
