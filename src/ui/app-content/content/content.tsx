import React from 'react';

import { AppStep } from 'src/common/types/app';
import ErrorProvider from 'src/ui/app-content/content/error-bar/context/error.provider';
import ErrorBar from 'src/ui/app-content/content/error-bar/error-bar';
import FileUploaderContainer from 'src/ui/app-content/content/file-uploader/file-uploader.container';
import ThreeDModelProvider from 'src/ui/app-content/content/three-d-model-viewer/context/three-d-model.provider';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';
import UIBlockerProvider from 'src/ui/app-content/content/ui-blocker/context/ui-blocker.provider';
import UIBlocker from 'src/ui/app-content/content/ui-blocker/ui-blocker';

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
          {step === AppStep.THREE_D_MODEL_VIEWER_STEP && <ThreeDModelViewer />}
        </ThreeDModelProvider>
      </ErrorProvider>
    </UIBlockerProvider>
  );
};

export default Content;
