import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import PrivateRoute from "../Auth/PrivateRoute";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<SignUpPage/>}/>
                <Route
                    path="/private"
                    element={
                        <PrivateRoute>
                            <Private />
                        </PrivateRoute>
                    }
                />
                {/*<Route path="forgot-password" element={<ResetPassword/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export const Private = () => {
    return <div>Private data</div>
}

export default Main;
