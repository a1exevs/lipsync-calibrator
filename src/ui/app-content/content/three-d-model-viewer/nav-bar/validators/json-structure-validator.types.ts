import { IdentifiedItem } from 'src/common/types/app';

export type TimeValue = {
  time: number;
  value: number;
};

export type IdentifiedTimeValue = IdentifiedItem & TimeValue;

export type Shape = {
  shapeName: string;
  data: TimeValue[];
};

export type ValidatorOutput = {
  isValid: boolean;
  data: Shape[];
  error?: string;
};
