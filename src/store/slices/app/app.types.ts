import { AppStep } from 'src/common/types/app';
import { Nullable } from 'src/common/types/common';
import { Shape } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export type MorphTargetData = { data: Shape[]; fileName: string };

export type AnimationItem = {
  uuid: string;
  name: string;
  duration: number;
};

export type AppState = {
  appStep: AppStep;
  threeDModelExtension: Nullable<SupportedThreeDModelExtension>;
  availableAnimationList: AnimationItem[];
  selectedAnimationUUIDs: string[];
  allowToExportToJSON: boolean;
  morphTargetNames: string[];
  morphTargetDataMap: Nullable<Record<string, Shape>>;
  morphTargetDataFileName: Nullable<string>;
  wasMorphTargetDataChanged: boolean;
};
