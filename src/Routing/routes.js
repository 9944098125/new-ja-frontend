import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
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
