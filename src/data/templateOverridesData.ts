// todo: setup type exports from @photon/elements
export type TemplateOverridesProp = {
  [key: string]: TemplateOverride;
};

type TemplateOverride = {
  daysSupply?: number;
  dispenseAsWritten?: boolean;
  dispenseQuantity?: number;
  dispenseUnit?: string;
  fillsAllowed?: number;
  instructions?: string;
  notes?: string;
  externalId?: string;
};

// Replace the tmp_ IDs with your organization's template IDs
const templateOverridesData: {
  [key: string]: TemplateOverride;
} = {
  tmp_01J6DBEHZX11BPMY38G9PWASMH: {
    instructions: 'Override instructions 1',
  },
  tmp_01J8R47XMT041WG03REBC0FYYK: {
    instructions: 'Override instructions 2',
  },
  tmp_invalid: {},
};

export type TemplateOverrideOption = {
  id: string;
  name: string;
};

// Replace the tmp_ IDs with your organization's template IDs
export const templateOverridesList: TemplateOverrideOption[] = [
  {
    id: 'tmp_01J6DBEHZX11BPMY38G9PWASMH',
    name: 'Amoxicillin',
  },
  {
    id: 'tmp_01J8R47XMT041WG03REBC0FYYK',
    name: 'Cat Hair Extract',
  },
  {
    id: 'tmp_invalid',
    name: 'Invalid Template',
  }
];

export default templateOverridesData;
