import { createBrowserRouter } from "react-router-dom";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
]);

export default router;
