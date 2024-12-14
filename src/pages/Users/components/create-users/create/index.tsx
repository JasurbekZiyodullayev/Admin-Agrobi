import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Box, Grid, LoadingOverlay } from "@mantine/core";
import styled from "./style.module.scss";
import useHook from "./useHook";
import AddButton from "@/components/addButton";
import { PhoneInput } from "@/components/forms/input-phone/input";
import { useEffect, useState } from "react";

export default function CreateUsersStat() {
  const { form, onSubmit, data, listTable, isFetching, isLoading } = useHook();

  const [isChecker, setIsChecker] = useState(false);
  const [isQxb, setIsQxb] = useState(false);
  useEffect(() => {
    if (form.watch("group2") === "stat-checker") {
      setIsChecker(true);
    } else {
      setIsChecker(false);
    }
  }, [form.watch("group2")]);
  useEffect(() => {
    if (form.watch("tables_list") === "QXB") {
      setIsQxb(true);
    } else {
      setIsQxb(false);
    }
  }, [form.watch("tables_list")]);

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
                  name="group2"
                  control={form.control}
                  label="Ruxsatlar"
                  data={[
                    {
                      label: "Tekshiruvchi",
                      value: "stat-checker",
                    },
                    {
                      label: "To'ldiruvchi",
                      value: "stat",
                    },
                  ]}
                  placeholder="Admin"
                />
              </Grid.Col>
              {!isChecker && (
                <>
                  <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                    <Select
                      rules={{
                        required: {
                          value: true,
                          message: "Maydon to'ldirilishi shart",
                        },
                      }}
                      name="tables_list"
                      control={form.control}
                      label="Bo'limni tanlang"
                      data={listTable}
                      placeholder="Bo'limni tanlang"
                    />
                  </Grid.Col>
                  {isQxb && (
                    <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                      <Select
                        rules={{
                          required: {
                            value: true,
                            message: "Maydon to'ldirilishi shart",
                          },
                        }}
                        name="user_region"
                        control={form.control}
                        label="Hududni tanlang"
                        data={data}
                        placeholder="Hudud"
                      />
                    </Grid.Col>
                  )}
                </>
              )}
            </Grid>
            <AddButton isLoading={false} />
          </div>
        </div>
      </form>
    </Box>
  );
}
