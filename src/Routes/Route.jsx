import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages.jsx/Home";
import Registration from "../Pages.jsx/Registration";
import Login from "../Pages.jsx/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardIndex from "../Pages.jsx/Dashboard/DashboardIndex";
import AllUsers from "../Pages.jsx/Dashboard/AllUsers";
import AddRecipe from "../Pages.jsx/Dashboard/AddRecipe";
import ReviewApprovals from "../Pages.jsx/Dashboard/ReviewApprovals";
import MealPlanner from "../Pages.jsx/Dashboard/MealPlanner";
import MyReviews from "../Pages.jsx/Dashboard/MyReviews";
import Recipes from "../Pages.jsx/Dashboard/Recipes";
import AdminRecipes from "../Pages.jsx/Dashboard/AdminDashboard/AdminRecipes";
import EditRecipe from "../Pages.jsx/Dashboard/AdminDashboard/EditRecipe";
import RecipeDetails from "../Pages.jsx/RecipeDetails";
import About from "../Pages.jsx/About";
import Services from "../Pages.jsx/Services";
import Events from "../Pages.jsx/Events";

export const router = createBrowserRouter([
  // Public Routes with MainLayout
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/events", element: <Events /> },

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

  // Admin pages
  { path: "all-users", element: <AllUsers /> },
  { path: "recipes", element: <Recipes /> },
  { path: "add-recipe", element: <AddRecipe /> },
  { path: "reviews", element: <ReviewApprovals /> },
  {
path: "admin-recipes",
element: <AdminRecipes />
},

{
path: "edit-recipe/:id",
element: <EditRecipe />
},

  // User pages
  { path: "meal-planner", element: <MealPlanner /> },
  { path: "my-reviews", element: <MyReviews /> },
]
  },
  {
path: "/recipes/:id",
element: <RecipeDetails />
},
]);