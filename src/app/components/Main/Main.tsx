import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './Main.css';
import {APP_PATHS} from 'app/contants';
import Home from 'app/routes/Home';
import Layout from 'app/components/Layout';
import ProtectedRoutes from '../ProtectedRoutes';
import Team from 'app/routes/Team/Team';

function Main() {
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
}

export default Main;
