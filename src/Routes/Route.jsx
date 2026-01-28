import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages.jsx/Home";
import Registration from "../Pages.jsx/Registration";
import Login from "../Pages.jsx/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
 { path: "/registration", element: <Registration /> },
 { path: "/login", element: <Login /> },
      
 // Dashboard Routes (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Dashboard Home
      { index: true, element: <DashboardIndex></DashboardIndex> },

     
    ],
  },
     
    ],
  },

  
]);
