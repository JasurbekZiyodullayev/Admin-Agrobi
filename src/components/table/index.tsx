import { Flex, Loader, Table } from "@mantine/core";

export default function TableComponent({
  rows,
  isFetching,
  thead,
  maxWidth,
}: {
  rows?: React.ReactNode;
  isFetching?: boolean;
  thead?: React.ReactNode;
  maxWidth?: boolean;
}) {
  // const tableRef = useRef(null);
  // useEffect(() => {
  //   show && setExcel(tableRef.current);
  // }, [tableRef]);

  return (
    <div style={{ width: "100%" }} className="scroll-element">
      <div
        className="table-inner"
        style={{ maxWidth: maxWidth ? "calc(100vw - 350px)" : "" }}
      >
        <Table
          withColumnBorders
          borderColor="#EEF0FA"
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
