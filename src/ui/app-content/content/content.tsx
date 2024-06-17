import React from 'react';

import { AppStep } from 'src/common/types/app';
import { isFirstStep } from 'src/store/slices/app/app.helpers';
import AnimationListContainer from 'src/ui/app-content/content/animation-list/animation-list.container';
import ErrorBar from 'src/ui/app-content/content/error-bar/error-bar';
import ErrorProvider from 'src/ui/app-content/content/error-context/error.provider';
import FileUploaderContainer from 'src/ui/app-content/content/file-uploader/file-uploader.container';
import ThreeDModelProvider from 'src/ui/app-content/content/three-d-model-context/three-d-model.provider';
import ThreeDModelViewerContainer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer.container';
import UIBlocker from 'src/ui/app-content/content/ui-blocker/ui-blocker';
import UIBlockerProvider from 'src/ui/app-content/content/ui-blocker-context/ui-blocker.provider';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  step: AppStep;
};

const Content: React.FC<Props> = ({ step }) => {
  return (
    <UIBlockerProvider>
      <ErrorProvider>
        <ErrorBar />
        <UIBlocker />
        <ThreeDModelProvider>
          {step === AppStep.FILE_UPLOADER_STEP && <FileUploaderContainer />}
          {step === AppStep.ANIMATION_LIST_STEP && <AnimationListContainer />}
          {/* TOOD Improve configurationn of ThreeDModelViewerContainer */}
          {!isFirstStep(step) && (
            <MUIBox display={step !== AppStep.THREE_D_MODEL_VIEWER_STEP ? 'none' : ''}>
              <ThreeDModelViewerContainer />
            </MUIBox>
          )}
        </ThreeDModelProvider>
      </ErrorProvider>
    </UIBlockerProvider>
  );
};

export default Content;
