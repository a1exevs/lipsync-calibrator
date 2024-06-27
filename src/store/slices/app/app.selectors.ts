import { RootState } from 'src/store/store';
import { TimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export const appStep = (state: RootState) => state.app.appStep;
export const threeDModelExtension = (state: RootState) => state.app.threeDModelExtension;
export const availableAnimationList = (state: RootState) => state.app.availableAnimationList;
export const selectedAnimationUUID = (state: RootState) => state.app.selectedAnimationUUID;
export const allowToExportToJSON = (state: RootState) => state.app.allowToExportToJSON;
export const morphTargetNames = (state: RootState): string[] => state.app.morphTargetNames;
export const morphTargetDataMap = (state: RootState) => state.app.morphTargetDataMap;
export const morphTargetDataFileName = (state: RootState) => state.app.morphTargetDataFileName;
export const morphTargetPointsByName = (state: RootState, shapeName: string): TimeValue[] =>
  state.app.morphTargetDataMap?.[shapeName].data ?? [];
