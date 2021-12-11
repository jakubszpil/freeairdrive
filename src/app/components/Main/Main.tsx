import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Main.css';
import { APP_PATHS } from 'app/contants';
import Home from 'app/routes/Home';
import Layout from 'app/components/Layout';
import Login from 'app/routes/Login';
import Signup from 'app/routes/Signup';
import ProtectedRoutes from '../ProtectedRoutes';
import Test from "./Test";

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={APP_PATHS.HOME} element={<Home />} />
            <Route path={APP_PATHS.ABOUT} element={<Home />} />
            <Route path={APP_PATHS.PRICING} element={<Home />} />
            <Route path={APP_PATHS.CAREER} element={<Home />} />
            <Route path={APP_PATHS.LOGIN} element={<Login />} />
            <Route path={APP_PATHS.SIGNUP} element={<Signup />} />
            <Route element={<ProtectedRoutes />}>
              <Route path={APP_PATHS.USER.BASE} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default Main;
