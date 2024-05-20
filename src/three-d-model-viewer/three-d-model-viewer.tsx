import React from 'react';

type Props = {
  // TODO Use extension of file for Loader building via factory
  fileExtension: string;
  filePath: string;
  // TODO Correct types when we will load animations via 3d model
  selectedAnimation: string;
};

const ThreeDModelViewer: React.FC<Props> = () => {
  // TODO Implement me
  return <div>ThreeDModelViewer</div>;
};

export default ThreeDModelViewer;
