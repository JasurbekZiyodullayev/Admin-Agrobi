import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";
import { useState } from "react";

export default function FoodCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const [inc, setInc] = useState<number>(21);
  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th miw="200px">Nomi</Table.Th>
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
        <Table.Td>Tovarlarning umumiy eksporti (ming $)</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`UZ${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>2</Table.Td>
        <Table.Td>Jami oziq-ovqat importi (ichimliklar, ming $)</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`UZ${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>3</Table.Td>
        <Table.Td>
          Tovar eksportining umumiy hajmida oziq-ovqat importining qiymati (%)
        </Table.Td>
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
      <h4>{text}</h4>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} />
      </form>
    </Flex>
  );
}
