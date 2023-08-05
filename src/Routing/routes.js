import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import ProtectedRoute from "../Components/ProtectedRoute";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: <h1>Jobs</h1>,
      },
      {
        path: "/jobs/:id",
        element: <h1>More Job Details</h1>,
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
