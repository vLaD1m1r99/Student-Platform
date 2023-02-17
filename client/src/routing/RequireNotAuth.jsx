import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireNotAuth = ({authRoles}) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('profile'))
    return (
         !user
                ? <Navigate to="/auth" state={{ from: location }} replace />
                // If unauthorized go to dashboard
                : <Navigate to="/userHomePage" state={{ from: location }} replace />
    
    );
}

export default RequireNotAuth;