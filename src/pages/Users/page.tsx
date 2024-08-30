import useHook from "./useHook";
import ModalComponent from "@/components/modal";
import AddUsers from "./components/addUsers";
import DeleteUsers from "./components/deleteUsers";
import CustomTitle from "@/components/customTitle";
import CustomContainer from "@/components/customContainer";
import { Flex } from "@mantine/core";
import TableData from "./components/tableData";

export default function Users() {
  const {
    form,
    close,
    open,
    opened,
    closeDelete,
    openDelete,
    openedDelete,
    onSubmit,
  } = useHook();

  return (
    <>
      <CustomContainer>
        <Flex direction="column" gap="16px">
          <CustomTitle open={open} title={"+ Foydalanuvchi qo’shish"} />
          <TableData openDelete={openDelete} />
          <ModalComponent
            opened={opened}
            close={close}
            modalTitle="Foydalanuvchi qo'shish"
          >
            <AddUsers form={form} onSubmit={onSubmit} />
          </ModalComponent>

          <ModalComponent opened={openedDelete} close={closeDelete}>
            <DeleteUsers close={closeDelete} />
          </ModalComponent>
        </Flex>
      </CustomContainer>
    </>
  );
}
