import CustomContainer from "@/components/customContainer";
import CustomTitle from "@/components/customTitle";
import { Flex } from "@mantine/core";
import TableData from "./components/tableData";
import ModalComponent from "@/components/modal";

export default function NationalPortal() {
  return (
    <CustomContainer>
      <Flex direction="column" gap="16px">
        <CustomTitle title="+ Qo'shish" />
        <TableData />
        <ModalComponent opened={opened} close={close}>
            <AddUsers form={form} />
          </ModalComponent>

          <ModalComponent opened={openedDelete} close={closeDelete}>
            <DeleteUsers close={closeDelete} />
          </ModalComponent>
      </Flex>
    </CustomContainer>
  );
}
