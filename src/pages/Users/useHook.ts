import { useDisclosure } from "@mantine/hooks";
import { useForm } from "react-hook-form";

export default function useHook() {
  const form = useForm();
  const [opened, { open, close }] = useDisclosure(false);
  const [openedDelete, { open: openDelete, close: closeDelete }] =
    useDisclosure(false);

  function onSubmit(data: any) {
    console.log(data);
  }
  return {
    form,
    opened,
    open,
    close,
    openedDelete,
    openDelete,
    closeDelete,
    onSubmit,
  };
}
