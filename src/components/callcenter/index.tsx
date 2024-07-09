import IconBot from "@/assets/callcenter/bot";
import IconCall from "@/assets/callcenter/call";
import IconEllepsTop from "@/assets/callcenter/elleps";
import IconEllepsBottom from "@/assets/callcenter/ellepsBottom";
import IconTel from "@/assets/callcenter/tel";
import { Link } from "react-router-dom";
import style from "./callcenter.module.scss";
export default function CallCenterComponent() {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapImg}>
        <IconCall />
      </div>
      <div className={style.wrapText}>
        <Link to="tel:+998 93 255 62 85">
          <IconTel />
          <span>+998 93 255 62 85</span>
        </Link>
        <Link to="#">
          <IconBot />
          <span>@agrobi_bot</span>
        </Link>
      </div>
      <div className={style.wrapElleps}>
        <IconEllepsTop />
        <IconEllepsBottom />
      </div>
    </div>
  );
}
