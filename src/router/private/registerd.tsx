import { ROUTER } from "@/constants/route";
import CreateUsers from "@/pages/Users/components/create-users/create";
import Users from "@/pages/Users/page";

export const RegisteredRouters = [
  {
    path: ROUTER.AUTH,
    children: [
      {
        path: ROUTER.USERS,
        children: [
          { path: "", element: <Users /> },
          {
            path: ROUTER.CREATE,
            element: <CreateUsers />,
          },
          {
            path: ROUTER.EDIT,
            element: <CreateUsers />,
          },
        ],
      },
    ],
  },
];
