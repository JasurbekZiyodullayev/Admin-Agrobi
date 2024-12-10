import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Grid } from "@mantine/core";
import styled from "./style.module.scss";
import useHook from "./useHook";
import AddButton from "@/components/addButton";
import { PhoneInput } from "@/components/forms/input-phone/input";
import { ISelectProp } from "@/types/select";

const roles: ISelectProp[] = [
  {
    value: "SUPERADMIN",
    label: "Superadmin",
  },
  {
    value: "ADMIN",
    label: "Admin",
  },
];
const premitions: ISelectProp[] = [
  {
    value: "GTK",
    label: "Bojxona",
  },
  {
    value: "STATISTIC",
    label: "Statistika",
  },
  {
    value: "PORTAL",
    label: "Milliy portal",
  },
];

export default function CreateUsersPortal() {
  const { form, onSubmit } = useHook();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className={styled.container}>
        <div className={styled.formContainer}>
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="first_name"
                control={form.control}
                label="Ismi"
                placeholder="Ismi"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="last_name"
                control={form.control}
                label="Familiyasi"
                placeholder="Familiyasi"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="username"
                control={form.control}
                label="Foydalanuvchi nomi"
                placeholder="Foydalanuvchi nomi"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="password"
                control={form.control}
                label="Parol"
                placeholder="Parol"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="occupation"
                control={form.control}
                label="Lavozimi"
                placeholder="Lavozimi"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <PhoneInput
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="phone_number"
                control={form.control}
                label="Telefon raqami"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Select
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="group"
                control={form.control}
                label="Rollar"
                data={roles}
                placeholder="Tanlang"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Select
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name="group2"
                control={form.control}
                label="Ruxsatlar"
                data={premitions}
                placeholder="Tanlang"
              />
            </Grid.Col>
          </Grid>
          <AddButton isLoading={false} />
        </div>
      </div>
    </form>
  );
}
