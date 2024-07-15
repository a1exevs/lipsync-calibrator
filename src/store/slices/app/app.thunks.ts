import { isUndefined } from 'src/common/helpers/guards';
import {
  APP_SLICE_NAME,
  resetAvailableAnimationList,
  resetMorphTargetData,
  resetSelectedAnimationUUID,
  resetThreeDModelExtension,
  setAvailableAnimationList,
  setSelectedAnimationUUID,
} from 'src/store/slices/app/app.slice';
import { AnimationItem } from 'src/store/slices/app/app.types';
import { createAppAsyncThunk } from 'src/store/store';

export const resetThreeDModelViewerStepState = createAppAsyncThunk(
  `${APP_SLICE_NAME}/resetThreeDModelViewerStepState`,
  async (_, { dispatch }) => {
    dispatch(resetAvailableAnimationList());
    dispatch(resetThreeDModelExtension());
    dispatch(resetMorphTargetData());
    dispatch(resetSelectedAnimationUUID());
  },
);
/**
 * If index = -1 then animationToUpdate will be added as new last element (via 'push' method)
 */
export const updateAnimations = createAppAsyncThunk<{ animationToUpdate: AnimationItem; index: number }>(
  `${APP_SLICE_NAME}/updateAnimations`,
  async ({ animationToUpdate, index }, { dispatch, getState }) => {
    const state = getState().app;
    const animationBeforeUpdate = state.availableAnimationList[index];
    if (isUndefined(animationBeforeUpdate) && index !== -1) {
      return;
    }
    let updatedAnimmations = [];
    if (index === -1) {
      updatedAnimmations = [...state.availableAnimationList, animationToUpdate];
    } else {
      updatedAnimmations = [
        ...state.availableAnimationList.slice(0, index),
        animationToUpdate,
        ...state.availableAnimationList.slice(index + 1, state.availableAnimationList.length),
      ];
    }
    dispatch(setAvailableAnimationList({ animations: updatedAnimmations }));
    const uuidBefore = animationBeforeUpdate?.uuid;
    if (uuidBefore === state.selectedAnimationUUID) {
      dispatch(setSelectedAnimationUUID({ animationUUID: animationToUpdate.uuid }));
    }
  },
);
