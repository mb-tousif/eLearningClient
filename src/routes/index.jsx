import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Hooks/PrivateRoute";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Main from "../Layout";
import AdminPage from "../Pages/Courses/AdminPage";
import AllCourses from "../Pages/Courses/AllCourses";
import MyCart from "../Pages/Courses/MyCart";
import StripeCard from "../Pages/Courses/StripeCard";
import MyCourses from "../Pages/Courses/MyCourses";
import StudentSupport from "../Pages/Courses/StudentSupport";
import NoticeBoard from "../Pages/Courses/NoticeBoard";
import StudentProgress from "../Pages/Courses/StudentProgress";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import PageNotFound from "../ShareCompnt/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/",
            element: <AllCourses />,
          },
          {
            path: "admin",
            element: <AdminPage />,
          },
          {
            path: "cart",
            element: <MyCart />,
          },
          {
            path: "cart/paymentGateway",
            element: <StripeCard />,
          },
          {
            path: "myCourses",
            element: <MyCourses />,
          },
          {
            path: "support",
            element: <StudentSupport />,
          },
          {
            path: "noticeBoard",
            element: <NoticeBoard />,
          },
          {
            path: "studentProgress",
            element: <StudentProgress />,
          },
        ],
      },
      {
        path: "blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://e-learning-server-omega.vercel.app/api/v1/blog/${params.id}`
          ),
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
    ],
  },
    {
        path: "*",
        element: <Main />,
        children: [
        {
            path: "*",
            element: <PageNotFound />,
        },
        ],
    },
]);

export default router;