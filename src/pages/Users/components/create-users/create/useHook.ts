import { endpoints, URL_KEYS } from "@/shared/endpoints";
import { GetInfoApi } from "@/shared/modules/getAllRequest";
import { PostInfoApi } from "@/shared/modules/postAllRequiest";
import { putRequest } from "@/shared/modules/putAllRequest";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const listTable = [
  {
    value: "VCHR",
    label: "VCHR shakli",
  },
  {
    value: "IJS",
    label: "IJS shakli",
  },
  {
    value: "O'KH",
    label: "O'KH shakli",
  },
  {
    value: "QXXK",
    label: "QXXK shakli",
  },
  {
    value: "DILI",
    label: "DILI shakli",
  },
  {
    value: "NSM",
    label: "NSM shakli",
  },
  {
    value: "URM",
    label: "URM shakli",
  },
  {
    value: "TTRS",
    label: "TTRS shakli",
  },
  {
    value: "QXTEX",
    label: "QXTEX shakli",
  },
  {
    value: "QXB",
    label: "QXB shakli",
  },
  {
    value: "OTITI_one",
    label: "OTITI shakli 1 chi",
  },
  {
    value: "OTITI_two",
    label: "OTITI shakli 2 chi",
  },
  {
    value: "OTITI_three",
    label: "OTITI shakli 3 chi",
  },
  {
    value: "OTITI_four",
    label: "OTITI shakli 4 chi",
  },
  {
    value: "OTITI_five",
    label: "OTITI shakli 5 chi",
  },
];
type FormTypes = {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  occupation: string;
  phone_number: string;
  group2?: string;
  group?: string[];
  user_region: number | null;
  tables_list: string;
  directions: string[];
  user_type: string;
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
        form.reset({
          ...data,
          user_region: String(data.user_region),
          group2: data.group[0],
        });
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

  const { mutate, isLoading } = useMutation(
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
        notifications.show({
          title: "Xatolik",
          message: `${error?.response?.data?.detail || error?.status}`,
          color: "red",
        });
      },
    }
  );

  function onSubmit(data: FormTypes) {
    const payload: FormTypes = {
      ...data,
      user_region: Number(data.user_region) || null,
      group: [data.group2 || "stat"],
      directions: ["STAT"],
      user_type: data.group2 === "stat" ? "ADMIN" : "SUPERADMIN",
    };
    delete payload.group2;
    mutate(payload);
  }

  return {
    form,
    onSubmit,
    isLoading,
    isFetching,
    data,
    listTable,
  };
}
