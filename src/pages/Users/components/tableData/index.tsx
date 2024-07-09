import { Table } from "@mantine/core";
import EditIcon from "../../../../assets/editIcon";
import TrashIcon from "../../../../assets/trashIcon";

export default function TableData({ openDelete }: any) {
  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th>Tashkilot nomi</Table.Th>
      <Table.Th>Tashkilot nomi</Table.Th>
      <Table.Th>Lavozim</Table.Th>
      <Table.Th>Login</Table.Th>
      <Table.Th>Parol</Table.Th>
      <Table.Th>Amallar</Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Th>1</Table.Th>
        <Table.Th>Jumayev Otabek Tolibovich</Table.Th>
        <Table.Th>Oziq ovqat xavfsizligi bo’limi</Table.Th>
        <Table.Th>Vazir o’rin bosari Raqamlashtirishbo’yicha</Table.Th>
        <Table.Th>nazarov_87</Table.Th>
        <Table.Th>02032008</Table.Th>
        <Table.Th style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <EditIcon />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <TrashIcon />
          </button>
        </Table.Th>
      </Table.Tr>
      <Table.Tr>
        <Table.Th>1</Table.Th>
        <Table.Th>Jumayev Otabek Tolibovich</Table.Th>
        <Table.Th>Oziq ovqat xavfsizligi bo’limi</Table.Th>
        <Table.Th>Vazir o’rin bosari Raqamlashtirishbo’yicha</Table.Th>
        <Table.Th>nazarov_87</Table.Th>
        <Table.Th>02032008</Table.Th>
        <Table.Th style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <EditIcon />
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={openDelete}
          >
            <TrashIcon />
          </button>
        </Table.Th>
      </Table.Tr>
    </>
  );
  return { thead, rows };
}
