import React from 'react';

import ThreeDModelViewer from 'src/ui/app-content/content/three-d-model-viewer/three-d-model-viewer';

const ThreeDModelViewerContainer: React.FC = () => {
  // TODO get from redux
  const filePath = '';
  // TODO get from redux
  const selectedAnimation = '';

  return <ThreeDModelViewer filePath={filePath} selectedAnimation={selectedAnimation}></ThreeDModelViewer>;
};

export default ThreeDModelViewerContainer;
