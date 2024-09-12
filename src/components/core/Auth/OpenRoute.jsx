import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
    // Access the token from the Redux store to check authentication status
    const { isAuthenticated, role } = useSelector((state) => state.auth);

    // If the user is authenticated, redirect to a protected route (like /dashboard)
    if (isAuthenticated) {
        // Redirect based on role
        if (role === 'Tour Guide') {
            return <Navigate to="/tour-guide-dashboard" />;
        } else if (role === 'Business') {
            return <Navigate to="/business-dashboard" />;
        } else {
            return <Navigate to="/tourist-dashboard" />;
          }
    }

    // If the user is not authenticated, render the requested component (e.g., Login)
    return children;
}

export default OpenRoute;
