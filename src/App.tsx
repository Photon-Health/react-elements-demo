import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import IterativeFlow from './pages/IterativeFlow';
import BatchFlow from './pages/BatchFlow';
import './AppStyles.css';
import SimplestFlow from './pages/SimplestFlow';
import SetPharmacy from './pages/SetPharmacy';
import WithIntermediateRedirectFlow from './pages/WithIntermediateRedirect/WithIntermediateRedirectFlow';
import IntermediateRedirectPage from './pages/WithIntermediateRedirect/IntermediateRedirectPage';

export function App() {
  const env = import.meta.env.VITE_PHOTON_ENV;
  if (!env) {
    throw new Error('Missing VITE_PHOTON_ENV in .env file');
  }
  return (
    <BrowserRouter>
      <div className="tabs-container">
        <nav className="tabs">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}
          >
            Simplest Setup
          </NavLink>
          <NavLink
            to="/batch"
            className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}
          >
            Batch Flow
          </NavLink>
          <NavLink
            to="/iterative"
            className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}
            end
          >
            Iterative Flow
          </NavLink>
          <NavLink
            to="/set-pharmacy"
            className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}
            end
          >
            Set Pharmacy
          </NavLink>
          <NavLink
            to="/with-redirect"
            className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}
            end
          >
            With Redirect
          </NavLink>
        </nav>

        <div className="tab-content">
          <Routes>
            <Route path="/" element={<SimplestFlow />} />
            <Route path="/iterative" element={<IterativeFlow />} />
            <Route path="/batch" element={<BatchFlow />} />
            <Route path="/set-pharmacy" element={<SetPharmacy />} />

            <Route path="/with-intermediate-redirect" element={<WithIntermediateRedirectFlow />} />
            <Route path="/intermediate/redirect" element={<IntermediateRedirectPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
