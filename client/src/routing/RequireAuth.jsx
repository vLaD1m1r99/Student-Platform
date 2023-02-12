import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({authRoles}) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('profile'))
    const authorized = authRoles.includes(user?.result?.role);
    return (
      authorized
            ? <Outlet />
            : !user
                ? <Navigate to="/auth" state={{ from: location }} replace />
                // If unauthorized go to dashboard
                : <Navigate to="/userHomePage" state={{ from: location }} replace />
    );
}

export default RequireAuth;