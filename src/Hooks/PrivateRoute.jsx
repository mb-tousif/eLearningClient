/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);
  const location = useLocation();

  if (accessToken) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
