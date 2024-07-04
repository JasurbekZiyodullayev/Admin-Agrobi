import DefualtRoute from "../layout/default";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DefualtRouters } from "./private/defualt";
import { RegisteredRouters } from "./private/registerd";
import PrivateRoute from "../layout/registered";

export function Router() {
  const router = createBrowserRouter([
    // login qilmagan

    {
      element: <DefualtRoute />,
      children: DefualtRouters,
      errorElement: <h2>Erorr</h2>,
    },

    // login qilgan
    {
      element: <PrivateRoute />,
      children: RegisteredRouters,
      errorElement: <h2>Erorr</h2>,
    },
  ]);
  return <RouterProvider router={router} />;
}
