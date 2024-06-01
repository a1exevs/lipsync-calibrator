import { AppStep } from 'src/common/types/app';
import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

export type AppState = {
  appStep: AppStep;
  threeDModelExtension: Nullable<SupportedThreeDModelExtension>;
  availableAnimationList: AnimationItem[];
  selectedAnimationUUID: Nullable<string>;
};
