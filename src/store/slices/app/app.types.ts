import { AppStep } from 'src/common/types/app';
import { Nullable } from 'src/common/types/common';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export type MorphTargetData = { data: Shape[]; fileName: string };

export type AppState = {
  appStep: AppStep;
  threeDModelExtension: Nullable<SupportedThreeDModelExtension>;
  availableAnimationList: AnimationItem[];
  selectedAnimationUUID: Nullable<string>;
  allowToExportToJSON: boolean;
  morphTargetNames: string[];
  morphTargetDataMap: Nullable<Record<string, Shape>>;
  morphTargetDataFileName: Nullable<string>;
};
