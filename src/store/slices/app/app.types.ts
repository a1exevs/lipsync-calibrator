import { AppStep } from 'src/common/types/app';
import { Nullable } from 'src/common/types/common';

export type AppState = {
  appStep: AppStep;
  threeDModelPath: Nullable<string>;
  availableAnimationList: string[];
  selectedAnimationUUID: Nullable<string>;
};
