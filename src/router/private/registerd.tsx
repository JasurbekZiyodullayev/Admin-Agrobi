import { ROUTER } from "@/consts/route";
import Users from "@/pages/Users/page";

export const RegisteredRouters = [
  {
    path: ROUTER.ADMIN,
    children: [
      {
        path: ROUTER.USERS,
        element: <Users />,
      },
    ],
  },
];
