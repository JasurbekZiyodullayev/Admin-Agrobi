import { Modal } from "@mantine/core";

export default function ModalComponent({
  children,
  opened,
  close,
  modalTitle,
  size,
}: {
  children?: React.ReactNode;
  opened: boolean;
  close: () => void;
  modalTitle?: string;
  size?: string;
}) {
  return (
    <>
      <Modal
        size={size ?? "xs"}
        padding={24}
        opened={opened}
        onClose={close}
        title={modalTitle}
        centered
        styles={{
          content: { background: "var(--site-bg)", color: "var(--grey-600)" },
          header: { background: "var(--site-bg)", color: "var(--grey-600)" },
        }}
      >
        {children}
      </Modal>
    </>
  );
}
