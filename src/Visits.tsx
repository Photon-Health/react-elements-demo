import { useState } from 'react';

import('@photonhealth/elements');

function Visits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <photon-multirx-form-wrapper hide-templates="false" /> : null}
    </>
  );
}

export default Visits;
