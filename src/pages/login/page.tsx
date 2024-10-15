import { Input } from "@/components/forms/input";
import style from "./style.module.scss";
import { useLogin } from "./useLogin";
import { InputPassword } from "@/components/forms/input-password";
import { Button } from "@mantine/core";
import IconDigital from "@/assets/digital";
import IconLogin from "@/assets/login";

const Login = () => {
  const { form, onSubmit } = useLogin();

  return (
    <div className={style.wrapper}>
      <div className={style.left}>{/* <AuthShape /> */}</div>
      <div className={style.right}>
        <div className={style.loginIcon}>
          <IconLogin />
          <span>AgroBi</span>
        </div>
        <div className={style.form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Input
              control={form.control}
              name="username"
              label="Login"
              placeholder="Jasurbek Ziyodullayev"
              rules={{
                required: {
                  value: true,
                  message: "Maydon to'ldirilishi shart",
                },
                minLength: {
                  value: 3,
                  message:
                    "Kiritilgan so'z kamida 3 ta belgidan iborat bo'lishi kerak",
                },
              }}
            />
            <InputPassword
              control={form.control}
              name="password"
              label="Password"
              placeholder="●●●●●●●●"
              rules={{
                required: {
                  value: true,
                  message: "Maydon to'ldirilishi shart",
                },
                minLength: {
                  value: 3,
                  message:
                    "Kiritilgan so'z kamida 3 ta belgidan iborat bo'lishi kerak",
                },
              }}
            />
            <Button
              loading={false}
              type="submit"
              color="green"
              fullWidth
              h={38}
              fw={500}
            >
              Kirish
            </Button>
          </form>
        </div>
        <IconDigital />
      </div>
    </div>
  );
};

export default Login;
