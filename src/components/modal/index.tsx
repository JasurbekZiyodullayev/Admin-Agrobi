import { Modal } from "@mantine/core";

export default function ModalComponent({
  children,
  opened,
  close,
  title,
}: any) {
  return (
    <>
      <Modal
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
