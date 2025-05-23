import { FormEvent, useState } from 'react';

import('@photonhealth/elements');

export function SetPharmacy() {
  const [pharmacyId, setPharmacyId] = useState<string|undefined>();
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPharmacyId(inputValue);
  };

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
          <button type="submit">
            Set Pharmacy ID
          </button>
        </form>

      </div>
      <div>
        <h3>Photon Element</h3>
        {/*@ts-expect-error*/}
        <photon-prescribe-workflow
          key={pharmacyId}
          enable-order="true"
          patient-id={import.meta.env.VITE_PATIENT_ID}
          pharmacy-id={pharmacyId}
        />
      </div>
    </>
  );
}

export default SetPharmacy;
