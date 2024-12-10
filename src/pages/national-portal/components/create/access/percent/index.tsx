import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";

export default function PercentCreate({
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
      <Table.Th miw="150px">Sement-beton</Table.Th>
      <Table.Th miw="150px">Asfalt-beton</Table.Th>
      <Table.Th miw="150px">Qora qoplama</Table.Th>
      <Table.Th miw="150px">Shag'al qoplama</Table.Th>
      <Table.Th miw="150px">Tuproq yo'l</Table.Th>
      <Table.Th miw="150px"></Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Td>
          <Input required name={`Sement-beton`} control={form.control} />
        </Table.Td>
        <Table.Td>
          <Input required name={`Asfalt-beton`} control={form.control} />
        </Table.Td>
        <Table.Td>
          <Input required name={`Qora qoplama`} control={form.control} />
        </Table.Td>
        <Table.Td>
          <Input required name={`Shag'al qoplama`} control={form.control} />
        </Table.Td>
        <Table.Td>
          <Input required name={`Tuproq yo'`} control={form.control} />
        </Table.Td>
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
