import { useState } from 'react';
import templateOverridesData, {
  templateOverridesList,
  TemplateOverridesProp,
} from '../data/templateOverridesData';

import('@photonhealth/elements');

export function IterativeFlow() {
  const [currentTemplateOverrides, setCurrentTemplateOverrides] =
    useState<TemplateOverridesProp>({});

  const addTemplate1 = () => {
    const newOverrides = { ...currentTemplateOverrides };
    newOverrides[templateOverridesList[0].id] =
      templateOverridesData[templateOverridesList[0].id];
    setCurrentTemplateOverrides(newOverrides);
  };

  const addTemplate2 = () => {
    const newOverrides = { ...currentTemplateOverrides };
    newOverrides[templateOverridesList[1].id] =
      templateOverridesData[templateOverridesList[1].id];
    setCurrentTemplateOverrides(newOverrides);
  };

  const templateIds = Object.keys(currentTemplateOverrides);

  return (
    <>
      <div>
        <h3>Iterative Wrapper App Controls</h3>
        <div>
          <button onClick={addTemplate1}>
            Add Template 1: {templateOverridesList[0].name}
          </button>
        </div>
        <div>
          <button onClick={addTemplate2}>
            Add Template 2: {templateOverridesList[1].name}
          </button>
        </div>
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
