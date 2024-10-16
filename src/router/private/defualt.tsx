import { lazy } from "react";
import { ROUTER } from "@/constants/route";

const Login = lazy(async () => await import("@/pages/login"));

export const DefualtRouters = [
  {
    path: ROUTER.AUTH,
    element: <Login />,
  },
];
