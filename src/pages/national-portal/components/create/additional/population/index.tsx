import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";

const data = [
  "0-2",
  "3-5",
  "6-7",
  "8-15",
  "16-17",
  "18-19",
  "20-24",
  "25-29",
  "30-34",
  "35-39",
  "40-49",
  "50-59",
  "60-64",
  "65+",
];

export default function AdditionalPopulationCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const thead = (
    <Table.Tr>
      <Table.Th miw="150px">Yil</Table.Th>
      <Table.Th miw="150px">Gender</Table.Th>

      {data.map((item, index: number) => (
        <Table.Th key={index} miw="150px">
          {item}
        </Table.Th>
      ))}
      <Table.Td></Table.Td>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Td>
          <Input required name={`UZ`} control={form.control} />
        </Table.Td>
        <Table.Td>Erkak</Table.Td>
        {Array.from({ length: data.length }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`UZ${i}`} control={form.control} />
          </Table.Td>
        ))}
        <Table.Td></Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td></Table.Td>
        <Table.Td>Ayol</Table.Td>
        {Array.from({ length: data.length }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`UZ${i}`} control={form.control} />
          </Table.Td>
        ))}
        <Table.Td>
          <Button type="submit">Yuborish</Button>
        </Table.Td>
      </Table.Tr>
    </>
  );
  return (
    <Flex direction="column" gap="8px">
      <h4>{text}</h4>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} />
      </form>
    </Flex>
  );
}
