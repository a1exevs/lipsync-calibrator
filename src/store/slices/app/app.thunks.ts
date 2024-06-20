import {
  APP_SLICE_NAME,
  resetAvailableAnimationList,
  resetMorphTargetData,
  resetThreeDModelExtension,
} from 'src/store/slices/app/app.slice';
import { createAppAsyncThunk } from 'src/store/store';

export const resetAnimationListStepState = createAppAsyncThunk(
  `${APP_SLICE_NAME}/resetAnimationListStepState`,
  async (_, { dispatch }) => {
    dispatch(resetAvailableAnimationList());
    dispatch(resetThreeDModelExtension());
    dispatch(resetMorphTargetData());
  },
);
