import { useMemo } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Home() {
  const query = useQueryParams();

  return (
    <div>
      Home
      <Link to="/visits">Visits</Link>
    </div>
  );
}

export default Home;
