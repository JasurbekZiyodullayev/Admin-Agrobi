import CreatePages from "@/components/create";
import { Flex } from "@mantine/core";
import UserTable from "./create-users/tables";

export default function UserOfMilliyPortal() {
  return (
    <Flex direction="column" gap="24px" w="100%">
      <CreatePages text="" />
      <UserTable />
    </Flex>
  );
}
