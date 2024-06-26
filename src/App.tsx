// @ts-nocheck

import('@photonhealth/elements');

export function App() {
  return (
    <photon-client
      id={import.meta.env.VITE_CLIENT_ID}
      org={import.meta.env.VITE_ORG_ID}
      dev-mode="true"
      auto-login="true"
      redirect-uri={`${window.location.protocol}//${window.location.host}`}
    >
      <photon-prescribe-workflow />
    </photon-client>
  );
}

export default App;
