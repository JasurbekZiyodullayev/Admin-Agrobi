import { Button } from "@mantine/core";
import styled from "./style.module.scss";

export default function DeleteUsers({ closeDelete, isLoadingDelete }: any) {
  return (
    <div className={styled.buttons}>
      <Button loading={isLoadingDelete} w={100}>
        Ha
      </Button>
      <Button onClick={closeDelete} w={100} bg="red">
        Yo'q
      </Button>
    </div>
  );
}
