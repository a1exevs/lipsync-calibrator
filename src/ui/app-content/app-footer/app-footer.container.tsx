import React from 'react';

import { AppStep } from 'src/common/types/app';
import { isFirstStep } from 'src/store/slices/app/app.helpers';
import { appStep } from 'src/store/slices/app/app.selectors';
import { previousStep, resetSelectedAnimationUUID } from 'src/store/slices/app/app.slice';
import { resetAnimationListStepState } from 'src/store/slices/app/app.thunks';
import AppFooter from 'src/ui/app-content/app-footer/app-footer';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-context/use-three-d-model';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const AppFooterContainer: React.FC = () => {
  const step = useAppSelector(appStep);
  const { setThreeDModel } = useThreeDModel();
  const dispatch = useAppDispatch();

  const goToPreviousStep = (): void => {
    if (isFirstStep(step)) {
      return;
    }
    if (step === AppStep.ANIMATION_LIST_STEP) {
      setThreeDModel(null);
      dispatch(resetAnimationListStepState());
    }
    if (step === AppStep.THREE_D_MODEL_VIEWER_STEP) {
      dispatch(resetSelectedAnimationUUID());
    }

    dispatch(previousStep());
  };

  return <AppFooter showBackButton={!isFirstStep(step)} onBackButtonClick={goToPreviousStep} />;
};

export default AppFooterContainer;
