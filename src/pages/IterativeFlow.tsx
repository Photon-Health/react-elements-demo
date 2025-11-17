import { useState } from 'react';
import templateOverridesData, {
  TemplateOverrideOption,
  templateOverridesList,
  TemplateOverridesProp,
} from '../data/templateOverridesData';

import('@photonhealth/elements');

export function IterativeFlow() {
  const [currentTemplateOverrides, setCurrentTemplateOverrides] =
    useState<TemplateOverridesProp>({});

  const addTemplate = (option: TemplateOverrideOption) => {
    const newOverrides = { ...currentTemplateOverrides };
    newOverrides[option.id] = templateOverridesData[option.id];
    setCurrentTemplateOverrides(newOverrides);
  };

  const templateIds = Object.keys(currentTemplateOverrides);

  const env = import.meta.env.VITE_PHOTON_ENV;
  return (
    <>
      <div>
        <h3>Iterative Wrapper App Controls</h3>
        {templateOverridesList.map((option) => (
          <div>
            <button onClick={() => addTemplate(option)}>
              Add "{option.name}" Template
            </button>
          </div>
        ))}
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
            key={templateIds.join(',')}
            patient-id={import.meta.env.VITE_PATIENT_ID}
            template-ids={templateIds}
            template-overrides={JSON.stringify(currentTemplateOverrides)}
          />
          {/*@ts-expect-error*/}
        </photon-client>
      </div>
    </>
  );
}

export default IterativeFlow;
