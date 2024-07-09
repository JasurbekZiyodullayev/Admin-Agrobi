import { ROUTER } from "@/consts/route";

export const RegisteredRouters = [
  {
    path: ROUTER.ADMIN,
    children: [
      {
        path: ROUTER.USERS,
        element: "dashbord",
      },
    ],
  },
];
