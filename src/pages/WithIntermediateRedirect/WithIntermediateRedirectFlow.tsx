import { useParams } from 'react-router-dom';
import('@photonhealth/elements');

function getRedirectUri() {
  // use `http://localhost:3000/with-intermediate-redirect` to avoid redirect loop
  return 'http://localhost:3000/intermediate/redirect';
}

export function WithIntermediateRedirectFlow() {
  const params = useParams();
  const env = import.meta.env.VITE_PHOTON_ENV;
  
  return (
    <>
      <div>
        <h3>With Redirect</h3>
      </div>
      <div>
        <h3>Photon Element</h3>
        {/*@ts-expect-error*/}
        <photon-client
          id={import.meta.env.VITE_CLIENT_ID}
          org={import.meta.env.VITE_ORG_ID}
          dev-mode="true"
          auto-login="true"
          redirect-uri={getRedirectUri()}
        >
          {/*@ts-expect-error*/}
          <photon-prescribe-workflow
            patient-id={import.meta.env.VITE_PATIENT_ID}
            prescription-ids={undefined}
            enable-order="true"
            enable-send-to-patient="true"
            enable-local-pickup="true"
            enable-combine-and-duplicate="true"
            enable-med-history-refill-button="true"
          />
          {/*@ts-expect-error*/}
        </photon-client>
      </div>
    </>
  );
}

export default WithIntermediateRedirectFlow;
