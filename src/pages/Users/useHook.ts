import { useDisclosure } from "@mantine/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";
import { UseHookUserPage } from "@/types/usehookreturntype";
import { LocalFormData } from "@/types/formdata";

export default function useHook(): UseHookUserPage {
  const form = useForm<LocalFormData>({
    resolver: yupResolver(formSchema),
  });

  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const onSubmit: SubmitHandler<LocalFormData> = (data) => {
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
