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
        <photon-prescribe-workflow
          key={templateIds.join(',')}
          patient-id={import.meta.env.VITE_PATIENT_ID}
          template-ids={templateIds}
          template-overrides={JSON.stringify(currentTemplateOverrides)}
        />
      </div>
    </>
  );
}

export default IterativeFlow;
