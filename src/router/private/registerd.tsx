import { ROUTER } from "@/constants/route";
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
