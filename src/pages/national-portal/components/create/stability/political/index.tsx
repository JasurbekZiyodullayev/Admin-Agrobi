import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Select, Table } from "@mantine/core";
import { useEffect, useState } from "react";

export default function PoliticalCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const data = [
    { value: "type1", label: "Markaziy Osiyo" },
    { value: "type2", label: "O'zbekiston" },
  ];
  const [value, setValue] = useState<string>("type1");
  const [inc, setInc] = useState<number>(19);
  useEffect(() => {
    setInc(value === "type1" ? 19 : 22);
  }, [value]);

  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th miw="150px">Nomi</Table.Th>
      {Array.from({ length: inc }, (_, i: number) => (
        <Table.Th miw="80px" key={i}>{`20${
          i < (value === "type1" ? 10 : 8)
            ? "0" + (value === "type1" ? i : i + 2)
            : value === "type1"
            ? i
            : i + 2
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
      {value === "type1" ? (
        <>
          {" "}
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
      ) : (
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
      )}
    </>
  );
  return (
    <Flex direction="column" gap="8px">
      <Flex justify="space-between" align="center" wrap="wrap" gap="20px">
        <h4>
          {text} ({value === "type1" ? "Markaziy Osiyo" : "O'zbekiston"})
        </h4>
        <Select
          name="type"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          onChange={setValue}
          value={value}
          defaultValue={"type1"}
          data={data}
        />
      </Flex>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} />
      </form>
    </Flex>
  );
}
