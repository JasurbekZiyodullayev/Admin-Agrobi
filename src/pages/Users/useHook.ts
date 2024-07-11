import { FormData } from "@/types/formData";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";

export default function useHook() {
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const onSubmit = (data: FormData) => {
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
