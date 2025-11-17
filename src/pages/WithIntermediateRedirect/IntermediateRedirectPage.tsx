import { useEffect, useState } from 'react';

import('@photonhealth/elements');

export function IntermediateRedirectPage() {
  const [countdown, setCountdown] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        const newValue = Math.max(0, prev - 0.1);
        if (newValue <= 0) {
          clearInterval(interval);
          window.location.href = '/with-intermediate-redirect';
        }
        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  });

  return <>
    {/*adding <photon-client> seems to fix redirect issue*/}
    {/*<photon-client*/}
    {/*  id={import.meta.env.VITE_CLIENT_ID}*/}
    {/*  org={import.meta.env.VITE_ORG_ID}*/}
    {/*  dev-mode="true"*/}
    {/*  auto-login="true"*/}
    {/*  redirect-uri="http://localhost:3000/intermediate/redirect"*/}
    {/*/>*/}
    <p>Redirecting in {countdown}...</p>
  </>;
}

export default IntermediateRedirectPage;
