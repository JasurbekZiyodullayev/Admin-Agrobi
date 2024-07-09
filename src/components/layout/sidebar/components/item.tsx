import ExitModal from "./exitmodal";
import { ISidebar } from "@/types/layout";
import { Link, useLocation } from "react-router-dom";
export default function Item({ icon, path = "#", text }: ISidebar) {
  const location = useLocation();
  console.log(location, "location");

  return (
    <>
      {path === "/exit" ? (
        <ExitModal icon={icon} text={text} />
      ) : (
        <Link
          to={path}
          // className={`${styles.link} ${
          //   location.includes(path) ? styles.active : ""
          // }`}
        >
          <span>{icon}</span>
          {text}
        </Link>
      )}
    </>
  );
}
