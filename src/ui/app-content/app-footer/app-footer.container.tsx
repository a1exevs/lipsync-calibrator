import React from 'react';

import { AppStep } from 'src/common/types/app';
import { isFirstStep } from 'src/store/slices/app/app.helpers';
import { appStep, wasMorphTargetDataChanged } from 'src/store/slices/app/app.selectors';
import { previousStep } from 'src/store/slices/app/app.slice';
import { resetThreeDModelViewerStepState } from 'src/store/slices/app/app.thunks';
import AppFooter from 'src/ui/app-content/app-footer/app-footer';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-viewer/context/use-three-d-model';
import { useAppDispatch, useAppSelector } from 'src/ui/shared/hooks/store-hooks';

const AppFooterContainer: React.FC = () => {
  const step = useAppSelector(appStep);
  const wasMorphTargetChanged = useAppSelector(wasMorphTargetDataChanged);
  const { setThreeDModel, setThreeDModelExtension } = useThreeDModel();
  const dispatch = useAppDispatch();

  const goToPreviousStep = (): void => {
    if (isFirstStep(step)) {
      return;
    }
    if (step === AppStep.THREE_D_MODEL_VIEWER_STEP) {
      setThreeDModel(null);
      setThreeDModelExtension(null);
      dispatch(resetThreeDModelViewerStepState());
    }

    dispatch(previousStep());
  };

  return (
    <AppFooter
      showBackButton={!isFirstStep(step)}
      onBackButtonClick={goToPreviousStep}
      wasMorphTargetDataChanged={wasMorphTargetChanged}
    />
  );
};

export default AppFooterContainer;
