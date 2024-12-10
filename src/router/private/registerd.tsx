import { ROUTER } from "@/constants/route";
import NationalPortal from "@/pages/national-portal";
import CreateUsers from "@/pages/Users/components/create-users/create";
import CreateUsersPortal from "@/pages/Users/general/components/create-users/create";
import GeneralUserPage from "@/pages/Users/general/page";
import Users from "@/pages/Users/page";

export const RegisteredRouters = [
  {
    path: ROUTER.AUTH,
    children: [
      {
        path: ROUTER.USERS,
        children: [
          {
            path: ROUTER.STATISTICS,
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
          {
            path: ROUTER.GENERAL,
            children: [
              { path: "", element: <GeneralUserPage /> },
              {
                path: ROUTER.CREATE,
                element: <CreateUsersPortal />,
              },
              {
                path: ROUTER.EDIT,
                element: <CreateUsersPortal />,
              },
            ],
          },
        ],
      },
      {
        path: ROUTER.PORTAL,
        element: <NationalPortal />,
      },
    ],
  },
];
