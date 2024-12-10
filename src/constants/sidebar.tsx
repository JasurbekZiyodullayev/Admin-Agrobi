import IconExit from "@/assets/exit";
import IconPortal from "@/assets/sidebar/portal";
import IconUsers from "@/assets/sidebar/users";

export const SIDEBARDATA = [
  {
    id: 0,
    icon: <IconUsers />,
    text: "Foydalanuvchilar",
    path: "/users",
    child: [
      {
        id: 31,
        text: "Umumiy",
        path: "/general",
      },
      {
        id: 32,
        text: "Statistika",
        path: "/statistics",
      },
      {
        id: 33,
        text: "Milliy portal",
        path: "/portal-users",
      },
    ],
  },

  {
    id: 1,
    icon: <IconPortal />,
    text: "Milliy Portal",
    path: "/portal",
  },
  {
    id: 4,
    icon: <IconExit />,
    text: "Chiqish",
    path: "/exit",
  },
];
