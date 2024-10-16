import { notifications } from "@mantine/notifications";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { endpoints } from "@/shared/endpoints";
import { TOKEN } from "@/constants/config.api";
import { PostInfoApi } from "@/shared/modules/postAllRequiest";

export type FormTypes = {
  username: string;
  password: string;
};

export const useLogin = () => {
  const form = useForm<FormTypes>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    (data: any) => PostInfoApi(endpoints.login, data),
    {
      onSuccess: async (res: any) => {
        const tokendata: any = await jwtDecode(res.data.access);
        const tokens = await JSON.stringify({
          access: res.data.access,
          refresh: res.data.refresh,
          username: tokendata.username,
          fullname: `${tokendata?.first_name} ${tokendata?.last_name}`,
        });
        await localStorage.setItem(TOKEN, tokens);
        navigate("/admin/users");
        notifications.show({
          title: "Tizimga xush kelibsiz!",
          message: `Tabriklaymiz, ${tokendata.username} tizimga muvaffaqqiyatli kirdingiz!`,
        });
      },
      onError: (error: any) => {
        console.log("error", error);
        notifications.show({
          title: "Xatolik",
          message: "Ushbu login yoki parol topilmadi, qayta tekshirib ko'ring",
          color: "red",
        });
      },
    }
  );

  function onSubmit(data: any) {
    mutate(data);
  }
  return { form, isLoading, onSubmit };
};
