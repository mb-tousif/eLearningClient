import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children}) {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  if (token) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}
