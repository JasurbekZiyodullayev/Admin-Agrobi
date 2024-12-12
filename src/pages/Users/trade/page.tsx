import styled from "../style.module.scss";
import AddUsers from "./components/create-users";
export default function TradeUserPage() {
  return (
    <div className={styled.container}>
      <AddUsers />
    </div>
  );
}
