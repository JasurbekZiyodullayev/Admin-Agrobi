import { Flex } from "@mantine/core";
import CreatePages from "@/components/create";
import UserTable from "./tables";

export default function AddUsers() {
  return (
    <Flex direction="column" gap="24px" w="100%">
      <CreatePages text="" />
      <UserTable />
    </Flex>
  );
}
