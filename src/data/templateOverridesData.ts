// todo: import this from @photon/elements
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

// Using Boson (dev env) Test Organization 11 templates
const templateOverridesData: {
  [key: string]: TemplateOverride;
} = {
  // OrgTempl
  // amoxicillin 200 MG in 5 mL Oral Suspension
  // Refills Allowed:  0
  // Dispense Unit:  Each
  // Quantity:  2 ct / 4 day
  // Dispense As Written:  Yes
  // Instructions:  234
  tmp_01J6DBEHZX11BPMY38G9PWASMH: {
    instructions: 'Override instructions 1',
  },

  // MEOW
  // Cat Hair Extract Injection Solution 10000 BAU/ML
  // Refills Allowed: 0
  // Dispense Unit: Each
  // Quantity: 1 ct / 1 day
  // Dispense As Written:  No
  // Instructions:  HISSSSSSS
  tmp_01J8R47XMT041WG03REBC0FYYK: {
    instructions: 'Override instructions 2',
  },
  tmp_invalid: {},
};

export type TemplateOverrideOption = {
  id: string;
  name: string;
};
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
