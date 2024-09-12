import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles }) {
    // Access authentication and role data from Redux store
    const { isAuthenticated, role } = useSelector((state) => state.auth);

    // If the user is not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated but does not have the required role, redirect to not authorized page
    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/not-authorized" />;
    }

    // If user is authenticated and has the correct role, render the requested component (children)
    return children;
}

export default PrivateRoute;
