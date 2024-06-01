import { RootState } from 'src/store/store';

export const appStep = (state: RootState) => state.app.appStep;
export const threeDModelExtension = (state: RootState) => state.app.threeDModelExtension;
export const availableAnimationList = (state: RootState) => state.app.availableAnimationList;
export const selectedAnimationUUID = (state: RootState) => state.app.selectedAnimationUUID;
