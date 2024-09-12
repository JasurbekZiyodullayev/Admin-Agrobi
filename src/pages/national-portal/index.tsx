import CustomContainer from "@/components/customContainer";
import CustomTitle from "@/components/customTitle";
import { Flex, SegmentedControl } from "@mantine/core";
import TableData from "./components/tableData";
import ModalComponent from "@/components/modal";
import AddUsers from "./components/addUsers";
import DeleteUsers from "./components/deleteUsers";
import useHook from "./useHook";
import { useState } from "react";
import { useViewportSize } from "@mantine/hooks";

export default function NationalPortal() {
  const [value, setValue] = useState("item1");

  const { width } = useViewportSize();

  const { close, open, opened, closeDelete, openDelete, openedDelete } =
    useHook();
  return (
    <CustomContainer>
      <Flex direction="column" gap="16px">
        <CustomTitle open={open} title="+ Qo'shish" />
        <SegmentedControl
          w="auto"
          orientation={width < 1400 ? "vertical" : "horizontal"}
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
        <TableData openDelete={openDelete} />
        <ModalComponent
          opened={opened}
          close={close}
          modalTitle="Qo'shish"
          size="80%"
        >
          <AddUsers />
        </ModalComponent>

        <ModalComponent
          opened={openedDelete}
          close={closeDelete}
          modalTitle="O'chirish"
        >
          <DeleteUsers close={closeDelete} />
        </ModalComponent>
      </Flex>
    </CustomContainer>
  );
}
