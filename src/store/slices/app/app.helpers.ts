import { APP_STEPS } from 'src/store/slices/app/app.consts';
import { AppState } from 'src/store/slices/app/app.types';

export function getAppStepIndex(state: AppState): number {
  const currentStep = state.appStep;
  return APP_STEPS.findIndex(step => step === currentStep);
}
