// @ts-nocheck
import { useState } from 'react';

import('@photonhealth/elements');

function Visits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <photon-client
        id={import.meta.env.VITE_CLIENT_ID}
        org={import.meta.env.VITE_ORG_ID}
        dev-mode="true"
        auto-login="true"
        redirect-uri="http://localhost:3000"
      >
        {show ? <photon-multirx-form-wrapper hide-templates="false" /> : null}
      </photon-client>
    </>
  );
}

export default Visits;
