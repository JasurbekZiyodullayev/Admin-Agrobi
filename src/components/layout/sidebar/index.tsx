import IconDigital from "@/assets/digital";
import LoginIconMini from "@/assets/loginIconMini";
import CallCenterComponent from "@/components/callcenter";
import { SIDEBARDATA } from "@/constants/sidebar";
import { ISidebar } from "@/types/layout";
import { Burger, ScrollArea } from "@mantine/core";
import Item from "./components/item";
import styles from "./sidebar.module.scss";

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
        {SIDEBARDATA?.map(({ icon, path, text, id, child }: ISidebar) => (
          <Item key={id} icon={icon} text={text} path={path} child={child} />
        ))}
      </ScrollArea>

      <div className={styles.callcenter}>
        <CallCenterComponent />
        <IconDigital />
      </div>
    </div>
  );
}
