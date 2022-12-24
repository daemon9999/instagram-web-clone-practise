import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function HomeRoute({children}) {
    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    if (user){
        return <Navigate to="/"  replace={true} state={{
            return_url: location.pathname
        }}
        />
    }

    return children
}