import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isEmpty } from 'src/common/helpers/guards';
import { APP_STEPS } from 'src/store/slices/app/app.consts';
import { getAppStepIndex } from 'src/store/slices/app/app.helpers';
import { initialState } from 'src/store/slices/app/app.initial-state';
import { MorphTargetData } from 'src/store/slices/app/app.types';
import { AnimationItem } from 'src/ui/app-content/content/animation-list/animation-list.types';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';

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
    goToFirstStep(state): void {
      const firstStep = APP_STEPS[0];
      state.appStep = firstStep;
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
    setSelectedAnimationUUID(state, { payload }: PayloadAction<{ animationUUID: string }>): void {
      state.selectedAnimationUUID = payload.animationUUID;
    },
    resetSelectedAnimationUUID(state): void {
      state.selectedAnimationUUID = null;
    },
    setMorphTargetData(state, { payload }: PayloadAction<{ data: MorphTargetData }>): void {
      state.morphTargetData = payload.data;
      state.allowToExportToJSON = !isEmpty(payload.data);
    },
  },
});
export const {
  nextStep,
  previousStep,
  goToFirstStep,
  setThreeDModelExtension,
  resetThreeDModelExtension,
  setAvailableAnimationList,
  resetAvailableAnimationList,
  setSelectedAnimationUUID,
  resetSelectedAnimationUUID,
  setMorphTargetData,
} = appSlice.actions;

export const APP_SLICE_NAME = appSlice.name;

export default appSlice.reducer;
