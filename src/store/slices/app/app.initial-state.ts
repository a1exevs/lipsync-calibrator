import { AppStep } from 'src/common/types/app';
import { AppState } from 'src/store/slices/app/app.types';

export const initialState: AppState = {
  appStep: AppStep.THREE_D_MODEL_VIEWER_STEP,
  threeDModelPath: null,
  availableAnimationList: [],
  selectedAnimation: null,
};
