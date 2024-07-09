import { Flex, Loader, Table } from "@mantine/core";
import { useEffect, useRef } from "react";

export default function TableComponent({
  rows,
  isFetching,
  thead,
  setExcel,
  show,
  maxWidth,
}: any) {
  const tableRef = useRef(null);
  useEffect(() => {
    show && setExcel(tableRef.current);
  }, [tableRef]);

  return (
    <div style={{ width: "100%" }} className="scroll-element">
      <div
        className="table-inner"
        style={{ maxWidth: maxWidth ? "calc(100vw - 350px)" : "" }}
      >
        <Table
          ref={tableRef}
          withColumnBorders
          borderColor="#EEF0FA"
          // borderColor={"var(--tb-color)"}
          verticalSpacing="sm"
          horizontalSpacing="sm"
          styles={{
            table: {
              borderRadius: "0.5rem",
            },
            thead: {
              backgroundColor: "var(--primary-color)",
              color: "var(--white)",
            },
            th: {
              fontSize: "0.875rem",
              fontWeight: "600",
            },
            tbody: { backgroundColor: "transparent" },
            td: {
              color: "var(--grey-600)",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderBottom: "1px solid var(--tb-color)",
            },
          }}
        >
          <Table.Thead>{thead}</Table.Thead>
          <Table.Tbody>{!isFetching && rows}</Table.Tbody>

          {isFetching && (
            <Table.Caption>
              <Flex align={"center"} justify={"center"} gap={16} p={16}>
                Yuklanmoqda
                <Loader size={16} color="var(--grey-600)" type="dots" />
              </Flex>
            </Table.Caption>
          )}
        </Table>
      </div>
    </div>
  );
}
