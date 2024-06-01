import React from 'react';

import { selectedAnimationUUID, threeDModelExtension } from 'src/store/slices/app/app.selectors';
import { useError } from 'src/ui/app-content/content/error-context/use-error';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-context/use-three-d-model';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';
import { useUiBlocker } from 'src/ui/app-content/content/ui-blocker-context/use-ui-blocker';
import { useAppSelector } from 'src/ui/common/hooks/store-hooks';

const ThreeDModelViewerContainer: React.FC = () => {
  const { setError, resetError } = useError();

  const { threeDModel } = useThreeDModel();

  const animationUUID = useAppSelector(selectedAnimationUUID);
  const modelExtension = useAppSelector(threeDModelExtension);

  const { blockUI, unblockUI } = useUiBlocker();

  return (
    <ThreeDModelViewer
      model={threeDModel}
      modelExtension={modelExtension}
      selectedAnimationUUID={animationUUID}
      setError={setError}
      resetError={resetError}
      blockUI={blockUI}
      unblockUI={unblockUI}
    ></ThreeDModelViewer>
  );
};

export default ThreeDModelViewerContainer;
