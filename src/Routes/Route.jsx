import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages.jsx/Home";
import Registration from "../Pages.jsx/Registration";
import Login from "../Pages.jsx/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardIndex from "../Pages.jsx/Dashboard/DashboardIndex";

export const router = createBrowserRouter([
  // Public Routes with MainLayout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },

  // Private Dashboard Routes with DashboardLayout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DashboardIndex /> },
      

    ],
  },
]);