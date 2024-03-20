import { useMemo } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import queryString from 'query-string';

function useQueryParams() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function Home() {
  const query = useQueryParams();
  const redirect = query.get('redirect');

  if (redirect) {
    let data: { [key: string]: string } = {};
    query.forEach((value, key) => {
      if (key !== 'redirect') {
        data[key] = value;
      }
    });

    const url = `${redirect}?${queryString.stringify(data)}`;
    return <Navigate to={url} />;
  }

  return (
    <div>
      Home <Link to="/visits">Visits</Link>
    </div>
  );
}

export default Home;
