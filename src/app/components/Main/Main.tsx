import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './Main.css';
import { APP_PATHS } from 'app/constants';
import Home from 'app/routes/Home';
import Overview from 'app/routes/Overview';
import Cooperation from 'app/routes/Cooperation';
import Parknow from 'app/routes/Parknow';
import Career from 'app/routes/Careers';
import Login from 'app/routes/Login';
import Signup from 'app/routes/Signup';
import Newsroom from 'app/routes/Newsroom';
import Support from 'app/routes/Support';
import Order from 'app/routes/Order';
import OrderList from 'app/routes/OrderList';
import WorkerView from 'app/routes/WorkerView';
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
            <Route path={APP_PATHS.OVERVIEW} element={<Overview />} />
            <Route path={APP_PATHS.COOPERATION} element={<Cooperation />} />
            <Route path={APP_PATHS.PARK_NOW} element={<Parknow />} />
            <Route path={APP_PATHS.ORDER_LIST} element={<OrderList />} />
            <Route path={APP_PATHS.NEWS_ROOM} element={<Newsroom />} />
            <Route path={APP_PATHS.SUPPORT} element={<Support />} />
            <Route path={APP_PATHS.CAREER} element={<Career />} />
            <Route path={APP_PATHS.LOGIN} element={<Login />} />
            <Route path={APP_PATHS.SIGNUP} element={<Signup />} />
            <Route path={APP_PATHS.TEAM} element={<Team />} />
            <Route path={APP_PATHS.ORDER} element={<Order />} />
            <Route path={APP_PATHS.WORKER_VIEW} element={<WorkerView />} />
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
