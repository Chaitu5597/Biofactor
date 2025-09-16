import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutPage from './Pages/Layout/LayoutPage';
import AgriculturePage from './Components/agriculture/AgriculturePage';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const Agriculture = lazy(() => import('./Components/agriculture/AgriculturePage'));

const AppRoute = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/agriculturePage" element={<AgriculturePage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoute;
