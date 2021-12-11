import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './Main.css';
import { APP_PATHS } from 'app/contants';
import Home from 'app/routes/Home';
import Book from 'app/routes/Book';
import Overview from 'app/routes/Overview';
import Cooperation from 'app/routes/Cooperation';
import Parknow from 'app/routes/Parknow';
import Career from 'app/routes/Career';
import Login from 'app/routes/Login';
import Signup from 'app/routes/Signup';
import Newsroom from 'app/routes/Newsroom';
import Support from 'app/routes/Support';
import Layout from 'app/components/Layout';
import ProtectedRoutes from '../ProtectedRoutes';

import Team from 'app/routes/Team';

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={APP_PATHS.HOME} element={<Home />} />
            <Route path={APP_PATHS.BOOK} element={<Book />} />
            <Route path={APP_PATHS.OVERVIEW} element={<Overview />} />
            <Route path={APP_PATHS.COOPERATION} element={<Cooperation />} />
            <Route path={APP_PATHS.PARK_NOW} element={<Parknow />} />
            <Route path={APP_PATHS.NEWS_ROOM} element={<Newsroom />} />
            <Route path={APP_PATHS.SUPPORT} element={<Support />} />
            <Route path={APP_PATHS.CAREER} element={<Career />} />
            <Route path={APP_PATHS.LOGIN} element={<Login />} />
            <Route path={APP_PATHS.SIGNUP} element={<Signup />} />
            <Route path={APP_PATHS.TEAM} element={<Team />} />
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
