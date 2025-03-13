import { Navigate, Outlet } from "react-router-dom";

const RoleProtectedRoute: React.FC<{ allowedRoles: string[] }> = ({
  allowedRoles,
}) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Récupérer le rôle de l'utilisateur

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />; // Page d'erreur d'accès refusé
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
