import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import Home from 'app/routes/Home';

function Main() {
  return (
    <div className="main">
      <BrowserRouter>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default Main;
