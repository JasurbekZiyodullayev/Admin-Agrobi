import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";
import { useState, useEffect } from "react";
import { dataLabels } from "./const";

export default function AdditionalProductCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const [incOut] = useState<number>(2);
  const [monthYears, setMonthYears] = useState<string[]>([]);

  const generateMonthYear = (startYear: number, yearCount: number) => {
    const result: string[] = [];

    for (let year = startYear; year < startYear + yearCount; year++) {
      for (let month = 1; month <= 12; month++) {
        result.push(`20${year}M${month}`);
      }
    }

    return result;
  };

  useEffect(() => {
    const generatedMonthYears = generateMonthYear(21, incOut);
    setMonthYears(generatedMonthYears);
  }, [incOut]);

  const handleAddMonth = () => {
    setMonthYears((prevMonthYears) => {
      const lastYearMonth = prevMonthYears[prevMonthYears.length - 1];
      const [lastYear, lastMonth] = lastYearMonth.split("M").map(Number);

      if (lastMonth === 12) {
        return [...prevMonthYears, `${lastYear + 1}M1`];
      } else {
        return [...prevMonthYears, `${lastYear}M${lastMonth + 1}`];
      }
    });
  };

  const handleRemoveMonth = () => {
    setMonthYears((prevMonthYears) => prevMonthYears.slice(0, -1));
  };

  const thead = (
    <Table.Tr>
      <Table.Th>T/r</Table.Th>
      <Table.Th miw="150px">Nomi</Table.Th>

      {monthYears.map((monthYear, index) => (
        <Table.Th miw="80px" key={index}>
          {monthYear}
        </Table.Th>
      ))}

      <Table.Th miw="80px">
        <Flex align="center" gap="6px">
          <Button onClick={handleAddMonth} w="100%" color="yellow">
            +
          </Button>
          <Button onClick={handleRemoveMonth} w="100%" color="red">
            -
          </Button>
        </Flex>
      </Table.Th>
    </Table.Tr>
  );

  const rows = (
    <>
      {dataLabels.map((item, index: number) => (
        <Table.Tr key={index}>
          <Table.Td
            style={{
              position: "sticky",
              left: 0,
              zIndex: 3,
              background: "var(--paper-bg)",
            }}
          >
            {index + 1}
          </Table.Td>
          <Table.Td
            style={{
              position: "sticky",
              left: "42px",
              zIndex: 3,
              background: "var(--paper-bg)",
            }}
          >
            {item.label}
          </Table.Td>
          {monthYears.map((_, i: number) => (
            <Table.Td key={i}>
              <Input
                rules={{
                  required: {
                    value: true,
                    message: "Maydon to'ldirilishi shart",
                  },
                }}
                name={`${item.value}_${i}`}
                control={form.control}
              />
            </Table.Td>
          ))}
          <Table.Td>
            {dataLabels.length === index + 1 && (
              <Button type="submit">Yuborish</Button>
            )}
          </Table.Td>
        </Table.Tr>
      ))}
    </>
  );

  return (
    <Flex direction="column" gap="8px" style={{ overflow: "hidden" }}>
      <h4>{text}</h4>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TableComponent rows={rows} thead={thead} sticky={true} />
      </form>
    </Flex>
  );
}
