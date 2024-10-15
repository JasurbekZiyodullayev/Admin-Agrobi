import { lazy } from "react";
import { ROUTER } from "@/consts/route";

const Login = lazy(async () => await import("@/pages/login"));

export const DefualtRouters = [
  {
    path: ROUTER.AUTH,
    element: <Login />,
  },
];
