// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useMemo } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Visits from './Visits';

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Home() {
  const query = useQueryParams();

  if (query.get('redirect')) {
    // http://localhost:3000/?redirect=%2Fvisits
    return <Navigate to={query.get('redirect') || '/'} />;
  }

  return (
    <div>
      Home
      <Link to="/visits">Visits</Link>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visits" element={<Visits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
