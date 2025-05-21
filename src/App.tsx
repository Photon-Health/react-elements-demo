import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import IterativeFlow from './pages/IterativeFlow';
import BatchFlow from './pages/BatchFlow';
import './AppStyles.css'; // Add this import

export function App() {
  return (
    // @ts-expect-error
    <photon-client
      id={import.meta.env.VITE_CLIENT_ID}
      org={import.meta.env.VITE_ORG_ID}
      dev-mode="true"
      auto-login="true"
      redirect-uri={`${window.location.protocol}//${window.location.host}`}
    >
      <BrowserRouter>
        <div className="tabs-container">
          <nav className="tabs">
            <NavLink
              to="/"
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
          </nav>

          <div className="tab-content">
            <Routes>
              <Route path="/iterative" element={<IterativeFlow />} />
              <Route path="/" element={<BatchFlow />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      {/*@ts-expect-error*/}
    </photon-client>
  );
}

export default App;
