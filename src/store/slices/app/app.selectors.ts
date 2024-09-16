import { isNull } from 'src/common/helpers/guards';
import { Nullable } from 'src/common/types/common';
import { millisecToSec } from 'src/store/slices/app/app.slice';
import { createTypedDraftSafeSelector, RootState } from 'src/store/store';
import {
  Shape,
  TimeValue,
} from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export const appStep = (state: RootState) => state.app.appStep;
export const threeDModelExtension = (state: RootState) => state.app.threeDModelExtension;
export const availableAnimationList = (state: RootState) => state.app.availableAnimationList;
export const selectedAnimationUUIDs = (state: RootState) => state.app.selectedAnimationUUIDs;
export const allowToExportToJSON = (state: RootState) => state.app.allowToExportToJSON;
export const morphTargetNames = (state: RootState): string[] => state.app.morphTargetNames;
export const morphTargetDataMap = (state: RootState) => state.app.morphTargetDataMap;
export const morphTargetDataFileName = (state: RootState) => state.app.morphTargetDataFileName;
export const morphTargetPointsByName = (state: RootState, shapeName: string): TimeValue[] =>
  state.app.morphTargetDataMap?.[shapeName].data ?? [];
export const wasMorphTargetDataChanged = (state: RootState) => state.app.wasMorphTargetDataChanged;
export const morphTargetDataMapToDownload = createTypedDraftSafeSelector(
  (state: RootState) => state.app.morphTargetDataMap,
  (morphTargetDataMap: Nullable<Record<string, Shape>>) => {
    if (isNull(morphTargetDataMap)) {
      return null;
    }
    return Object.entries(morphTargetDataMap).reduce<Record<string, Shape>>((data, [shapeName, dataSet]) => {
      const points = dataSet.data.map(point => ({ time: millisecToSec(point.time), value: point.value }));
      return {
        ...data,
        [shapeName]: {
          shapeName: dataSet.shapeName,
          data: points,
        },
      };
    }, {});
  },
);
