import CreatePages from "@/components/create";
import Table1 from "./table";
import { Flex } from "@mantine/core";

export default function TableOne() {
  return (
    <Flex direction="column" gap="24px" w="100%">
      <CreatePages text="" />
      <Table1 />
    </Flex>
  );
}
