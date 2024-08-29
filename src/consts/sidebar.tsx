import IconPortal from "@/assets/sidebar/portal";
import IconUsers from "@/assets/sidebar/users";

export const SIDEBARDATA = [
  {
    id: 0,
    icon: <IconUsers />,
    text: "Foydalanuvchilar",
    path: "admin/users",
  },
  {
    id: 1,
    icon: <IconPortal />,
    text: "Milliy Portal",
    path: "admin/national-portal",
  },
];
