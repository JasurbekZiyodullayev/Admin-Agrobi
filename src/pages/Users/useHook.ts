import { FormData } from "@/types/formdata";
import { useDisclosure } from "@mantine/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";

export default function useHook() {
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data, "data");
  };

  const isLoading = false;
  const isLoadingDelete = false;
  return {
    form,
    onSubmit,
    isLoading,
    isLoadingDelete,
    opened,
    open,
    close,
    openedDelete,
    openDelete,
    closeDelete,
  };
}
