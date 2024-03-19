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
    <App />
  </StrictMode>
);
