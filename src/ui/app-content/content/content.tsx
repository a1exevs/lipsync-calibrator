import React from 'react';

import { AppStep } from 'src/common/types/app';

type Props = {
  step: AppStep;
};

const Content: React.FC<Props> = ({ step }) => {
  return (
    <>
      {/* TODO configure component when it'll be implemented */}
      {step === AppStep.FILE_UPLOADER_STEP && <label>FileUploaderContainer</label>}
      {/* TODO configure component when it'll be implemented */}
      {step === AppStep.ANIMATION_LIST_STEP && <label>AnimationListContainer</label>}
      {/* TODO configure component when it'll be implemented */}
      {step === AppStep.THREE_D_MODEL_VIEWER_STEP && <label>ThreeDModelViewerContainer</label>}
    </>
  );
};

export default Content;
