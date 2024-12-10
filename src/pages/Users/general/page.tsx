import styled from "../style.module.scss";
import AddUsers from "./components/create-users";
export default function GeneralUserPage() {
  return (
    <div className={styled.container}>
      <AddUsers />
    </div>
  );
}
