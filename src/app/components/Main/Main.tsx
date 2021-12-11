import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './Main.css';
import {APP_PATHS} from 'app/contants';
import Home from 'app/routes/Home';
import About from 'app/routes/About';
import Pricing from 'app/routes/Pricing';
import Career from 'app/routes/Career';
import Layout from 'app/components/Layout';
import ProtectedRoutes from '../ProtectedRoutes';
import Team from 'app/routes/Team/Team';

function Main() {
<<<<<<< HEAD
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
=======
    return (
        <div className="main">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path={APP_PATHS.OVERVIEW} element={<Home/>}/>
                        <Route path={APP_PATHS.PARK_NOW} element={<Home/>}/>
                        <Route path={APP_PATHS.BOOK} element={<Home/>}/>
                        <Route path={APP_PATHS.COOPERATION} element={<Home/>}/>
                        <Route path={'/team'} element={<Team/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path={APP_PATHS.USER.BASE}/>
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
>>>>>>> c33cc50300f0f72c0fbdfa301d624b90ae65e016
}

export default Main;
