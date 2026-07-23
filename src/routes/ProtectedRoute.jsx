import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth.store";

function ProtectedRoute({children}){

const isAuthenticated = useAuthStore(
    state=>state.isAuthenticated
);

const isLoading = useAuthStore(
    state=>state.isLoading
);

if(isLoading){

    return (
        <div>
            Loading Apertur...
        </div>
    )

}

if(!isAuthenticated){

    return (
        <Navigate to="/login"/>
    )

}

return children;
}

export default ProtectedRoute;