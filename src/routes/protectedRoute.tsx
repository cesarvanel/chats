import { Navigate, Outlet } from "react-router-dom";
import { useSessionContext } from "../context/session.context";

export const ProtectedRoute = () => {
  const token = useSessionContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
