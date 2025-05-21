import { useState } from 'react';
import templateOverridesData, {
  TemplateOverrideOption,
  templateOverridesList,
  TemplateOverridesProp,
} from '../data/templateOverridesData';

import('@photonhealth/elements');

export function BatchFlow() {
  const [batchTemplateOverrides, setBatchTemplateOverrides] =
    useState<TemplateOverridesProp>({});
  const [selectedOverride, setSelectedOverride] = useState<TemplateOverrideOption>(
    templateOverridesList[0]
  );
  const [didLoadBatch, setDidLoadBatch] = useState<boolean>();

  function loadBatch() {
    if (didLoadBatch) return;
    setDidLoadBatch(true);
  }

  const addToBatch = () => {
    const newOverrides = { ...batchTemplateOverrides };
    newOverrides[selectedOverride.id] = templateOverridesData[selectedOverride.id];
    setBatchTemplateOverrides(newOverrides);
  };

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const id = e.target.value;
    const item = templateOverridesList.find((option) => option.id === id);
    if (item) {
      setSelectedOverride(item);
    }
  }

  const batchTemplateIds = Object.keys(batchTemplateOverrides);

  return (
    <>
      <div>
        <h3>Batch Wrapper App Controls</h3>
        <div>
          <select value={selectedOverride.id} onChange={handleSelectChange}>
            {templateOverridesList.map((option) => (
              <option value={option.id}>{option.name}</option>
            ))}
          </select>
          <button onClick={addToBatch}>Add to Batch</button>
        </div>
        <div>
          <ol>
            {templateOverridesList
              .filter((option) =>
                Object.keys(batchTemplateOverrides).includes(option.id)
              )
              .map((option) => (
                <li key={option.id}>{option.name}</li>
              ))}
          </ol>
          <button disabled={didLoadBatch} onClick={loadBatch}>
            Render Photon with Batch
          </button>
        </div>
      </div>

      {didLoadBatch && (
        <div>
          <h3>Photon Element</h3>
          {/*@ts-expect-error*/}
          <photon-prescribe-workflow
            patient-id={import.meta.env.VITE_PATIENT_ID}
            template-ids={batchTemplateIds}
            template-overrides={JSON.stringify(batchTemplateOverrides)}
          />
        </div>
      )}
    </>
  );
}

export default BatchFlow;
