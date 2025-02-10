import { AppStep } from 'src/common/types/app';
import { AppState } from 'src/store/slices/app/app.types';

export const initialState: AppState = {
  appStep: AppStep.FILE_UPLOADER_STEP,
  threeDModelExtension: null,
  availableAnimationList: [],
  selectedAnimationUUIDs: [],
  allowToExportToJSON: false,
  morphTargetNames: [],
  morphTargetDataMap: null,
  morphTargetDataFileName: null,
  wasMorphTargetDataChanged: false,
};
