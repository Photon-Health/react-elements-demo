import('@photonhealth/elements');

export function SimplestFlow() {
  const env = import.meta.env.VITE_PHOTON_ENV;
  return (
    <>
      <div>
        <h3>Simplest Flow</h3>
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
          <photon-prescribe-workflow />
          {/*@ts-expect-error*/}
        </photon-client>
      </div>
    </>
  );
}
export default SimplestFlow;
