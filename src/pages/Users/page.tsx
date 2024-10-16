import styled from "./style.module.scss";
import AddUsers from "./components/create-users";

export default function Users() {
  return (
    <>
      <div className={styled.container}>
        <AddUsers />

        {/* <ModalComponent opened={openedDelete} close={closeDelete}>
          <DeleteUsers close={closeDelete} />
        </ModalComponent> */}
      </div>
    </>
  );
}
