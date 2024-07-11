import { ROUTER } from "@/consts/route";
import Portal from "@/pages/Portal/page";
import Users from "@/pages/Users/page";

export const RegisteredRouters = [
  {
    path: ROUTER.ADMIN,
    element: null,
    children: [
      {
        path: ROUTER.USERS,
        element: <Users />,
      },
      {
        path: ROUTER.PORTAL,
        element: <Portal />,
      },
    ],
  },
];
