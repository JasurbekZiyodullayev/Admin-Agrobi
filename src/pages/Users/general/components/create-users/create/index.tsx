import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Box, Grid, LoadingOverlay } from "@mantine/core";
import styled from "./style.module.scss";
import useHook from "./useHook";
import AddButton from "@/components/addButton";
import { PhoneInput } from "@/components/forms/input-phone/input";
import { ISelectProp } from "@/types/select";
import { MultiSelectComponent } from "@/components/forms/multi-select";

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
const group: ISelectProp[] = [
  {
    value: "stat-checker",
    label: "Tekshiruvchi",
  },
  {
    value: "stat-read",
    label: "Kuzatuvchi",
  },
];
const direction: ISelectProp[] = [
  {
    value: "TRADE",
    label: "Bojxona",
  },
  {
    value: "STAT",
    label: "Statistika",
  },
  {
    value: "PORTAL",
    label: "Milliy portal",
  },
];

export default function CreateUsersGeneral() {
  const { form, onSubmit, isLoading, isFetching } = useHook();

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={isLoading || isFetching}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
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
                  name="user_type"
                  control={form.control}
                  label="Rollar"
                  data={roles}
                  placeholder="Tanlang"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <MultiSelectComponent
                  rules={{
                    required: {
                      value: true,
                      message: "Maydon to'ldirilishi shart",
                    },
                  }}
                  name="directions"
                  control={form.control}
                  label="Yunalishlar"
                  data={direction}
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
                  data={group}
                />
              </Grid.Col>
            </Grid>
            <AddButton isLoading={false} />
          </div>
        </div>
      </form>
    </Box>
  );
}
