import ExitModal from "./exitmodal";
import styles from "./item.module.scss";
import { ISidebar } from "@/types/layout";
import { Link, useLocation } from "react-router-dom";
export default function Item({ icon, path = "#", text }: ISidebar) {
  const location = useLocation();

  return (
    <>
      {path === "/exit" ? (
        <ExitModal icon={icon} text={text} />
      ) : (
        <Link
          to={path}
          className={`${styles.link} ${
            location.pathname.includes(path) ? styles.active : ""
          }`}
        >
          <span>{icon}</span>
          {text}
        </Link>
      )}
    </>
  );
}
