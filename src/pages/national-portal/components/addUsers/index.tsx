import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Button } from "@mantine/core";
import styled from "./style.module.scss";

export default function AddUsers({ form }: any) {
  return (
    <div className={styled.formContainer}>
      <Input
        required
        name="Test1"
        control={form.control}
        label="F.I.Sh"
        placeholder="F.I.Sh"
      />
      <Input
        required
        name="Test2"
        control={form.control}
        label="Tashkilot nomi"
        placeholder="Tashkilot nomi"
      />
      <Input
        required
        name="Test3"
        control={form.control}
        label="Lavozimi"
        placeholder="F.I.Sh"
      />
      <Input
        required
        name="Test4"
        control={form.control}
        label="Login"
        placeholder="Login"
      />
      <Input
        required
        name="Test5"
        control={form.control}
        label="Parol"
        placeholder="Parol"
      />
      <Select
        required
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
        placeholder="Admin"
      />
      <Button className={styled.saveButton}>Saqlash</Button>
    </div>
  );
}
