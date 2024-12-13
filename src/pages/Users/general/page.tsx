// import { Flex } from "@mantine/core";
import { Flex } from "@mantine/core";
import styled from "../style.module.scss";
import AddUsers from "./components/create-users";
import { getRole } from "@/utils/role";
import NotPremission from "@/components/not-permission";
export default function GeneralUserPage() {
  const role = getRole();
  return (
    <>
      {role?.directions ? (
        <Flex justify="center" align="center" h="calc(100vh - 120px)">
          <NotPremission />
        </Flex>
      ) : (
        <div className={styled.container}>
          <AddUsers />
        </div>
      )}
    </>
  );
}
