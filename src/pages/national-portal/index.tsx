import CustomContainer from "@/components/customContainer";
import CustomTitle from "@/components/customTitle";
import { Flex } from "@mantine/core";
import TableData from "./components/tableData";
import ModalComponent from "@/components/modal";
import AddUsers from "./components/addUsers";
import DeleteUsers from "./components/deleteUsers";
import useHook from "./useHook";

export default function NationalPortal() {
  const { form, close, open, opened, closeDelete, openDelete, openedDelete } =
    useHook();
  return (
    <CustomContainer>
      <Flex direction="column" gap="16px">
        <CustomTitle open={open} title="+ Qo'shish" />
        <TableData openDelete={openDelete} />
        <ModalComponent opened={opened} close={close} modalTitle="Qo'shish">
          <AddUsers form={form} />
        </ModalComponent>

        <ModalComponent opened={openedDelete} close={closeDelete}>
          <DeleteUsers close={closeDelete} />
        </ModalComponent>
      </Flex>
    </CustomContainer>
  );
}
