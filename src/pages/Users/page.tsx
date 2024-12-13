import styled from "./style.module.scss";
import AddUsers from "./components/create-users";
import { getRole } from "@/utils/role";
import { useEffect, useState } from "react";
import { Flex } from "@mantine/core";
import NotPremission from "@/components/not-permission";

export default function Users() {
  const role = getRole();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (role?.directions) {
      setOpen(role.directions.includes("STAT"));
    } else {
      setOpen(true);
    }
  }, [role]);

  return (
    <>
      {open ? (
        <div className={styled.container}>
          <AddUsers />
        </div>
      ) : (
        <Flex justify="center" align="center" h="calc(100vh - 120px)">
          <NotPremission />
        </Flex>
      )}
    </>
  );
}
