import { useMemo } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

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

export default Home;
