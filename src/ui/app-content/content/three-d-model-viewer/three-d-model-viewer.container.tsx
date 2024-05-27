import React from 'react';

import { FBXDriverTestModelPath } from 'src/ui/app-content/content/three-d-model-viewer/drivers/fbx-driver/fbx-driver-test-models';
import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';

const ThreeDModelViewerContainer: React.FC = () => {
  // TODO get from redux
  const filePath = FBXDriverTestModelPath.HUMAN;
  // TODO get from redux
  const selectedAnimationUUID = '';

  return <ThreeDModelViewer filePath={filePath} selectedAnimationUUID={selectedAnimationUUID}></ThreeDModelViewer>;
};

export default ThreeDModelViewerContainer;
