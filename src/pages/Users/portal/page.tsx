import { getRole } from "@/utils/role";
import styled from "../style.module.scss";
import AddUsers from "./components/create-users";
import { Flex } from "@mantine/core";
import NotPremission from "@/components/not-permission";
import { useEffect, useState } from "react";
export default function PortalUserPage() {
  const role = getRole();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (role?.directions && role?.group === "stat-checker") {
      setOpen(role.directions.includes("PORTAL"));
    } else {
      setOpen(false);
    }
    if (role?.user_id === 1) {
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
