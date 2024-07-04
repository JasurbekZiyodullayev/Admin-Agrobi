import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function DefualtRoute() {
  return (
    <Suspense fallback={"...loder"}>
      <Outlet />
    </Suspense>
  );
}
