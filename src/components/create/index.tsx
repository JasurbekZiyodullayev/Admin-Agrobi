import IconPlus from "@/assets/plus";
import { ROUTER } from "@/constants/route";
import { Button, Flex, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

export default function CreatePages({
  router,
  text,
  children,
}: {
  router?: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <Flex justify="space-between" align="center">
      <Title order={router ? 4 : 3}>{text}</Title>
      <Flex direction="row" align="center" gap="8px">
        <NavLink to={router ? router : ROUTER.CREATE}>
          <Button leftSection={<IconPlus />}>Yaratish</Button>
        </NavLink>
        {children}
      </Flex>
    </Flex>
  );
}
