import { ROUTER } from "@/consts/route";
import NationalPortal from "@/pages/national-portal";
import Users from "@/pages/Users/page";

export const RegisteredRouters = [
  {
    path: ROUTER.ADMIN,
    children: [
      {
        path: ROUTER.USERS,
        element: <Users />,
      },
      {
        path: ROUTER.NATIONAL_PORTAL,
        element: <NationalPortal />,
      },
    ],
  },
];
