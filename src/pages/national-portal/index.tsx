import { Flex, List } from "@mantine/core";
import ModalComponent from "@/components/modal";
import AddUsers from "./components/addUsers";
import DeleteUsers from "./components/deleteUsers";
import useHook from "./useHook";
import styled from "./style.module.scss";
import { ISelectProp } from "@/types/select";
import { useNavigate } from "react-router-dom";
const list: ISelectProp[] = [
  {
    value: "provided",
    label: "Oziq-ovqat mahsulotlari mavjudligi",
  },
  {
    value: "available",
    label: "Oziq-ovqat mahsulotlariga erisha olish imkoniyati",
  },
  {
    value: "stability",
    label: "Barqarorlik",
  },
  {
    value: "utilization",
    label: "Oziq-ovqatdan foydalanish",
  },
  {
    value: "addition",
    label: "Qo’shimcha foydali statistika",
  },
];

export default function NationalPortal() {
  const navigate = useNavigate();

  const { close, opened, closeDelete, openedDelete } = useHook();
  return (
    <div>
      <Flex direction="column" gap="16px">
        <List className={styled.lists}>
          {list.map((item) => (
            <List.Item
              onClick={() => navigate(`${item.value}`)}
              key={item.value}
            >
              {item.label}
            </List.Item>
          ))}
        </List>
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
    </div>
  );
}