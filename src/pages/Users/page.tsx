import { Button } from "@mantine/core";
import styles from "./style.module.scss";

export default function Users() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Foydalanuvchilar</h3>
        <Button>+ Foydalanuvchi qo’shish</Button>
      </div>
    </div>
  );
}
