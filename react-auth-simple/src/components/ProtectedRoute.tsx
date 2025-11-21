import { Navigate, useLocation } from "react-router";
import AuthService from "../services/AuthService";

export default function ProtectedRoute({ children }: { children: any }) {
  const location = useLocation();
  if (!AuthService.isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
}
