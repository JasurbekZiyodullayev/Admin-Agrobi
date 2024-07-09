import { Button } from "@mantine/core";
import styled from "./style.module.scss";
import TableComponent from "@/components/table";
import useHook from "./useHook";
import ModalComponent from "@/components/modal";
import AddUsers from "./components/addUsers";
import DeleteUsers from "./components/deleteUsers";
import TableData from "./components/tableData";

export default function Users() {
  const { form, close, open, opened, closeDelete, openDelete, openedDelete } =
    useHook();

  const { rows, thead } = TableData(openDelete);

  return (
    <>
      <div className={styled.container}>
        <div className={styled.title}>
          <h3>Foydalanuvchilar</h3>
          <Button onClick={open}>+ Foydalanuvchi qo’shish</Button>
        </div>
        <TableComponent thead={thead} rows={rows} />

        <ModalComponent opened={opened} close={close}>
          <AddUsers form={form} />
        </ModalComponent>

        <ModalComponent opened={openedDelete} close={closeDelete}>
          <DeleteUsers close={closeDelete} />
        </ModalComponent>
      </div>
    </>
  );
}
