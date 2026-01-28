import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages.jsx/Home";
import Registration from "../Pages.jsx/Registration";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
 { path: "/registration", element: <Registration /> },
      
     
    ],
  },

  
]);
