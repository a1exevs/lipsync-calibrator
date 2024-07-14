import {
  APP_SLICE_NAME,
  resetAvailableAnimationList,
  resetMorphTargetData,
  resetSelectedAnimationUUID,
  resetThreeDModelExtension,
} from 'src/store/slices/app/app.slice';
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
