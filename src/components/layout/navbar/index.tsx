import styles from "./navbar.module.scss";
import { Avatar, Burger } from "@mantine/core";

export default function Navbar({ show, toggleSidebar }: any) {
  // const PageName =
  //   SIDEBARDATA?.find((a: any) =>
  //     a?.path?.includes(path.split("/")?.slice(-1)[0])
  //   )?.text ||
  //   reportsList?.find((a: any) =>
  //     a?.path?.includes(path.split("/")?.slice(-1)[0])
  //   )?.text;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <Burger
          opened={show}
          onClick={() => toggleSidebar()}
          aria-label="Toggle navigation"
        />

        <h1>{"Noma'lum sahifa"}</h1>
      </div>

      <div className={styles.right}>
        <div className={styles.btnWrap}></div>
        <div className={styles.wrapAvatar}>
          <Avatar
            // variant="filled"
            radius="xl"
            // src="https://images.pexels.com/photos/18482092/pexels-photo-18482092.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div className={styles.wrapAvatarText}>
            <h3>User</h3>
            <p>@username</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
