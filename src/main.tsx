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
      id="7N9QZujlNJHL8EIPqXpu1wq8OuXqoxKb"
      org="org_KzSVZBQixLRkqj5d"
      domain="auth.neutron.health"
      audience="https://api.neutron.health"
      uri="https://api.neutron.health/graphql"
      auto-login="true"
      redirect-uri="http://localhost:3000"
      redirect-path="/visits"
    >
      <App />
    </photon-client>
  </StrictMode>
);
