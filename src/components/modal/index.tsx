import { Modal } from "@mantine/core";

export default function ModalComponent({ children, opened, close }: any) {
  return (
    <>
      <Modal
        size="xs"
        padding={24}
        opened={opened}
        onClose={close}
        title="Foydalanuvchi qo’shish"
        centered
      >
        {children}
      </Modal>
    </>
  );
}
