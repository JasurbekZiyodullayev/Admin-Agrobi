import { Modal } from "@mantine/core";

export default function ModalComponent({
  children,
  opened,
  close,
  modalTitle,
}: {
  children?: React.ReactNode;
  opened: boolean;
  close: () => void;
  modalTitle?: string;
}) {
  return (
    <>
      <Modal
        size="xs"
        padding={24}
        opened={opened}
        onClose={close}
        title={modalTitle}
        centered
      >
        {children}
      </Modal>
    </>
  );
}
