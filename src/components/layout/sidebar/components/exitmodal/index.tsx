import { ISidebar } from "@/types/layout";
import style from "../item.module.scss";
import { Button, Modal } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { clearUser } from "@/utils/user";

export default function ExitModal({ icon, text }: ISidebar) {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          open();
        }}
        className={`${style.link}`}
      >
        <span>{icon}</span>
        {text}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        radius={"lg"}
        centered
        zIndex={9999}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <div className={style.wrapper}>
          <div>
            <h4 className={style.title}>Tizimdan chiqmoqchimisiz?</h4>
            <p className={style.desc}>
              Tizimdan chiqgandan keyin ushbu amalni ortga qaytarib bo`lmaydi.
            </p>
          </div>
          <div className={style.wrapBtn}>
            <Button onClick={() => close()} variant="outline">
              Qaytish
            </Button>
            <Button
              onClick={() => {
                clearUser();
                navigate("/");
              }}
              variant="outline"
              color="red"
            >
              Chiqish
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
