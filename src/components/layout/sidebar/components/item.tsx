import { Accordion } from "@mantine/core";
import ExitModal from "./exitmodal";
import styles from "./item.module.scss";
import { ISidebar } from "@/types/layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Item({ icon, path = "#", text, child }: ISidebar) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {path === "/exit" ? (
        <ExitModal icon={icon} text={text} />
      ) : path === "/users" ? (
        <Accordion
          chevron={false}
          styles={{
            root: { borderRadius: "12px", marginBottom: "16px" },
            item: { border: 0, paddingLeft: "6px" },
            control: { borderRadius: "12px" },
          }}
        >
          <Accordion.Item value={path}>
            <Accordion.Control
              icon={icon}
              onClick={() => navigate("/users/general")}
              className={`${location.pathname.includes(path) ? "active" : ""}`}
            >
              {text}
            </Accordion.Control>
            <Accordion.Panel>
              {child?.map((item: any) => (
                <Link
                  key={item.id}
                  to={item.url ? item.url : "/users" + item?.path}
                  target={item.url ? "_blank" : ""}
                  className={`${styles.link} ${styles.sublink} ${
                    location.pathname.includes(item.path) ? styles.active : ""
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
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
