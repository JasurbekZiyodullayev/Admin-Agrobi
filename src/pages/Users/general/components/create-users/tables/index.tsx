import IconCheck from "@/assets/check";
import IconUncheck from "@/assets/uncheck";
import EditDeleteButton from "@/components/editButton";
import TableComponent from "@/components/table";
import { endpoints, URL_KEYS } from "@/shared/endpoints";
import { deleteRequest } from "@/shared/modules/deleteAllRequest";
import { GetInfoApi } from "@/shared/modules/getAllRequest";
import { User } from "@/types/api/stat";
import { Flex, Table } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function UserTable() {
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
      <Table.Th>Yunalishlar</Table.Th>
      <Table.Th>Ruxsatlar</Table.Th>
      <Table.Th>Amallar</Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      {data
        ?.filter((el) => !el.group.includes("stat"))
        .map((item, index: number) => (
          <Table.Tr key={item.id}>
            <Table.Td>{index + 1}</Table.Td>
            <Table.Td>{item.first_name}</Table.Td>
            <Table.Td>{item.last_name}</Table.Td>
            <Table.Td>{item.username}</Table.Td>
            <Table.Td>{item.occupation}</Table.Td>
            <Table.Td>{item.phone_number}</Table.Td>
            <Table.Td>{item.user_type}</Table.Td>
            <Table.Td>
              <Flex direction="column" gap="4px">
                <Flex justify="space-between" align="center">
                  <p style={{ fontSize: "13px" }}>Statistika</p>{" "}
                  {item.directions.includes("STAT") ? (
                    <IconCheck />
                  ) : (
                    <IconUncheck />
                  )}
                </Flex>
                <Flex justify="space-between" align="center">
                  <p style={{ fontSize: "13px" }}>Milliy portal</p>{" "}
                  {item.directions.includes("PORTAL") ? (
                    <IconCheck />
                  ) : (
                    <IconUncheck />
                  )}
                </Flex>
                <Flex justify="space-between" align="center">
                  <p style={{ fontSize: "13px" }}>Bojxona</p>{" "}
                  {item.directions.includes("TRADE") ? (
                    <IconCheck />
                  ) : (
                    <IconUncheck />
                  )}
                </Flex>
              </Flex>
            </Table.Td>
            <Table.Td>
              {item.group.includes("stat")
                ? "To'ldiruvchi"
                : item.group.includes("stat-read")
                ? "Kuzatuvchi"
                : "Tekshiruvchi"}
            </Table.Td>
            <Table.Td>
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
