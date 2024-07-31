import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Button } from "@mantine/core";
import styled from "./style.module.scss";

export default function AddUsers({ form, onSubmit, isLoading }: any) {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={styled.formContainer}
    >
      <Input
        withAsterisk
        name="Test1"
        control={form.control}
        label="F.I.Sh"
        placeholder="F.I.Sh"
      />
      <Input
        withAsterisk
        name="Test2"
        control={form.control}
        label="Tashkilot nomi"
        placeholder="Tashkilot nomi"
      />
      <Input
        withAsterisk
        name="Test3"
        control={form.control}
        label="Lavozimi"
        placeholder="Lavozimi"
      />
      <Input
        withAsterisk
        name="Test4"
        control={form.control}
        label="Login"
        placeholder="Login"
      />
      <Input
        withAsterisk
        name="Test5"
        control={form.control}
        label="Parol"
        placeholder="Parol"
      />
      <Select
        withAsterisk
        clearable
        name="Test6"
        control={form.control}
        label="Rollar"
        data={[
          {
            label: "Admin",
            value: "Admin",
          },
          {
            label: "Owner",
            value: "Owner",
          },
        ]}
        placeholder="Rollar"
      />
      <Button loading={isLoading} type="submit" className={styled.saveButton}>
        Saqlash
      </Button>
    </form>
  );
}
