import EditDeleteButton from "@/components/editButton";
import TableComponent from "@/components/table";
import { endpoints, URL_KEYS } from "@/shared/endpoints";
import { deleteRequest } from "@/shared/modules/deleteAllRequest";
import { GetInfoApi } from "@/shared/modules/getAllRequest";
import { User } from "@/types/api/stat";
import { Table } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import useHook from "../create/useHook";

export default function UserTable() {
  const { data: info, listTable } = useHook();

  const { data, refetch } = useQuery(
    [URL_KEYS.GET_STAT_USERS],
    () => GetInfoApi(endpoints.statUsers),
    {
      select: (res: { data: User[] }) => res?.data,
    }
  );
  const { mutate, isLoading: deleteLoading } = useMutation(
    (id: string) => deleteRequest(`/auth/profiles/${id}/`),
    {
      onSuccess: async () => {
        refetch();
        notifications.show({
          message: "O'chirildi",
        });
      },
    }
  );

  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th>Ismi</Table.Th>
      <Table.Th>Familiyasi</Table.Th>
      <Table.Th>Foydalanuvchi nomi</Table.Th>
      <Table.Th>Lavozimi</Table.Th>
      <Table.Th>Telefon raqami</Table.Th>
      <Table.Th>Roli</Table.Th>
      <Table.Th>Hudud</Table.Th>
      <Table.Th>Bo'lim</Table.Th>
      <Table.Th>Amallar</Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      {data?.map((item, index: number) => (
        <Table.Tr key={item.id}>
          <Table.Td>{index + 1}</Table.Td>
          <Table.Td>{item.first_name}</Table.Td>
          <Table.Td>{item.last_name}</Table.Td>
          <Table.Td>{item.username}</Table.Td>
          <Table.Td>{item.occupation}</Table.Td>
          <Table.Td>{item.phone_number}</Table.Td>
          <Table.Td>
            {item.group === "stat" ? "To'ldiruvchi" : "Tekshiruvchi"}
          </Table.Td>
          <Table.Td>
            {info?.find((inf: any) => inf.value == item.user_region)?.label ||
              "-"}
          </Table.Td>
          <Table.Td>
            {listTable?.find((inf: any) => inf.value === item.tables_list)
              ?.label || "-"}
          </Table.Td>
          <Table.Td style={{ display: "flex", justifyContent: "space-around" }}>
            <EditDeleteButton
              id={item.id}
              isloading={deleteLoading}
              mutate={mutate}
            />
          </Table.Td>
        </Table.Tr>
      ))}
    </>
  );
  return <TableComponent thead={thead} rows={rows} />;
}
