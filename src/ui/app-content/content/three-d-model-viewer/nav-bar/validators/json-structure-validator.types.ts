export type TimeValue = {
  time: number;
  value: number;
};

export type Shape = {
  shapeName: string;
  data: TimeValue[];
};

export type ValidatorOutput = {
  isValid: boolean;
  data: Shape[];
  error?: string;
};
