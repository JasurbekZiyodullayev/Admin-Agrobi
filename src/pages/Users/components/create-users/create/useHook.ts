import { endpoints, URL_KEYS } from "@/shared/endpoints";
import { GetInfoApi } from "@/shared/modules/getAllRequest";
import { PostInfoApi } from "@/shared/modules/postAllRequiest";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormTypes = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  occupation: string;
  phone_number: string;
  group: string;
};
export default function useHook() {
  const form = useForm<FormTypes>();
  const navigate = useNavigate();
  const { id } = useParams();

  const { isFetching } = useQuery({
    queryKey: [URL_KEYS.GET_STAT_USERS_BY_ID, id],
    queryFn: () => GetInfoApi(`/auth/profiles/${id}/`),
    enabled: !!id,
    onSuccess: (res) => {
      const data = res.data;
      if (data) {
        form.reset(data);
      }
    },
  });

  const { mutate, isLoading } = useMutation(
    (data: FormTypes) => PostInfoApi<FormTypes>(endpoints.statUsers, data),
    {
      onSuccess: async () => {
        await navigate("/users");
        await notifications.show({
          message: "Foydalanuvchi qo'shildi!",
          autoClose: 3000,
        });
      },
      onError: (error: any) => {
        console.log("error", error);
        notifications.show({
          title: "Xatolik",
          message: "Qaysidir ma'lumot xato kiritildi!",
          color: "red",
        });
      },
    }
  );

  function onSubmit(data: FormTypes) {
    console.log("data", data);
    mutate(data);
  }

  return {
    form,
    onSubmit,
    isLoading,
    isFetching,
  };
}