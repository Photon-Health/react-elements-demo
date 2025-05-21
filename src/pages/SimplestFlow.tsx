import('@photonhealth/elements');

export function SimplestFlow() {
  return (
    <>
      <div>
        <h3>Simplest Flow</h3>
      </div>
      <div>
        <h3>Photon Element</h3>
        {/*@ts-expect-error*/}
        <photon-prescribe-workflow />
      </div>
    </>
  );
}

export default SimplestFlow;
