import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Main.css';
import { APP_PATHS } from 'app/contants';
import Home from 'app/routes/Home';
import About from 'app/routes/About';
import Pricing from 'app/routes/Pricing';
import Career from 'app/routes/Career';
import Layout from 'app/components/Layout';
import Login from 'app/routes/Login';
import Signup from 'app/routes/Signup';
import ProtectedRoutes from '../ProtectedRoutes';

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={APP_PATHS.HOME} element={<Home />} />
            <Route path={APP_PATHS.ABOUT} element={<About />} />
            <Route path={APP_PATHS.PRICING} element={<Pricing />} />
            <Route path={APP_PATHS.CAREER} element={<Career />} />
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
