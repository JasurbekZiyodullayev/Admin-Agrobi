import styles from "./sidebar.module.scss";
import Item from "./components/item";
import { Burger, ScrollArea } from "@mantine/core";
import { SIDEBARDATA } from "@/consts/sidebar";
import LoginIconMini from "@/assets/loginIconMini";
import { ISidebar } from "@/types/layout";
import IconDigital from "@/assets/digital";
import CallCenterComponent from "@/components/callcenter";

export default function Sidebar({
  show,
  toggleSidebar,
}: {
  show: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <div className={`${styles.sidebar} ${show ? styles.show : ""}`}>
      <div className={styles.logo}>
        <LoginIconMini />
        <span>AgroBI</span>
      </div>
      <Burger
        className={styles.burger}
        size={"sm"}
        opened={show}
        onClick={() => toggleSidebar()}
        aria-label="Toggle navigation"
        color="#fff"
      />

      <ScrollArea className={styles.list}>
        {SIDEBARDATA?.map(({ icon, path, text, id }: ISidebar) => (
          <Item key={id} icon={icon} text={text} path={path} />
        ))}
      </ScrollArea>

      <div className={styles.callcenter}>
        <CallCenterComponent />
        <IconDigital />
      </div>
    </div>
  );
}
