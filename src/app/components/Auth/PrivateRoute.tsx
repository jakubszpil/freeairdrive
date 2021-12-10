import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}: any) => {
    const user = null;

    return user ? children : <Navigate to="/login"/>;
}

export default PrivateRoute;