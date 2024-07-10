import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

export default function useHook() {
  const form = useForm();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  const onSubmit = (data: any) => {
    console.log(data, "data");
  };

  const isLoading = true;
  const isLoadingDelete = true;
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
