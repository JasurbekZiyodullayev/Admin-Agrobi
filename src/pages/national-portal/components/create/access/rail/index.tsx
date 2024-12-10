import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";
import { useState } from "react";

export default function RailCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const [inc, setInc] = useState<number>(23);
  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th miw="150px">Nomi</Table.Th>
      {Array.from({ length: inc }, (_, i: number) => (
        <Table.Th miw="80px" key={i}>{`20${i < 10 ? "0" + i : i}
        `}</Table.Th>
      ))}
      <Table.Th miw="80px">
        <Flex align="center" gap="6px">
          <Button onClick={() => setInc(inc + 1)} w="100%" color="yellow">
            +
          </Button>
          <Button onClick={() => setInc(inc - 1)} w="100%" color="red">
            -
          </Button>
        </Flex>
      </Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      <Table.Tr>
        <Table.Td>1</Table.Td>
        <Table.Td>O'zbekiston</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
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
      <Flex justify="space-between" align="center" wrap="wrap" gap="20px">
        <h4>{text}</h4>
        <Select
          control={form.control}
          name="type"
          defaultValue={"type1"}
          data={[
            { value: "type1", label: "zichlik" },
            { value: "type2", label: "uzunlik" },
          ]}
        />
      </Flex>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} />
      </form>
    </Flex>
  );
}
