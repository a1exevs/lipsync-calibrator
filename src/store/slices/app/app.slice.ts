import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { arrayToObject } from 'src/common/helpers/array';
import { isEmpty, isNull } from 'src/common/helpers/guards';
import { APP_STEPS } from 'src/store/slices/app/app.consts';
import { getAppStepIndex } from 'src/store/slices/app/app.helpers';
import { initialState } from 'src/store/slices/app/app.initial-state';
import { AnimationItem, MorphTargetData } from 'src/store/slices/app/app.types';
import { TimeValue } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.types';

export function secToMillisec(sec: number): number {
  return sec * 1000;
}

export function millisecToSec(millisec: number): number {
  return millisec / 1000;
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    nextStep(state): void {
      const index = getAppStepIndex(state);
      if (index === -1 || index === APP_STEPS.length - 1) {
        return;
      }
      state.appStep = APP_STEPS[index + 1];
    },
    previousStep(state): void {
      const index = getAppStepIndex(state);
      if (index === -1 || index === 0) {
        return;
      }
      state.appStep = APP_STEPS[index - 1];
    },
    setThreeDModelExtension(state, { payload }: PayloadAction<{ extension: SupportedThreeDModelExtension }>): void {
      state.threeDModelExtension = payload.extension;
    },
    resetThreeDModelExtension(state): void {
      state.threeDModelExtension = null;
    },
    setAvailableAnimationList(state, { payload }: PayloadAction<{ animations: AnimationItem[] }>): void {
      state.availableAnimationList = payload.animations;
    },
    resetAvailableAnimationList(state): void {
      state.availableAnimationList = [];
    },
    setSelectedAnimationUUIDs(state, { payload }: PayloadAction<{ animationUUIDs: string[] }>): void {
      state.selectedAnimationUUIDs = payload.animationUUIDs;
    },
    resetSelectedAnimationUUIDs(state): void {
      state.selectedAnimationUUIDs = [];
    },
    setMorphTargetData(state, { payload }: PayloadAction<{ data: MorphTargetData }>): void {
      const { data, fileName } = payload.data;
      data.forEach(dataSet => {
        dataSet.data.forEach(point => {
          // d3 drag functionality works better with x-values > 1
          // so we transform seconds to milliseconds
          point.time = secToMillisec(point.time);
        });
      });
      const morphTargetDataMap = arrayToObject(data, 'shapeName');
      state.morphTargetNames = Object.keys(morphTargetDataMap);
      state.morphTargetDataMap = morphTargetDataMap;

      state.morphTargetDataFileName = fileName;

      state.allowToExportToJSON = !isEmpty(payload.data);
    },
    setWasMorphTargetDataChanged(state, { payload }: PayloadAction<{ hasChanges: boolean }>): void {
      state.wasMorphTargetDataChanged = payload.hasChanges;
    },
    resetMorphTargetData(state): void {
      state.morphTargetNames = [];
      state.morphTargetDataMap = null;
      state.morphTargetDataFileName = null;

      state.allowToExportToJSON = false;
      state.wasMorphTargetDataChanged = false;
    },
    updateMorphTargetData(state, { payload }: PayloadAction<{ shapeName: string; newPoints: TimeValue[] }>): void {
      const { shapeName, newPoints } = payload;
      const shapeToUpdate = state.morphTargetDataMap?.[shapeName] ?? null;
      if (isNull(shapeToUpdate)) {
        return;
      }
      shapeToUpdate.data = newPoints;
      state.wasMorphTargetDataChanged = true;
    },
  },
});
export const {
  nextStep,
  previousStep,
  setThreeDModelExtension,
  resetThreeDModelExtension,
  setAvailableAnimationList,
  resetAvailableAnimationList,
  setSelectedAnimationUUIDs,
  resetSelectedAnimationUUIDs,
  setMorphTargetData,
  resetMorphTargetData,
  updateMorphTargetData,
  setWasMorphTargetDataChanged,
} = appSlice.actions;

export const APP_SLICE_NAME = appSlice.name;

export default appSlice.reducer;
