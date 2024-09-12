import { Flex, Loader, Table } from "@mantine/core";

export default function TableComponent({
  rows,
  isFetching,
  thead,
  maxWidth,
  sticky = false,
}: {
  rows?: React.ReactNode;
  isFetching?: boolean;
  thead?: React.ReactNode;
  maxWidth?: boolean;
  sticky?: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      className="scroll-element"
    >
      <div
        className="table-container"
        style={{
          maxWidth: maxWidth ? "calc(100vw - 350px)" : "",
          position: "relative",
          overflowY: "auto",
          maxHeight: "500px",
          scrollbarWidth: "none",
        }}
      >
        <Table
          withColumnBorders
          borderColor="#EEF0FA"
          verticalSpacing="sm"
          horizontalSpacing="sm"
          styles={{
            table: {
              borderRadius: "0.5rem",
              minWidth: "600px",
            },
            thead: {
              backgroundColor: "var(--primary-color)",
              color: "var(--white)",
              position: sticky ? "sticky" : "static",
              top: sticky ? 0 : "auto",
              zIndex: sticky ? 5 : "auto",
            },
            th: {
              fontSize: "0.875rem",
              fontWeight: "600",
              backgroundColor: "var(--primary-color)",
            },
            tbody: {
              backgroundColor: "var(--paper-bg)",
            },
            td: {
              color: "var(--grey-600)",
              fontSize: "0.875rem",
              fontWeight: 500,
              borderBottom: "1px solid var(--tb-color)",
            },
          }}
        >
          <Table.Thead>{thead}</Table.Thead>

          <Table.Tbody>{rows}</Table.Tbody>

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
