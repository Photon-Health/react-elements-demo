import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'photon-client': unknown;
      'photon-multirx-form-wrapper': unknown;
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <photon-client
      id={import.meta.env.VITE_CLIENT_ID}
      org={import.meta.env.VITE_ORG_ID}
      dev-mode="true"
      auto-login="true"
      redirect-uri="http://localhost:3000"
    >
      <App />
    </photon-client>
  </StrictMode>
);
