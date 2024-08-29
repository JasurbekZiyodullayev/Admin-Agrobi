import { Button } from "@mantine/core";
import styled from "./style.module.scss";
import { useLocation } from "react-router-dom";
import { SIDEBARDATA } from "@/consts/sidebar";
export default function CustomTitle({
  open,
  title,
}: {
  open?: () => void;
  title?: string;
}) {
  const { pathname } = useLocation();
  const item = SIDEBARDATA.find((path) => "/" + path.path === pathname);

  return (
    <div className={styled.title}>
      <h3>{item?.text}</h3>
      <Button onClick={open}>{title}</Button>
    </div>
  );
}
