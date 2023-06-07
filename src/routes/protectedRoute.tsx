import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSessionContext } from "../context/session.context";

export const ProtectedRoute = () => {
  const location = useLocation();
  const { token } = useSessionContext();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/welcome" state={{ from: location }} replace />
  );
};
