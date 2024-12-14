import { ROUTER } from "@/constants/route";
import CreateUsersStat from "@/pages/Users/components/create-users/create";
import CreateUsersGeneral from "@/pages/Users/general/components/create-users/create";
import GeneralUserPage from "@/pages/Users/general/page";
import Users from "@/pages/Users/page";
import CreateUsersPortal from "@/pages/Users/portal/components/create-users/create";
import PortalUserPage from "@/pages/Users/portal/page";
import CreateUsersTrade from "@/pages/Users/trade/components/create-users/create";
import TradeUserPage from "@/pages/Users/trade/page";

export const RegisteredRouters = [
  {
    path: ROUTER.AUTH,
    children: [
      {
        // index: true,
        path: ROUTER.USERS,
        // element: <GeneralUserPage />,

        children: [
          {
            index: true,
            element: <GeneralUserPage />,
          },
          {
            path: ROUTER.STATISTICS,
            children: [
              { path: "", element: <Users /> },
              {
                path: ROUTER.CREATE,
                element: <CreateUsersStat />,
              },
              {
                path: ROUTER.EDIT,
                element: <CreateUsersStat />,
              },
            ],
          },
          {
            path: ROUTER.GENERAL,
            children: [
              { path: "", element: <GeneralUserPage /> },
              {
                path: ROUTER.CREATE,
                element: <CreateUsersGeneral />,
              },
              {
                path: ROUTER.EDIT,
                element: <CreateUsersGeneral />,
              },
            ],
          },
          {
            path: ROUTER.PORTAL,
            children: [
              { path: "", element: <PortalUserPage /> },
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
          {
            path: ROUTER.TRADE,
            children: [
              { path: "", element: <TradeUserPage /> },
              {
                path: ROUTER.CREATE,
                element: <CreateUsersTrade />,
              },
              {
                path: ROUTER.EDIT,
                element: <CreateUsersTrade />,
              },
            ],
          },
        ],
      },
      // {
      //   path: ROUTER.PORTALS,
      //   element: <NationalPortal />,
      // },
      // {
      //   path: `${ROUTER.PORTALS}/${ROUTER.PROVIDED}`,
      //   children: [
      //     { path: "", element: <TableOne /> },
      //     {
      //       path: ROUTER.CREATE,
      //       element: <CreateTable />,
      //     },
      //     {
      //       path: ROUTER.EDIT,
      //       element: <CreateTable />,
      //     },
      //   ],
      // },
      // {
      //   path: `${ROUTER.PORTALS}/${ROUTER.ADDITION}`,
      //   element: <>weew1</>,
      // },
      // {
      //   path: `${ROUTER.PORTALS}/${ROUTER.AVAILABLE}`,
      //   element: <>weew2</>,
      // },
      // {
      //   path: `${ROUTER.PORTALS}/${ROUTER.UTILIZATION}`,
      //   element: <>weew3</>,
      // },
      // {
      //   path: `${ROUTER.PORTALS}/${ROUTER.STABILITY}`,
      //   element: <>weew4</>,
      // },
    ],
  },
];
