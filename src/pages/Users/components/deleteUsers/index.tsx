import { Button } from "@mantine/core";
import styled from "./style.module.scss";

export default function DeleteUsers() {
  return (
    <div className={styled.buttons}>
      <Button w={100}>Ha</Button>
      <Button w={100} bg="red">
        Yo'q
      </Button>
    </div>
  );
}
