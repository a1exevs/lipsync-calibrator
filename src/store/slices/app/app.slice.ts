import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APP_STEPS } from 'src/store/slices/app/app.consts';
import { getAppStepIndex } from 'src/store/slices/app/app.helpers';
import { initialState } from 'src/store/slices/app/app.initial-state';

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
    setThreeDModelPath(state, { payload }: PayloadAction<{ path: string }>): void {
      state.threeDModelPath = payload.path;
    },
    resetThreeDModelPath(state): void {
      state.threeDModelPath = null;
    },
    setAvailableAnimationList(state, { payload }: PayloadAction<{ animations: string[] }>): void {
      state.availableAnimationList = payload.animations;
    },
    resetAvailableAnimationList(state): void {
      state.availableAnimationList = [];
    },
    setSelectedAnimation(state, { payload }: PayloadAction<{ animation: string }>): void {
      state.selectedAnimation = payload.animation;
    },
    resetSelectedAnimation(state): void {
      state.selectedAnimation = null;
    },
  },
});
export const {
  nextStep,
  previousStep,
  goToFirstStep,
  setThreeDModelPath,
  resetThreeDModelPath,
  setAvailableAnimationList,
  resetAvailableAnimationList,
  setSelectedAnimation,
  resetSelectedAnimation,
} = appSlice.actions;

export const APP_SLICE_NAME = appSlice.name;

export default appSlice.reducer;
