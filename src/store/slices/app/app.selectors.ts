import { RootState } from 'src/store/store';

export const appStep = (state: RootState) => state.app.appStep;
export const threeDModelPath = (state: RootState) => state.app.threeDModelPath;
export const availableAnimationList = (state: RootState) => state.app.availableAnimationList;
export const selectedAnimation = (state: RootState) => state.app.selectedAnimation;
