import { FormEvent, useState } from 'react';

import('@photonhealth/elements');

export function SetPharmacy() {
  const [pharmacyId, setPharmacyId] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPharmacyId(inputValue);
  };

  const env = import.meta.env.VITE_PHOTON_ENV;
  return (
    <>
      <div>
        <h3>Set Pharmacy</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="phr_exampleId"
          />
          <button type="submit">Set Pharmacy ID</button>
        </form>
      </div>
      <div>
        <h3>Photon Element</h3>
        {/*@ts-expect-error*/}
        <photon-client
          id={import.meta.env.VITE_CLIENT_ID}
          org={import.meta.env.VITE_ORG_ID}
          env={env}
          domain={`auth.${env}.health`}
          audience={`https://api.${env}.health`}
          uri={`https://api.${env}.health/graphql`}
          auto-login="true"
          redirect-uri={`${window.location.protocol}//${window.location.host}`}
        >
          {/*@ts-expect-error*/}
          <photon-prescribe-workflow
            key={pharmacyId}
            enable-order="true"
            patient-id={import.meta.env.VITE_PATIENT_ID}
            pharmacy-id={pharmacyId}
          />
          {/*@ts-expect-error*/}
        </photon-client>
      </div>
    </>
  );
}

export default SetPharmacy;
