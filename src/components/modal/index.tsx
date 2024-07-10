import { Modal } from "@mantine/core";
import styled from "./style.module.scss";

export default function ModalComponent({
  children,
  opened,
  close,
  title,
}: any) {
  return (
    <>
      <Modal
        className={styled.modal}
        size="xs"
        padding={24}
        opened={opened}
        onClose={close}
        title={title}
        centered
      >
        {children}
      </Modal>
    </>
  );
}
