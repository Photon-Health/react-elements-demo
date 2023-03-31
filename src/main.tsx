import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <photon-client
      id="7N9QZujlNJHL8EIPqXpu1wq8OuXqoxKb"
      org="org_KzSVZBQixLRkqj5d"
      domain="auth.boson.health"
      audience="https://api.boson.health"
      uri="https://api.boson.health/graphql"
      auto-login="true"
      redirect-uri="http://localhost:3000"
      redirect-path="/visits"
    >
      <App />
    </photon-client>
  </StrictMode>
);
