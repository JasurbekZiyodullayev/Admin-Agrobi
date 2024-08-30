import { Button, Flex, SegmentedControl } from "@mantine/core";
import styled from "./style.module.scss";
import { useState } from "react";
import AvailabilityCreate from "../create/availability";
import useHook from "../create/useHook";

export default function AddUsers() {
  const [value, setValue] = useState("item1");
  const { form } = useHook();

  return (
    <div className={styled.formContainer}>
      <SegmentedControl
        w="auto"
        value={value}
        onChange={setValue}
        data={[
          { label: "Oziq-ovqat mahsulotlari mavjudligi", value: "item1" },
          {
            label: "Oziq-ovqat mahsulotlariga erisha olish imkoniyati",
            value: "item2",
          },
          { label: "Barqarorlik", value: "item3" },
          { label: "Organizmda o'zlashtish", value: "item4" },
          { label: "Qo’shimcha foydali statistika", value: "item5" },
        ]}
      />
      {value === "item1" ? (
        <Flex direction="column" gap="24px" py="24px">
          <AvailabilityCreate
            form={form}
            text="O'rtacha oziqlanish energiya ta'minoti yetarliligi"
          />
        </Flex>
      ) : (
        ""
      )}
      <Button className={styled.saveButton}>Saqlash</Button>
    </div>
  );
}
