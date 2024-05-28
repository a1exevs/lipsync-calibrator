import React from 'react';

import { useError } from 'src/ui/app-content/content/error-context/use-error';
import { useThreeDModel } from 'src/ui/app-content/content/three-d-model-context/use-three-d-model';
import { SupportedThreeDModelExtension } from 'src/ui/app-content/content/three-d-model-viewer/drivers/driver-config-map.types';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';

const ThreeDModelViewerContainer: React.FC = () => {
  const { setError, resetError } = useError();

  // TODO Connect with store
  const animationUUID = '';
  const modelExtension = SupportedThreeDModelExtension.FBX;

  const { threeDModel } = useThreeDModel();

  return (
    <ThreeDModelViewer
      model={threeDModel}
      modelExtension={modelExtension}
      selectedAnimationUUID={animationUUID}
      setError={setError}
      resetError={resetError}
    ></ThreeDModelViewer>
  );
};

export default ThreeDModelViewerContainer;
