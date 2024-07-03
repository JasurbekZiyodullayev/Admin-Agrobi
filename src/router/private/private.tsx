import { HocPrivate } from "./hoc.tsx";

function PrivateRouter() {
  return (
    <HocPrivate>
      <Layout />
    </HocPrivate>
  );
}

export default PrivateRouter;
