import { AppStep } from 'src/common/types/app';
import { AppState } from 'src/store/slices/app/app.types';

export const initialState: AppState = {
  appStep: AppStep.FILE_UPLOADER_STEP,
  threeDModelExtension: null,
  availableAnimationList: [],
  selectedAnimationUUID: null,
};
