import React from 'react';

import { AppStep } from 'src/common/types/app';
import ErrorBar from 'src/ui/app-content/content/error-bar/error-bar';
import ErrorProvider from 'src/ui/app-content/content/error-context/error.provider';
import FileUploaderContainer from 'src/ui/app-content/content/file-uploader/file-uploader.container';
import ThreeDModelProvider from 'src/ui/app-content/content/three-d-model-context/three-d-model.provider';

type Props = {
  step: AppStep;
};

const Content: React.FC<Props> = ({ step }) => {
  return (
    <ErrorProvider>
      <ErrorBar />
      <ThreeDModelProvider>
        {step === AppStep.FILE_UPLOADER_STEP && <FileUploaderContainer />}
        {/* TODO configure component when it'll be implemented */}
        {step === AppStep.ANIMATION_LIST_STEP && <label>AnimationListContainer</label>}
        {/* TODO configure component when it'll be implemented */}
        {step === AppStep.THREE_D_MODEL_VIEWER_STEP && <label>ThreeDModelViewerContainer</label>}
      </ThreeDModelProvider>
    </ErrorProvider>
  );
};

export default Content;
