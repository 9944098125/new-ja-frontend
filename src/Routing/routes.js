import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import ProtectedRoute from "../Components/ProtectedRoute";
import Jobs from "../Pages/Jobs";
import JobDetails from "../Pages/Jobs/JobDetails";
import Create from "../Pages/Jobs/Create";
import PostedJobs from "../Pages/Jobs/PostedJobs";
import EditJob from "../Pages/Jobs/EditJob";

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
        element: (
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create",
        element: (
          <ProtectedRoute>
            <Create />
          </ProtectedRoute>
        ),
      },
      {
        path: "/getEmployerJobs",
        element: (
          <ProtectedRoute>
            <PostedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: (
          <ProtectedRoute>
            <EditJob />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function BaseRoutes() {
  return <RouterProvider router={router} />;
}
