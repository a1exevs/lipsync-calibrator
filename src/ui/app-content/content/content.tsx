import React from 'react';

import { AppStep } from 'src/common/types/app';
import ErrorBar from 'src/ui/app-content/content/error-bar/error-bar';
import ErrorProvider from 'src/ui/app-content/content/error-context/error.provider';
import FileUploaderContainer from 'src/ui/app-content/content/file-uploader/file-uploader.container';
import ThreeDModelProvider from 'src/ui/app-content/content/three-d-model-context/three-d-model.provider';
import UIBlocker from 'src/ui/app-content/content/ui-blocker/ui-blocker';
import UIBlockerProvider from 'src/ui/app-content/content/ui-blocker-context/ui-blocker.provider';

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
          {/* TODO configure */}
          {step === AppStep.ANIMATION_LIST_STEP && <label>AnimationListContainer</label>}
          {/* TODO Configure */}
          {step === AppStep.THREE_D_MODEL_VIEWER_STEP && <label>ThreeDModelViewerContainer</label>}
        </ThreeDModelProvider>
      </ErrorProvider>
    </UIBlockerProvider>
  );
};

export default Content;
