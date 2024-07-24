import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { LocalFormData } from "./formdata";

export type UseHookUserPage = {
  form: UseFormReturn<LocalFormData>;
  onSubmit: SubmitHandler<LocalFormData>;
  isLoading: boolean;
  isLoadingDelete: boolean;
  opened: boolean;
  open: () => void;
  close: () => void;
  openedDelete: boolean;
  openDelete: () => void;
  closeDelete: () => void;
};
