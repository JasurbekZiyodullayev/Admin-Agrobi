import { Input } from "@/components/forms/input";
import TableComponent from "@/components/table";
import { Button, Flex, Table } from "@mantine/core";
import { useState, useEffect } from "react";

export default function AdditionalPopulationCreate({
  text,
  form,
  onSubmit,
}: {
  text?: string;
  form?: any;
  onSubmit?: any;
}) {
  const [incOut, setIncOut] = useState<number>(2); // Yillar soni
  const [monthYears, setMonthYears] = useState<string[]>([]); // Oy-yil kombinatsiyasi

  // Oy-yil kombinatsiyasini yaratish
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
    // 2021 yildan boshlab (startYear) yil soniga (incOut) qarab oy-yillarni yaratish
    const generatedMonthYears = generateMonthYear(21, incOut);
    setMonthYears(generatedMonthYears);
  }, [incOut]);

  // "+" tugmasi bosilganda yil va oyni qo'shish
  const handleAddMonth = () => {
    setMonthYears((prevMonthYears) => {
      const lastYearMonth = prevMonthYears[prevMonthYears.length - 1];
      const [lastYear, lastMonth] = lastYearMonth.split("M").map(Number);

      if (lastMonth === 12) {
        // Agar oy 12 bo'lsa, keyingi yilning 1-oyini qo'shish
        return [...prevMonthYears, `20${lastYear + 1}M1`];
      } else {
        // Aks holda, oyni oshirish
        return [...prevMonthYears, `20${lastYear}M${lastMonth + 1}`];
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
      <Table.Tr>
        <Table.Td>1</Table.Td>
        <Table.Td>O'zbekiston</Table.Td>
        {monthYears.map((_, i: number) => (
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
