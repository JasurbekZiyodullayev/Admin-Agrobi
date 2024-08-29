import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { Accordion, Button } from "@mantine/core";
import styled from "./style.module.scss";

export default function AddUsers({ form }: any) {
  const groceries = [
    {
      value: "Oziq-ovqat mahsulotlari mavjudligi",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      value: "Oziq-ovqat mahsulotlariga erisha olish imkoniyati",
      description:
        "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
    },
    {
      value: "Barqarorlik",
      description:
        "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
    },
    {
      value: "Organizmda o'zlashtish",
      description:
        "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
    },
    {
      value: "Qo’shimcha foydali statistika",
      description:
        "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
    },
  ];

  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className={styled.formContainer}>
      <Accordion variant="contained" radius="md" defaultValue="Apples">
        {items}
      </Accordion>
      {/* <Input
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
      /> */}
      <Button className={styled.saveButton}>Saqlash</Button>
    </div>
  );
}
