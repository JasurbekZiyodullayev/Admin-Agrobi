import { Divider, Flex, SegmentedControl } from "@mantine/core";
import styled from "./style.module.scss";
import { useState } from "react";
import AvailabilityCreate from "../create/availability";
import useHook from "../create/useHook";
import AccessCreate from "../create/access";
import ProteinCreate from "../create/protein";
import AnimalCreate from "../create/animal";

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

          <Divider my="md" />
          <AccessCreate
            text="Don, ildiz va ildiz mevalaridan olingan oziqlanish energiya ta'minoti ulushi"
            form={form}
          />
          <Divider my="md" />
          <ProteinCreate text="O'rtacha oqsil ta'minoti" form={form} />
          <Divider my="md" />
          <AnimalCreate
            text="Hayvonlardan olingan oqsilning o'rtacha ta'minoti"
            form={form}
          />
        </Flex>
      ) : (
        ""
      )}
    </div>
  );
}
