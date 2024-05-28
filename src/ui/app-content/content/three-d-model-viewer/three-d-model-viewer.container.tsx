import React from 'react';

import { useError } from 'src/ui/app-content/content/error-context/use-error';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';

const ThreeDModelViewerContainer: React.FC = () => {
  const { setError, resetError } = useError();

  // TODO Implement

  return <ThreeDModelViewer filePath={''} setError={setError} resetError={resetError}></ThreeDModelViewer>;
};

export default ThreeDModelViewerContainer;
