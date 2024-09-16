import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";
import { useState } from "react";

export default function FiveLineTable({
  text,
  form,
  onSubmit,
  statNum,
  addition,
  distance,
}: {
  distance?: number;
  addition: number;
  statNum: number;
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const [inc, setInc] = useState<number>(statNum);
  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th miw="150px">Nomi</Table.Th>
      {Array.from({ length: inc }, (_, i: number) => (
        <Table.Th miw="80px" key={i}>{`20${
          i + addition < 10 ? "0" + (i + addition) : i + addition
        }${
          distance
            ? `-${
                i + addition < 10 - distance
                  ? "0" + (i + addition + distance)
                  : i + addition + distance
              }`
            : ""
        }
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
        <Table.Td>Markaziy Osiyo</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`MO${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>2</Table.Td>
        <Table.Td>Qozog'iston</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`KZ${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>3</Table.Td>
        <Table.Td>Qirg'iziston</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`KR${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>4</Table.Td>
        <Table.Td>Tojikiston</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`TJ${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>5</Table.Td>
        <Table.Td>Turkmaniston</Table.Td>
        {Array.from({ length: inc }, (_, i: number) => (
          <Table.Td key={i}>
            <Input required name={`TU${i}`} control={form.control} />
          </Table.Td>
        ))}
      </Table.Tr>
      <Table.Tr>
        <Table.Td>6</Table.Td>
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
      <h4>{text}</h4>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} />
      </form>
    </Flex>
  );
}
