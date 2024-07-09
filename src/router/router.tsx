import DefualtRoute from "../layout/default";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefualtRouters } from "./private/defualt";
import { RegisteredRouters } from "./private/registerd";
import PrivateRoute from "../layout/registered";
import NotFoundPage from "@/pages/404";

export function Router() {
  const router = createBrowserRouter([
    // login qilmagan

    {
      element: <DefualtRoute />,
      children: DefualtRouters,
      errorElement: <NotFoundPage />,
    },

    // login qilgan
    {
      element: <PrivateRoute />,
      children: RegisteredRouters,
      errorElement: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
