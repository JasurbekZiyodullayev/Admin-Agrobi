import { endpoints, URL_KEYS } from "@/shared/endpoints";
import { GetInfoApi } from "@/shared/modules/getAllRequest";
import { PostInfoApi } from "@/shared/modules/postAllRequiest";
import { putRequest } from "@/shared/modules/putAllRequest";
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
  user_region: number;
  tables_list: string;
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
        form.reset({ ...data, user_region: String(data.user_region) });
      }
    },
  });

  const { data } = useQuery(
    [URL_KEYS.GET_REGION],
    () => GetInfoApi(`/tool/region/`),
    {
      select: (res) => {
        const options = res?.data.map((item: any) => {
          return {
            value: String(item?.id),
            label: item?.name_uz,
          };
        });
        return options;
      },
    }
  );

  const { isLoading } = useMutation(
    (data: FormTypes) =>
      id
        ? putRequest(endpoints.statUsers + `${id}/`, data)
        : PostInfoApi(endpoints.statUsers, data),
    {
      onSuccess: async () => {
        await navigate("/users/statistics");
        id
          ? await notifications.show({
              message: "Foydalanuvchi qo'shildi!",
              autoClose: 3000,
            })
          : await notifications.show({
              message: "Foydalanuvchi ma'lumotlari tahrirlandi!",
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
    console.log(data);
  }

  return {
    form,
    onSubmit,
    isLoading,
    isFetching,
    data,
  };
}
